import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabs } from '@ionic/angular';

@Component({
  selector: 'app-first-tabs',
  templateUrl: './first-tabs.page.html',
  styleUrls: ['./first-tabs.page.scss'],
})
export class FirstTabsPage implements OnInit {

  @ViewChild('tabs')tabs: Tabs
  constructor() { }

  ngOnInit() {
    console.log('INIT tabs page');
    this.tabs.select('tab1');
  }

}
