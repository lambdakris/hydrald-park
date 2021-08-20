import { Component, Inject } from '@angular/core';
import { HYDRA_RESOURCE } from 'src/app/framework/tokens/hydra-resource.token';
import { isCollection } from 'src/app/framework/utilities/hydra-resource.utilities';
import { Resource } from '../../framework/model';

@Component({
  template: `
    <div>
      This is a collection with members:
      <li *ngFor="let link of memberLinks">
        <hydra-link [src]=link>
          <a>
            {{ link }}
          </a>
        </hydra-link>
      </li>
    </div>
  `
})
export class HydraCollection
{
  public memberLinks: string[] = [];

  constructor(
    @Inject(HYDRA_RESOURCE) public resource: Resource
  )
  {
    if (!isCollection(resource))
    {
      return;
    }

    this.memberLinks = resource.member.map(x => x.id.value);
  }

  static canRender(
    resource: Resource
  ): boolean {
    return isCollection(resource)
  }
}
