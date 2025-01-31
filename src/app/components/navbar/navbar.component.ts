import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';


type navbar = {
  home: string,
  skills: string,
  projects: string,
  contactMe: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isScrolled:boolean = false;
  isMenuOpen:boolean = false;

  //Placeholder
  navbar:navbar = {
    home: "",
    skills: "",
    projects: "",
    contactMe: "",
  }

  constructor(private translate: TranslateService){
    //Configura os idiomas disponíveis.
    this.translate.addLangs(['en', 'pt', 'zh']);
    //Define o idioma padrão como inglês.
    this.translate.setDefaultLang('en');

    //Usa o idioma do navegador se disponível, caso contrário usa o idioma padrão.
    const browserLang = this.translate.getBrowserLang();

    //Verifica se o idioma do navegador é válido e se não for, usa 'en' como fallback.
    const langToUse = browserLang && ['en', 'pt', 'zh'].includes(browserLang) ? browserLang : 'en';
    this.translate.use(langToUse);

  }

  //Mudar o idioma pelo botão.
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  //Abrir/Fechar o menu.
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  //Escuta o evento Scroll, passando de um ponto, o torna fixed.
  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 5;
  }

  //Inicia escolhendo o idioma e em caso de mudança.
  ngOnInit() {
    this.getNavbar();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getNavbar();
    });
  }

  //Pega as informações de idioma da Navbar.
  getNavbar(){
    this.navbar = this.translate.instant('navbar');
  }
}
