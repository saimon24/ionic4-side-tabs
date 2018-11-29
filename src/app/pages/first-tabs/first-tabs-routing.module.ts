import { FirstTabsPage } from './first-tabs.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: FirstTabsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
        outlet: 'tab1outlet'
      },
      {
        path: 'tab2',
        component: Tab2Page,
        outlet: 'tab2outlet'
      },
      // {
      //   path: 'session/:sessionId',
      //   component: SessionDetailPage,
      //   outlet: 'schedule'
      // },
    ]
  },
  {
    path: '',
    redirectTo: '/first/tabs/(tab1outlet:tab1)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstTabsPageRoutingModule { }
