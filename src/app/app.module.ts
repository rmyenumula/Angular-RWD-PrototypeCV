import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { OrganizationComponent } from './organization/organization.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingDirective } from './routing.directive';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    OrganizationComponent,
    TechnicalSkillsComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    RoutingDirective,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
