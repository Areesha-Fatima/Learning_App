import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TchemistryPageRoutingModule } from './tchemistry-routing.module';

import { TchemistryPage } from './tchemistry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TchemistryPageRoutingModule
  ],
  declarations: [TchemistryPage]
})
export class TchemistryPageModule {}
