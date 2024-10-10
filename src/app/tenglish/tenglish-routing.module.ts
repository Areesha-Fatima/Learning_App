import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenglishPage } from './tenglish.page';

const routes: Routes = [
  {
    path: '',
    component: TenglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenglishPageRoutingModule {}
