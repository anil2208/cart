import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'prefix',
    redirectTo: 'cart'
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(_Module => _Module.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
