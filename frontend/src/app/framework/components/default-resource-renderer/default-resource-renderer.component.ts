import { Component, Inject } from '@angular/core';
import { Resource } from '../../model';
import { HYDRA_RESOURCE } from '../../tokens/hydra-resource.token';
import { getDescription, getTitle } from '../../utilities/hydra-resource.utilities';

type SimpleResource = {
  title: string;
  description: string | null;
  links: string[];
}

@Component({
  template: `
    <div>
      <p> {{ resource.title }} </p>
      <p> {{ resource.description }} </p>
      <ul>
        <li *ngFor="let link of links">
          <hydra-link [src]=link>
            <a>
              {{ link }}
            </a>
          </hydra-link>
        </li>
      </ul>
    </div>
  `
})
export class DefaultResourceRenderer {
  public resource: SimpleResource;
  public links: string[];

  constructor(
    @Inject(HYDRA_RESOURCE) resource: Resource
  ){
    this.links = resource.getLinks().map(x => x.resources[0].id.value);

    this.resource = {
      title: getTitle(resource),
      description: getDescription(resource),
      links: this.links
    };
  }
}
