import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgxParticlesModule } from '@tsparticles/angular';
import { NgParticlesService } from "@tsparticles/angular";
import { FooterComponent } from "./components/footer/footer.component";
import { LoadingService } from './services/LoadingService';
import { ChangeDetectorRef } from '@angular/core';



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

  conteudoCarregado:boolean = false;

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {}


  async ngOnInit(): Promise<void> {
   //Verifica o carregamento de todos os recursos
   await this.loadingService.verificarCarregamento();

   //Libera o conteúdo
   this.conteudoCarregado = this.loadingService.estaCarregado();
   this.cdr.detectChanges(); //Forçar a atualização da view
  }


}
