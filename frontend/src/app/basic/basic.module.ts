import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { MediaTypeCollectionComponent } from './media-type-collection/media-type-collection.component';
import { MediaTypeAggregateComponent } from './media-type-aggregate/media-type-aggregate.component';
import { MediaObjectCollectionComponent } from './media-object-collection/media-object-collection.component';
import { MediaObjectAggregateComponent } from './media-object-aggregate/media-object-aggregate.component';
import { MediaObjectFormComponent } from './media-object-form/media-object-form.component';

@NgModule({
  declarations: [
    BasicComponent,
    MediaTypeCollectionComponent,
    MediaTypeAggregateComponent,
    MediaObjectCollectionComponent,
    MediaObjectAggregateComponent,
    MediaObjectFormComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
