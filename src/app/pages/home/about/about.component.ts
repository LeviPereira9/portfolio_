import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

type about = {
  title:string,
  text:string,
  beyondTech:string,
  hobbies:string[]
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  about: about = {
    title: '',
    text: '',
    beyondTech: '',
    hobbies: []
  };


  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getAbout();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getAbout();
  });
  }

  getAbout(){
    this.about = this.translate.instant('home.body.about');
  }

}
