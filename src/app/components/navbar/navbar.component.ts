import { Component, Host, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService){}

  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 5;
  }
}
