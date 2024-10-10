import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NchemistryPage } from './nchemistry.page';

const routes: Routes = [
  {
    path: '',
    component: NchemistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NchemistryPageRoutingModule {}
