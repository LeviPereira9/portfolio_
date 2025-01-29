import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path:"skills",
    component: SkillsComponent,
    pathMatch: "prefix"
  },
  {
    path: "projects",
    component: ProjectsComponent,
    pathMatch: "prefix"
  },
  {
    path: "contact",
    component: ContactComponent,
    pathMatch: 'prefix'
  }
];
