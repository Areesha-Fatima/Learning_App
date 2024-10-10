import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TphysicsPage } from './tphysics.page';

const routes: Routes = [
  {
    path: '',
    component: TphysicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TphysicsPageRoutingModule {}
