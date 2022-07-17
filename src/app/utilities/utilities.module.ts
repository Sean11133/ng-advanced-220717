import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { AnimationComponent } from './animation/animation.component';
import { BorderComponent } from './border/border.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AnimationComponent,
    BorderComponent,
    ColorsComponent,
    OtherComponent,
  ],
  imports: [CommonModule, UtilitiesRoutingModule],
})
export class UtilitiesModule {}
