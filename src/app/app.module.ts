import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './Components/about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContactComponent } from './Components/contact/contact.component';
import { PersonnalInfosComponent } from './Components/personnal-infos/personnal-infos.component';
import {MatDialogModule} from '@angular/material/dialog';

import { FormationComponent } from './Components/formation/formation.component';
import { CerifsComponent } from './Components/cerifs/cerifs.component';
import { CompetencesComponent } from './Components/competences/competences.component';
import { ExperienceComponent } from './Components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PersonnalInfosComponent,
    FormationComponent,
    CerifsComponent,
    CompetencesComponent,
    ExperienceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
