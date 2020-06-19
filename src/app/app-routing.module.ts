import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Navigation } from './constants/navigation.constants';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./home/home.module').then(m  =>  m.HomeModule)
  },
  {
    path: Navigation.HOME,
    loadChildren: () =>  import('./home/home.module').then(m  =>  m.HomeModule)
  },
  {
    path: Navigation.LOGIN,
    loadChildren: () =>  import('./login/login.module').then(m  =>  m.LoginModule)
  },
  {
    path: Navigation.REGISTER,
    loadChildren: () =>  import('./register/register.module').then(m  =>  m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
