import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NenglishPage } from './nenglish.page';

const routes: Routes = [
  {
    path: '',
    component: NenglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NenglishPageRoutingModule {}
