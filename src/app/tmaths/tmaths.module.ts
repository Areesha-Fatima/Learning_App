import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmathsPageRoutingModule } from './tmaths-routing.module';

import { TmathsPage } from './tmaths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmathsPageRoutingModule
  ],
  declarations: [TmathsPage]
})
export class TmathsPageModule {}
