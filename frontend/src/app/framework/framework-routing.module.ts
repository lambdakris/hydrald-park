import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { FrameworkComponent } from './framework.component';

const routes: Route[] = [
  { 
    path: '',
    component: FrameworkComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkRoutingModule { }