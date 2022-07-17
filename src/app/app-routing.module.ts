import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './flot/flot.component';
import { LayoutComponent } from './layout/layout.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { BorderComponent } from './utilities/border/border.component';
import { ColorComponent } from './utilities/color/color.component';
import { OtherComponent } from './utilities/other/other.component';

const routes: Routes = [
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
      { path: 'page1', component: Page1Component, title: 'SB Admin 2 - Page1' },
      { path: 'page2', component: Page2Component, title: 'SB Admin 2 - Page2' },
      {
        path: 'utilities',
        children: [
          { path: 'animation', component: AnimationComponent },
          { path: 'border', component: BorderComponent },
          { path: 'color', component: ColorComponent },
          { path: 'other', component: OtherComponent },
        ],
      },
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
