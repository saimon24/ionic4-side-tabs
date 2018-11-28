import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';
 
  pages = [
    {
      title: 'First Page with Tabs',
      url: '/menu/side/(menucontent:first//hometab:tab1)'
    },
    {
      title: 'Second Page blank',
      url: '/menu/side/(menucontent:second)'
    }
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log('event: ', event.url);
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
