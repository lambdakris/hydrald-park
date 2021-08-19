import { Component, Injectable } from '@angular/core';
import { isCollection } from 'src/app/framework/utilities/hydra-resource.utilities';
import { ResourceRendererRegistration } from './model/resource-renderer-registration';

// @Component({
//   template: `
//     <hydra-renderer defaultIri="https://www.wikibus.org"></hydra-renderer>
//   `
// })
// class HydraRenderer {
//   private renderers: ResourceRendererRegistration[] = [
//     ...defaultRenderers,
//     {
//       canRender: (x) => isCollection(x) && x.id.value == "books",
//       load: () => Promise.resolve(BookCollectionRenderer)
//     }
//   ]
// }

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
