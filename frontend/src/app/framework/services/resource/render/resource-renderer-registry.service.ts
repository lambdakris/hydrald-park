import { Inject, Injectable } from '@angular/core';
import { HydraFrameworkConfig } from 'src/app/framework/model';
import { HydraFrameworkConfigurationService } from '../../framework-configuration.service';
import { ResourceRendererRegistration } from './model/resource-renderer-registration';

@Injectable()
export class ResourceRendererRegistryService {
  private registrations: ResourceRendererRegistration[] = [
    {
      canRender: () => true, 
      load: () => import("../../../components/default-resource-renderer/default-resource-renderer.component").then(x => x.DefaultResourceRenderer)
    },
    {
      canRender: () => true, 
      load: () => import("./components/no-renderer.component").then(x => x.NoRenderer)
    }
  ];

  constructor(
    @Inject(HydraFrameworkConfigurationService) private config: HydraFrameworkConfig)
  {
    this.registrations = [
      ...config.components ?? [],
      ...this.registrations
    ];
  }

  public register(
    registration: ResourceRendererRegistration
  )
  {
    this.registrations.push(registration);
  }

  public getRegistrations()
  {
    return this.registrations;
  }
}
