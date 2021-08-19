import { Component, Injectable, NgModule } from '@angular/core';
import { Resource } from '../../../model';
import { ResourceRendererRegistryService } from './resource-renderer-registry.service';

@Injectable()
export class ResourceRendererProviderService {
  constructor(
    private registry: ResourceRendererRegistryService
  )
  {}

  public async getComponent(
    resource: Resource
  ): Promise<any> 
  {
    var registrationEntries = this.registry.getRegistrations();
    return await registrationEntries.find((entry) => entry.canRender(resource))?.load() ?? null
  }
}


