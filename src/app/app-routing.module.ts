import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './core/main-template/main-template.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'lodash',
  //   component: LodashProofComponent ,
  // },
  {
    path: 'modules',
    component: MainTemplateComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'modules',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
