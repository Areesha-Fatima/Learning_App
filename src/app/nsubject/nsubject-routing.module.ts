import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NsubjectPage } from './nsubject.page';

const routes: Routes = [
  {
    path: '',
    component: NsubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NsubjectPageRoutingModule {}
