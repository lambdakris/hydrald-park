import { Component, Inject } from '@angular/core';
import { Resource } from 'alcaeus';
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
      <p> {{ resource.links }} </p>
    </div>
  `
})
export class DefaultResourceRenderer {
  public resource: SimpleResource;

  constructor(
    @Inject(HYDRA_RESOURCE) resource: Resource
  ){
    this.resource = {
      title: getTitle(resource),
      description: getDescription(resource),
      links: resource.getLinks().map(x => x.resources[0].id.value)
    }
  }
}
