import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';



type contact = {
  title: string,
  message: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact:contact = {
    title: "",
    message: ""
  }

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getContact();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getContact();
  });
  }

  getContact(){
    this.contact = this.translate.instant('contactMe');
  }

  sendEmail() {
    const email = 'levi.pereira090@gmail.com';

    const currentLang = this.translate.currentLang;

    let subject: string;
    let body: string;

    if (currentLang === 'pt') {
      subject = encodeURIComponent('Solicitação de Contato');
      body = encodeURIComponent('Olá, gostaria de entrar em contato!');
    } else {
      subject = encodeURIComponent('Contact Request');
      body = encodeURIComponent('Hello, I would like to get in touch!');
    }

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

}
