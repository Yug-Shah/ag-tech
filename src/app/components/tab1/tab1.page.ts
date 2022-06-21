import {Component, Injectable} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserModel} from '../../model/user.model';
import {AnimationBuilder} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: UserModel;
  constructor(private userService: UserService) {}

  public showProfile() {
    this.userService.getProfile().subscribe(data => { this.user = data; });
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
