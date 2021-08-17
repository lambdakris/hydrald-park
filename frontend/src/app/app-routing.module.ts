import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'wikibus',
    loadChildren: () => import('./wikibus/wikibus.module').then(m => m.WikibusModule)
  },
  {
    path: 'cookbook',
    loadChildren: () => import('./cookbook/cookbook.module').then(m => m.CookbookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
