import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgxParticlesModule } from '@tsparticles/angular';
import { Container, Engine } from "@tsparticles/engine";
import { NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TranslateModule,
    NavbarComponent,
    NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'portfolio';
  id:string = 'tsparticles';
  particlesJson:string = './particles.json'

  constructor(
    private translate: TranslateService,
    private readonly ngParticlesService: NgParticlesService) {
    // Configura os idiomas disponíveis
    this.translate.addLangs(['en', 'pt']);
    // Define o idioma padrão como inglês
    this.translate.setDefaultLang('en');

    // Usa o idioma do navegador se disponível; caso contrário, usa o idioma padrão
    const browserLang = this.translate.getBrowserLang();

    // Verifica se o idioma do navegador é válido e se não for, usa 'en' como fallback
    const langToUse = browserLang && ['en', 'pt'].includes(browserLang) ? browserLang : 'en';
    this.translate.use(langToUse);
  }

  // Método para alternar entre idiomas
  switchLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit(): void {
    //Inicia o TsParticles
    this.ngParticlesService.init(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }

  //Só em desenvolvimento, pra ve se ta o fino.
  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
