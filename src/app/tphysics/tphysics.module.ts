import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TphysicsPageRoutingModule } from './tphysics-routing.module';

import { TphysicsPage } from './tphysics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TphysicsPageRoutingModule
  ],
  declarations: [TphysicsPage]
})
export class TphysicsPageModule {}
