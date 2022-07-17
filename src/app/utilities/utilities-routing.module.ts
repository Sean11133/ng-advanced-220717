import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BorderComponent } from './border/border.component';
import { ColorsComponent } from './colors/colors.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: 'animation', component: AnimationComponent },
  { path: 'border', component: BorderComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesRoutingModule {}
