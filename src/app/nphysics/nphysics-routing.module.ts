import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NphysicsPage } from './nphysics.page';

const routes: Routes = [
  {
    path: '',
    component: NphysicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NphysicsPageRoutingModule {}
