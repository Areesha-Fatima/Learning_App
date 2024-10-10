import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenglishPageRoutingModule } from './tenglish-routing.module';

import { TenglishPage } from './tenglish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenglishPageRoutingModule
  ],
  declarations: [TenglishPage]
})
export class TenglishPageModule {}
