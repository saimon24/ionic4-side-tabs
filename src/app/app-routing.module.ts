import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'first',
    loadChildren: './pages/first-tabs/first-tabs.module#FirstTabsPageModule'
  },
  {
    path: 'second',
    loadChildren: './pages/second/second.module#SecondPageModule'
  },
  {
    path: 'second/details',
    loadChildren: './pages/details/details.module#DetailsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
