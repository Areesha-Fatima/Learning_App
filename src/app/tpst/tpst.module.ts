import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpstPageRoutingModule } from './tpst-routing.module';

import { TpstPage } from './tpst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpstPageRoutingModule
  ],
  declarations: [TpstPage]
})
export class TpstPageModule {}
