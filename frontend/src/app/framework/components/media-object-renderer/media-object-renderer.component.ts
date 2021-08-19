import { Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hydra } from 'alcaeus/web';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MediaHostDirective } from 'src/app/framework/directives/media-host.directive';
import { HydraResourceComponentProvider } from '../../services/hydra-renderer-provider.service';
import { ResourceFetchService, resourceFetchServiceProvider } from '../../services/resource/fetch';
import { ResourceRendererProviderService } from '../../services/resource/render/resource-renderer-provider.service';
import { ResourceRendererRegistryService } from '../../services/resource/render/resource-renderer-registry.service';
import { resourceRoutingServiceProvider } from '../../services/resource/routing';
import { HYDRA_RESOURCE } from '../../tokens/hydra-resource.token';

@Component({
  selector: 'app-media-object-renderer',
  template: `
    <div *ngIf="isLoading">
      Loading...
    </div>
    <ng-template mediaHost></ng-template>
  `,
  providers: [
    resourceRoutingServiceProvider, 
    resourceFetchServiceProvider,
    ResourceRendererRegistryService,
    ResourceRendererProviderService
  ]
})
export class MediaObjectRendererComponent implements OnInit, OnDestroy {
  //private baseUri: string = "https://sources.wikibus.org/";
  private destroySubject = new Subject();

  public isLoading = false;

  @ViewChild(MediaHostDirective, { static: true })
  public mediaHost: MediaHostDirective | undefined;

  constructor(
    private hydraResourceService: ResourceFetchService,
    private hydraResourceRendererProvider: ResourceRendererProviderService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {}
  
  ngOnInit(): void {
    // this.route.url
    //   .pipe(
    //     takeUntil(this.destroySubject),
    //     map(uriSegments => this.baseUri + uriSegments.join("/"))
    //   )

    // localhost:8080/framework;iri=https://sources.wikibus.org/

    this.hydraResourceService
      .getResource$()
      .subscribe(async resource => {
        if (!resource)
        {
          return;
        }

        var renderer = await this.hydraResourceRendererProvider.getComponent(resource);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(renderer);
        var componentInjector = Injector.create({
          providers: [
            {
              provide: HYDRA_RESOURCE,
              useValue: resource
            }
          ],
          parent: this.injector
        });
        
        this.mediaHost?.viewContainerRef.createComponent(componentFactory, 0, componentInjector);
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}        
    