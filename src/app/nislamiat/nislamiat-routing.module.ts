import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NislamiatPage } from './nislamiat.page';

const routes: Routes = [
  {
    path: '',
    component: NislamiatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NislamiatPageRoutingModule {}
