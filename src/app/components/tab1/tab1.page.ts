import {Component} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {AnimationBuilder} from '@ionic/angular';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: UserModel;
  city = 'Regina';
  weather: any;
  status: string;
  temp: number;
  description: string;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather(this.city).subscribe(res => {
      this.weather = res.list[0];
      this.status = this.weather.weather[0].main;
      this.temp = this.weather.main.temp;
      this.description = this.weather.weather[0].description;
    });
  }
}

interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  swipeToClose?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
