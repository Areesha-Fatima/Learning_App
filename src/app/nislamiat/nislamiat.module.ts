import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NislamiatPageRoutingModule } from './nislamiat-routing.module';

import { NislamiatPage } from './nislamiat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NislamiatPageRoutingModule
  ],
  declarations: [NislamiatPage]
})
export class NislamiatPageModule {}
