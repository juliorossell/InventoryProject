import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from '../core/main-template/main-template.component';
import { IncomingShipmentsComponent } from './incoming-shipments/incoming-shipments.component';
import { InventoryComponent } from './inventory.component';


const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: '',
        component: IncomingShipmentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
