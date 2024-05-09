import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroDetailsPageRoutingModule } from './hero-details-routing.module';

import { HeroDetailsPage } from './hero-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroDetailsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [HeroDetailsPage]
})
export class HeroesDetailsPageModule {}
