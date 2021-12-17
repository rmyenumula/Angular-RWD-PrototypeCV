import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { OrganizationComponent } from './organization/organization.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
{path:'',component:CvComponent,data: {animation: 'CvPage'} },
{path:'education',component:EducationComponent,data: {animation: 'EducationPage'} },
{path:'aboutme',component:AboutMeComponent,data: {animation: 'AboutMePage'} },
{path:'organization',component:OrganizationComponent,data: {animation: 'OrganizationPage'} },
{path:'technicalskills',component:TechnicalSkillsComponent,data: {animation: 'TechnicalSkillsPage'} },
{path:'projects',component:ProjectsComponent,data: {animation: 'ProjectsPage'} },
{path:'contact',component:ContactComponent,data: {animation: 'ContactPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


