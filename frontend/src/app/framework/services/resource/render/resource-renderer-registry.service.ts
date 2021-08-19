import { Component, Injectable } from '@angular/core';
import { isCollection } from 'src/app/framework/utilities/hydra-resource.utilities';
import { ResourceRendererRegistration } from './model/resource-renderer-registration';

// @Component({
//   template: `
//     <hydra-renderer baseIri="https://www.wikibus.com"></hydra-renderer>
//   `
// })
// class ExternalAppComponent {

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
