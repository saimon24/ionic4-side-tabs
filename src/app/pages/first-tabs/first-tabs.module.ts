import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstTabsPage } from './first-tabs.page';
import { FirstTabsPageRoutingModule } from './first-tabs-routing.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab1PageModule } from '../tab1/tab1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstTabsPageRoutingModule,
    Tab1PageModule,
    Tab2PageModule

  ],
  declarations: [FirstTabsPage]
})
export class FirstTabsPageModule {}
