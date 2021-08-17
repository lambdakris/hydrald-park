import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { WikibusComponent } from './wikibus.component';

const routes: Route[] = [
  { 
    path: '',
    component: WikibusComponent 
  },
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
  },
  {
    path: 'framework',
    loadChildren: () => import('./framework/framework.module').then(m => m.FrameworkModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikibusRoutingModule { }