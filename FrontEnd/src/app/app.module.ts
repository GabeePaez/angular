import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { HabsComponent } from './habs/habs.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { Redes2Component } from './redes2/redes2.component';
import { AboutmedashboardComponent } from './aboutmedashboard/aboutmedashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobremidashboardComponent } from './sobremidashboard/sobremidashboard.component';
import { EstudiosdashboardComponent } from './estudiosdashboard/estudiosdashboard.component';
import { ExperienciadashboardComponent } from './experienciadashboard/experienciadashboard.component';
import { ProjectosdashboardComponent } from './projectosdashboard/projectosdashboard.component';
import { HabsdashboardComponent } from './habsdashboard/habsdashboard.component';
import { FotosbannerComponent } from './fotosbanner/fotosbanner.component';
import { SobremitextoComponent } from './modales/sobremitexto/sobremitexto.component';
import { EstudiostextoComponent } from './modales/estudiostexto/estudiostexto.component';
import { ExperienciatextoComponent } from './modales/experienciatexto/experienciatexto.component';
import { HabstextoComponent } from './modales/habstexto/habstexto.component';
import { ProyectostextoComponent } from './modales/proyectostexto/proyectostexto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    SobremiComponent,
    HabsComponent,
    EstudiosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    NavbardashboardComponent,
    Redes2Component,
    AboutmedashboardComponent,
    BannerdashboardComponent,
    PerfilComponent,
    SobremidashboardComponent,
    EstudiosdashboardComponent,
    ExperienciadashboardComponent,
    ProjectosdashboardComponent,
    HabsdashboardComponent,
    FotosbannerComponent,
    SobremitextoComponent,
    EstudiostextoComponent,
    ExperienciatextoComponent,
    HabstextoComponent,
    ProyectostextoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
