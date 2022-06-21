import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {WeatherService} from './service/weather.service';
import {VictorygardenComponent} from './components/victory-garden/victorygarden.component';
import {BuyComponent} from './components/buy/buy.component';
import {SellComponent} from './components/sell/sell.component';
import {BasicStarterkitComponent} from './components/basic-starterkit/basic-starterkit.component';
import {HarvestStarterkitComponent} from './components/harvest-starterkit/harvest-starterkit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    IntroductionComponent,
    VictorygardenComponent,
    BuyComponent,
    SellComponent,
    BasicStarterkitComponent,
    HarvestStarterkitComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
  ],
  providers: [
    UserService,
    WeatherService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
