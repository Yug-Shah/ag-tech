import {Component, Injectable} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserModel} from '../../model/user.model';

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
