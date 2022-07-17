import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './flot/flot.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'SB Admin 2 - Dashboard',
      },
      { path: 'tables', component: TablesComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'page1', component: Page1Component, title: 'SB Admin 2 - Page1' },
      {
        path: 'page2',
        component: Page2Component,
        title: 'SB Admin 2 - Page2',
        canActivate: [AuthGuard],
      },
      {
        path: 'utilities',
        loadChildren: () =>
          import('./utilities/utilities.module').then((m) => m.UtilitiesModule),
      },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts',
        children: [{ path: 'flot/:dots', component: FlotComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
