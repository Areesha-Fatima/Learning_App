import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
  },
 
  {
    path: 'nsubject',
    loadChildren: () => import('./nsubject/nsubject.module').then( m => m.NsubjectPageModule)
  },
  {
    path: 'tsubject',
    loadChildren: () => import('./tsubject/tsubject.module').then( m => m.TsubjectPageModule)
  },
  {
    path: 'nmaths',
    loadChildren: () => import('./nmaths/nmaths.module').then( m => m.NmathsPageModule)
  },
  {
    path: 'nphysics',
    loadChildren: () => import('./nphysics/nphysics.module').then( m => m.NphysicsPageModule)
  },
  {
    path: 'nchemistry',
    loadChildren: () => import('./nchemistry/nchemistry.module').then( m => m.NchemistryPageModule)
  },
  {
    path: 'nenglish',
    loadChildren: () => import('./nenglish/nenglish.module').then( m => m.NenglishPageModule)
  },
  {
    path: 'nislamiat',
    loadChildren: () => import('./nislamiat/nislamiat.module').then( m => m.NislamiatPageModule)
  },
  {
    path: 'tmaths',
    loadChildren: () => import('./tmaths/tmaths.module').then( m => m.TmathsPageModule)
  },
  {
    path: 'tphysics',
    loadChildren: () => import('./tphysics/tphysics.module').then( m => m.TphysicsPageModule)
  },
  {
    path: 'tchemistry',
    loadChildren: () => import('./tchemistry/tchemistry.module').then( m => m.TchemistryPageModule)
  },
  {
    path: 'tenglish',
    loadChildren: () => import('./tenglish/tenglish.module').then( m => m.TenglishPageModule)
  },
  {
    path: 'tpst',
    loadChildren: () => import('./tpst/tpst.module').then( m => m.TpstPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
