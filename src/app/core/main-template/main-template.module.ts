import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main-template.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MainCardModule } from '../main-card/main-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    SidebarModule,
    MainCardModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [MainTemplateComponent],
  exports: [MainTemplateComponent]
})
export class MainTemplateModule { }
