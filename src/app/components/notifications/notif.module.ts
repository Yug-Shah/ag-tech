import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotifPage } from './notif.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NotifPageRoutingModule } from './notif-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NotifPageRoutingModule
  ],
  declarations: [NotifPage]
})
export class NotifPageModule {}
