import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpstPage } from './tpst.page';

const routes: Routes = [
  {
    path: '',
    component: TpstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpstPageRoutingModule {}
