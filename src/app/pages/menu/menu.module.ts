import { DetailsPageModule } from './../details/details.module';
import { MenuRoutingModule } from './menu-routing.module';
import { FirstTabsPageModule } from './../first-tabs/first-tabs.module';
import { SecondPageModule } from './../second/second.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2PageModule } from '../tab2/tab2.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    FirstTabsPageModule,
    SecondPageModule,
    Tab1PageModule,
    Tab2PageModule,
    DetailsPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

