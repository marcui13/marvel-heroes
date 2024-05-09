// IONIC ANGULAR
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
// INTERFACES
import { Hero } from 'src/app/@models/hero.interface';
// SERVICES
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.page.html',
  styleUrls: ['./hero-details.page.scss'],
})
export class HeroDetailsPage implements OnInit {
  public hero: Hero | undefined;
  public loadedData: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.loadHeroDetails();
  }

  loadHeroDetails() {
    const params = this.route.snapshot.params;
    if (params['selectedHero']) {
      this.hero = JSON.parse(params['selectedHero']);
      this.loadedData = true;
    }
  }

  goBack() {
    this.location.back();
  }
}
