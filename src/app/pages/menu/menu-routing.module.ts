import { DetailsPage } from './../details/details.page';
import { Tab2Page } from './../tab2/tab2.page';
import { Tab1Page } from './../tab1/tab1.page';
import { FirstTabsPage } from './../first-tabs/first-tabs.page';
import { SecondPage } from './../second/second.page';
import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
 
const routes: Routes = [ 
  {
    path: 'side',
    component: MenuPage,
    children: [
      {
        path: 'first',
        outlet: 'menucontent',
        component: FirstTabsPage
      },
      {
        path: 'second',
        outlet: 'menucontent',
        component: SecondPage
      },
      {
        path: 'second/details',
        outlet: 'menucontent',
        component: DetailsPage
      },
      {
        path: 'tab1',
        outlet: 'hometab',
        component: Tab1Page
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/side/(menucontent:first//hometab:tab1)',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }