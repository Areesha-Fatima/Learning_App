import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NchemistryPageRoutingModule } from './nchemistry-routing.module';

import { NchemistryPage } from './nchemistry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NchemistryPageRoutingModule
  ],
  declarations: [NchemistryPage]
})
export class NchemistryPageModule {}
