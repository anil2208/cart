import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';

const routes: Routes = [
  /**********  Just setting a dummy cart id  ********************/
  {
    path: '',
    pathMatch:'prefix',
    redirectTo: 'ca987707-db46-419e-9178-2bbdde3c3762'
  },
  /******************************/
  {
    path: ':id',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
