import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HydraClientFrameworkModule } from '../framework/hydra-framework.module';
import { HydraCollection } from './components/hydra-collection.component';
import { WikiBusApiComponent } from './components/wikibus.component';

const router = RouterModule.forChild([
  {
      path: '**',
      component: WikiBusApiComponent
  }
]);

@NgModule({
  declarations: [
    WikiBusApiComponent,
    HydraCollection
  ],
  imports: [
    CommonModule,
    HydraClientFrameworkModule.forRoot({
      components: [
        {
          canRender: HydraCollection.canRender,
          load: () => Promise.resolve(HydraCollection)
        }
      ]
    }),
    router    
  ]
})
export class HydraFrameworkExampleModule {}


