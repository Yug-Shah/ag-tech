import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  trustedVideoUrlArray: SafeResourceUrl[]=[];
  urlsArray = [
    {
      link: '../../../assets/Videos/100.mp4'
    },
    {
      link: '../../../assets/Videos/200.mp4'
    }
  ];
  constructor(public navCtrl: NavController,
              private domSanitizer: DomSanitizer) {}
  ngOnInit(): void {
    for(const item of this.urlsArray){
      this.trustedVideoUrlArray.push(this.domSanitizer.bypassSecurityTrustResourceUrl(item.link));
    }
  }
}







