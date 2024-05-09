import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesListPageRoutingModule } from './heroes-list-routing.module';

import { HeroesListPage } from './heroes-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesListPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [HeroesListPage]
})
export class HeroesListPageModule {}
