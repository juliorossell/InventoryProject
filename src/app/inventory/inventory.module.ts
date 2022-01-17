import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { IncomingShipmentsComponent } from './incoming-shipments/incoming-shipments.component';
import { OutgoingShipmentsComponent } from './outgoing-shipments/outgoing-shipments.component';
import { MainTemplateModule } from '../core/main-template/main-template.module';
import { RouterModule } from '@angular/router';
import { InventoryRoutingModule } from './inventory-routing';

@NgModule({
  imports: [
    CommonModule,
    MainTemplateModule,
    InventoryRoutingModule,
    RouterModule
  ],
  declarations: [InventoryComponent, IncomingShipmentsComponent, OutgoingShipmentsComponent],
  exports: [InventoryComponent, IncomingShipmentsComponent, OutgoingShipmentsComponent],
  providers: []
})
export class InventoryModule { }
