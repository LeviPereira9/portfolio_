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


}
