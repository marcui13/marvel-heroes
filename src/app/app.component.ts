import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    // Establece el idioma predeterminado
    this.translate.setDefaultLang('es');
    // Establece el idioma actual según el idioma del dispositivo
    const browserCurrentLang = this.translate.getBrowserLang();
    console.log('idioma actual del dispositivo:', browserCurrentLang)
    if(browserCurrentLang){
      this.translate.use(browserCurrentLang.match(/en|es/) ? browserCurrentLang : 'es');
    }
  }
}
