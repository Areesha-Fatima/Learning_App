import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsubjectPage } from './tsubject.page';

const routes: Routes = [
  {
    path: '',
    component: TsubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsubjectPageRoutingModule {}
