import { Component, ComponentFactoryResolver, Injector, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaHostDirective } from '../../../framework/directives/media-host.directive';
import { ResourceFetchService, resourceFetchServiceProvider } from '../../services/resource/fetch';
import { ResourceRendererProviderService } from '../../services/resource/render/resource-renderer-provider.service';
import { ResourceRendererRegistryService } from '../../services/resource/render/resource-renderer-registry.service';
import { HydraRouter, hydraRouterProvider } from '../../services/router';
import { HYDRA_RESOURCE } from '../../tokens/hydra-resource.token';

@Component({
  selector: 'hydra-api',
  template: `
    <div *ngIf="isLoading">
      Loading...
    </div>
    <ng-template mediaHost></ng-template>
  `,
  providers: [
    hydraRouterProvider, 
    resourceFetchServiceProvider,
    ResourceRendererRegistryService,
    ResourceRendererProviderService
  ]
})
export class MediaObjectRendererComponent implements OnInit, OnDestroy {
  @Input()
  public src?: string;

  private destroySubject = new Subject();

  public isLoading = false;

  @ViewChild(MediaHostDirective, { static: true })
  public mediaHost: MediaHostDirective | undefined;

  constructor(
    private hydraResourceService: ResourceFetchService,
    private hydraResourceRendererProvider: ResourceRendererProviderService,
    private hydraResourceRouter: HydraRouter,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {}
  
  ngOnInit(): void {
    this.hydraResourceRouter.getIri$().subscribe(
      iri => {
        console.log(iri, this.src);
        if (!iri && this.src)
        {
          this.hydraResourceRouter.route(this.src);
        }
      }
    );

    this.hydraResourceService
      .getResource$()
      .subscribe(async resource => {
        if (!resource)
        {
          return;
        }

        var ontology = resource.apiDocumentation?.supportedClass.find(x => x.id == resource.id);
        console.log(ontology);

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
        
        this.mediaHost?.viewContainerRef.clear();
        this.mediaHost?.viewContainerRef.createComponent(componentFactory, 0, componentInjector);
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}        
    