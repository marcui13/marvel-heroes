// IONIC ANGULAR
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
// INTERFACES
import { Hero } from 'src/app/@models/hero.interface';
// SERVICES
import { TranslateService } from '@ngx-translate/core';
import { MarvelApiService } from 'src/app/@services/marvel-api.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
})
export class HeroesListPage implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;
  public loadedData: boolean = false;
  public errorData: boolean = false;

  constructor(
    private marvelApiService: MarvelApiService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {}
  
  ngOnInit() {
    this.getHeroes();
  }

  async getHeroes() {
    const loadingMessage = await this.translate.get('cargandoHeroes').toPromise();
    
    const loading = await this.loadingCtrl.create({
        message: loadingMessage
    });
    await loading.present();
    this.marvelApiService.getHeroes().subscribe(
      data => {
          // no fue necesario limitar a 20 elementos, 
          // ya que el método GET /v1/public/characters 
          // viene con el limite de 20 predeterminado
          this.heroes = data;
          loading.dismiss();
          this.loadedData = true;
      },
      error => {
          console.error('Error al cargar héroes:', error);
          loading.dismiss();
          this.loadedData = true;
          this.errorData = true;
      }
    );  
  }

  navigateToHeroDetails(hero: Hero) {
    this.navCtrl.navigateForward(['/hero-details', {
      selectedHero: JSON.stringify(hero)
    }]);
  }
}
