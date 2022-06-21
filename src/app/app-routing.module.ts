import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app-introduction',
    pathMatch: 'full'
  },
  {
    path: 'app-introduction',
    component: IntroductionComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
