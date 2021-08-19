import { Component, NgModule } from '@angular/core';
import { Resource } from '../../../../model';

export type ResourceRendererRegistration = {
  canRender: (resource: Resource) => boolean;
  load: () => Promise<any> 
}
