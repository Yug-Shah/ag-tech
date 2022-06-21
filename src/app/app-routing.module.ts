import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {LoginComponent} from './components/login/login.component';
import {BuyComponent} from './components/buy/buy.component';
import {SellComponent} from './components/sell/sell.component';
import {VictorygardenComponent} from './components/victory-garden/victorygarden.component';
import {SignupComponent} from './components/signup/signup.component';

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
    path: 'app-signup',
    component: SignupComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'sell',
    component: SellComponent
  },
  {
    path: 'kits',
    component: VictorygardenComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
