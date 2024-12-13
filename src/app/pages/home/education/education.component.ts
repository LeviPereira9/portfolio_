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
  course:string,
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
      course:'',
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
    this.bootcamps = this.translate.instant('home.body.education.bootcamps');
  }

}
