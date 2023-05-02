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
import { PerfilComponent } from './perfil/perfil.component';
import { FotosbannerComponent } from './fotosbanner/fotosbanner.component';
import { SobremitextoComponent } from './modales/sobremitexto/sobremitexto.component';
import { EstudiostextoComponent } from './modales/estudiostexto/estudiostexto.component';
import { ExperienciatextoComponent } from './modales/experienciatexto/experienciatexto.component';
import { HabstextoComponent } from './modales/habstexto/habstexto.component';
import { ProyectostextoComponent } from './modales/proyectostexto/proyectostexto.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './estudios/neweducacion.component';
import { EditeducacionComponent } from './estudios/editeducacion.component';

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
    PerfilComponent,
    FotosbannerComponent,
    SobremitextoComponent,
    EstudiostextoComponent,
    ExperienciatextoComponent,
    HabstextoComponent,
    ProyectostextoComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
