import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

type skill = {
  title:string,
  description:string,
  icons: string[]
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    skills: skill[] = [{
    title: "",
    description: "",
    icons: []
  }]
  note:string = "";




  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getSkills();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getSkills();
  });
  }

  getSkills(){
    this.skills = this.translate.instant('skills.list');
    this.note = this.translate.instant('skills.note');
  }

}
