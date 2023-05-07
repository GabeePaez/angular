import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { HabsComponent } from './habs/habs.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IntroComponent } from './intro/intro.component';
import { Redes2Component } from './redes2/redes2.component';
import { FotosbannerComponent } from './fotosbanner/fotosbanner.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './estudios/neweducacion.component';
import { EditeducacionComponent } from './estudios/editeducacion.component';
import { EditSkillComponent } from './habs/edit-skill.component';
import { NewSkillComponent } from './habs/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAcercaDeComponent } from './sobremi/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    BannerComponent,
    SobremiComponent,
    HabsComponent,
    EstudiosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    IntroComponent,
    Redes2Component,
    FotosbannerComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
  interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
