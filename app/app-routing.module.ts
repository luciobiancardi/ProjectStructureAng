import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',     loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'sign-in', loadChildren: () => import('./features/sing-in/sing-in.module').then(m => m.SingInModule) },
  { path: 'sign-up', loadChildren: () => import('./features/sing-up/sing-up.module').then(m => m.SingUpModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
