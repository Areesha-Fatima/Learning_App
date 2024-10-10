import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsubjectPageRoutingModule } from './tsubject-routing.module';

import { TsubjectPage } from './tsubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsubjectPageRoutingModule
  ],
  declarations: [TsubjectPage]
})
export class TsubjectPageModule {}
