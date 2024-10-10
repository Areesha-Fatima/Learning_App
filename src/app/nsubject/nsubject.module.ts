import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NsubjectPageRoutingModule } from './nsubject-routing.module';

import { NsubjectPage } from './nsubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NsubjectPageRoutingModule
  ],
  declarations: [NsubjectPage]
})
export class NsubjectPageModule {}
