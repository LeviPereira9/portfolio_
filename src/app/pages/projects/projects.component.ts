import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


type project = {
  name: string,
  description: string,
  links: {
    site: string,
    github: string
  },
  technologiesUsed: string[]
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: project[] = [
    {
      name: "",
      description: "",
      links: {
        site: "",
        github: ""
      },
      technologiesUsed: [""]}
  ]

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.getProjects();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.getProjects();
  });
  }

  getProjects(){
    this.projects = this.translate.instant('projects');
  }

}
