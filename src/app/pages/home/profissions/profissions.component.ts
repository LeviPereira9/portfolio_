import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

type profission = {
  enterprise: string,
  position: string,
  duration: string,
  responsibilities?: {
    title:string,
    description: string,
    tasks:string[]
  }
}

@Component({
  selector: 'app-profissions',
  standalone: true,
  imports: [],
  templateUrl: './profissions.component.html',
  styleUrl: './profissions.component.scss'
})
export class ProfissionsComponent {
  profissions:profission[] = [{
    enterprise: '',
    position: '',
    duration: '',
    responsibilities: {
      title:'',
      description: '',
      tasks:['']
    }
  }];

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getProfissions();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getProfissions();
  });
  }

  getProfissions(){
    this.profissions = this.translate.instant('home.body.professionalExperience');
  }
}
