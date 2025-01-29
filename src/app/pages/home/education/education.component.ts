import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

type formalEducation = {
  institution:string,
  degree:string,
  status:string,
  startedAt: string,
  endedAt: string,
  period:string,
  expectedGraduation:string
}

type bootcamp = {
  institution:string,
  course:{
    enterprise: string,
    name: string
  },
  duration:string,
  year: string,
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  formalEducation:string = '';
  bootcamp:string = '';

  formalEducations:formalEducation[] = [
    {
      institution:'',
      degree:'',
      status:'',
      startedAt: '',
      endedAt: '',
      period:'',
      expectedGraduation:''
    }
  ];
  bootcamps:bootcamp[] = [
    {
      institution:'',
      course:{enterprise: '', name: ''},
      duration:'',
      year: '',
    }
  ];

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getEducation();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getEducation();
  });
  }

  getEducation(){
    this.formalEducations = this.translate.instant('home.body.education.formalEducation');
    this.formalEducation = this.translate.instant('home.body.education.titleEducation');
    this.bootcamps = this.translate.instant('home.body.education.bootcamps');
    this.bootcamp = this.translate.instant('home.body.education.titleBootcamp');
  }

}
