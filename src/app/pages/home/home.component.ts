import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { HeaderComponent } from "./header/header.component";

import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AboutComponent, EducationComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
