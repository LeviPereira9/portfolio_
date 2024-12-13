import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';

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
  }
];
