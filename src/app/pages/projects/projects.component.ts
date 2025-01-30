import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


type projects = {
  name: string,
  description: string,
  links: {
    site: string,
    github: string
  },
  img: string,
  technologiesUsed: string[]
}

type project = {
  title: string,
  projects:projects[]
}


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  project: project = {
    title: '',
    projects: [
    {
      name: "",
      description: "",
      links: {
        site: "",
        github: ""
      }, img: '',
      technologiesUsed: [""]}
  ]}

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getProjects();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getProjects();
  });
  }

  getProjects(){
    this.project = this.translate.instant('project');
  }

}
