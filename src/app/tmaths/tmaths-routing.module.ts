import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmathsPage } from './tmaths.page';

const routes: Routes = [
  {
    path: '',
    component: TmathsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmathsPageRoutingModule {}
