import { Component, Host, HostListener } from '@angular/core';
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

  navbar:navbar = {
    home: "",
    skills: "",
    projects: "",
    contactMe: "",
  }

  constructor(private translate: TranslateService){}

  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 5;
  }

   ngOnInit() {
      this.getNavbar();

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getNavbar();
    });
    }

    getNavbar(){
      this.navbar = this.translate.instant('navbar');
    }
}
