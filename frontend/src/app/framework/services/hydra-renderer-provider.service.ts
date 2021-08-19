import { Component, Injectable } from '@angular/core';
import { Resource } from 'alcaeus';

export type ResourceComponentRegistration = {
  canRender: (resource: Resource) => boolean;
  load: () => Promise<any> 
}

@Injectable()
export class HydraResourceComponentProvider {
  private renderers: ResourceComponentRegistration[] = [
    {
      canRender: () => true,
      load: () => import("../components/default-resource-renderer/default-resource-renderer.component").then(x => x.DefaultResourceRenderer)
  }];

  public async getRenderer(
    resource: Resource
  ): Promise<any> {
    const foundRegistration =
      this.renderers.find(x => x.canRender(resource));

    return foundRegistration?.load() ?? NoRendererFound;
  }
}

@Component({
  template: `
    <p> No renderer found </p>
  `
})
export class NoRendererFound {}
