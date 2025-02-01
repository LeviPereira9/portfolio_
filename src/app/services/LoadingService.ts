import { Injectable } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private recursosCarregados: boolean = false;

  constructor(private ngParticlesService: NgParticlesService) {}

  //Verifica se todos os recursos estão carregados.
  async verificarCarregamento(): Promise<void> {
    if (this.recursosCarregados) {
      return; //Se ja carregou, faz nada.
    }

    try {
      await Promise.all([
        this.aguardarImagens(), //Verifica o carregamento de imagens
        this.aguardarTsParticles(), //Verifica o carregamento do tsParticles
      ]);

      // Adiciona um atraso mínimo
      await this.delay(1200);

      this.recursosCarregados = true;
    } catch (error) {
      console.error('Erro ao carregar recursos:', error);
    }
  }

  //Função para aguardar o carregamento de imagens.
  private aguardarImagens(): Promise<void> {
    return new Promise((resolve) => {
      const imagens = document.querySelectorAll('img');
      let carregadas = 0;

      if (imagens.length === 0) {
        resolve(); //Se não houver imagens, fecha imediatamente
      }

      imagens.forEach((img) => {
        if (img.complete) {
          carregadas++;
        } else {
          img.onload = () => {
            carregadas++;
            if (carregadas === imagens.length) {
              resolve();
            }
          };
        }
      });

      if (carregadas === imagens.length) {
        resolve();
      }
    });
  }

  //Função para aguardar o carregamento do tsParticles.
  private aguardarTsParticles(): Promise<void> {
    return new Promise((resolve) => {
      this.ngParticlesService.init(async (engine: Engine) => {
        await loadSlim(engine);
        resolve(); //Resolve a Promise quando o tsParticles estiver carregado.
      });
    });
  }

  //Função para criar um atraso.
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //Retorna o estado de carregamento.
  estaCarregado(): boolean {
    return this.recursosCarregados;
  }
}
