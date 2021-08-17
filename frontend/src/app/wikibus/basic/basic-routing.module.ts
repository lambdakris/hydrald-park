import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { BasicComponent } from './basic.component';

const routes: Route[] = [
  { 
    path: '',
    component: BasicComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }