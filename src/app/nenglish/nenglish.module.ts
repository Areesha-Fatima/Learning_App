import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NenglishPageRoutingModule } from './nenglish-routing.module';

import { NenglishPage } from './nenglish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NenglishPageRoutingModule
  ],
  declarations: [NenglishPage]
})
export class NenglishPageModule {}
