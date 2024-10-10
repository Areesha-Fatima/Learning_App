import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TchemistryPage } from './tchemistry.page';

const routes: Routes = [
  {
    path: '',
    component: TchemistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TchemistryPageRoutingModule {}
