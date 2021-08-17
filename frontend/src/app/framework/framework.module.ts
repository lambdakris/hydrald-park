import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkRoutingModule } from './framework-routing.module';
import { FrameworkComponent } from './framework.component';

@NgModule({
  declarations: [
    FrameworkComponent
  ],
  imports: [
    CommonModule,
    FrameworkRoutingModule
  ]
})
export class FrameworkModule { }
