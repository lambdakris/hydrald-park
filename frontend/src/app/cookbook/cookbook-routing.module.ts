import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CookbookComponent } from './cookbook.component';

const routes: Route[] = [
  { 
    path: '', 
    component: CookbookComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookbookRoutingModule { }
