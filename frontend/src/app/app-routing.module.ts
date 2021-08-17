import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
