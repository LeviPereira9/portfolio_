import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";

type Header = {
  title: string;
  text: string;
  words: string[];
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header: Header = {
    title: "",
    text: "",
    words: [""],
  };

  displayedText = '';
  currentWordIndex = 0;
  isDeleting = false; // Controla se está deletando ou escrevendo
  typingTimeout: any; // Armazena o timeout para evitar múltiplos timeouts em paralelo

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.getHeader();
    this.typeEffect(); // Inicia a animação

    // Reinicia a animação toda vez que o idioma muda
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getHeader(); // Atualiza o texto ao trocar o idioma
    });
  }

  getHeader() {
    this.header = this.translate.instant('home.header');

    // Verifica se a animação deve ser reiniciada após atualizar os dados
    if (this.header.words && this.header.words.length > 0) {
      this.resetTypingEffect(); // Reinicia a animação com a troca de idioma
    }
  }

  resetTypingEffect() {
    // Limpa qualquer timeout pendente
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    // Resetando os parâmetros para reiniciar a animação
    this.displayedText = '';
    this.currentWordIndex = 0;
    this.isDeleting = false;
    this.typeEffect(); // Reinicia a animação
  }

  typeEffect() {
    if (!this.header.words || this.header.words.length === 0) return;

    const currentWord = this.header.words[this.currentWordIndex];
    const typingSpeed = 100; // Velocidade de digitação
    const deletingSpeed = 100; // Velocidade de exclusão
    const pauseBetweenWords = 2000; // Pausa entre as palavras

    if (this.isDeleting) {
      // Remove caracteres um a um
      this.displayedText = currentWord.substring(0, this.displayedText.length - 1);
    } else {
      // Adiciona caracteres um a um
      this.displayedText = currentWord.substring(0, this.displayedText.length + 1);
    }

    if (!this.isDeleting && this.displayedText === currentWord) {
      // Pausa antes de deletar
      this.typingTimeout = setTimeout(() => this.isDeleting = true, pauseBetweenWords);
    } else if (this.isDeleting && this.displayedText === '') {
      // Muda para a próxima palavra
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.header.words.length;
    }

    // Define o próximo caractere com base em adicionar ou deletar
    const delay = this.isDeleting ? deletingSpeed : typingSpeed;
    this.typingTimeout = setTimeout(() => this.typeEffect(), delay);
  }
}
