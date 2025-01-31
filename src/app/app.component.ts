import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgxParticlesModule } from '@tsparticles/angular';
import { Container, Engine } from "@tsparticles/engine";
import { NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from '@tsparticles/slim';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TranslateModule,
    NavbarComponent,
    NgxParticlesModule,
    FooterComponent,

],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'portfolio';
  id:string = 'tsparticles';
  particlesJson:string = './particles.json'

  constructor(private readonly ngParticlesService: NgParticlesService,) {}




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
