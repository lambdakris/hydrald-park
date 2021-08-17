import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikibusRoutingModule } from './wikibus-routing.module';
import { WikibusComponent } from './wikibus.component';

@NgModule({
  declarations: [
    WikibusComponent
  ],
  imports: [
    CommonModule,
    WikibusRoutingModule
  ]
})
export class WikibusModule { }
