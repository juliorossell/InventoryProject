import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './main-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainCardComponent],
  exports: [MainCardComponent]
})
export class MainCardModule { }
