import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NmathsPageRoutingModule } from './nmaths-routing.module';

import { NmathsPage } from './nmaths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NmathsPageRoutingModule
  ],
  declarations: [NmathsPage]
})
export class NmathsPageModule {}
