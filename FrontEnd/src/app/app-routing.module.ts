import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './estudios/neweducacion.component';
import { EditeducacionComponent } from './estudios/editeducacion.component';
import { EditSkillComponent } from './habs/edit-skill.component';
import { NewSkillComponent } from './habs/new-skill.component';
import { EditAcercaDeComponent } from './sobremi/edit-acerca-de.component';

const routes: Routes = [
{path: '', component:IntroComponent},
{path: 'login', component:LoginComponent},
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'editexp/:id', component: EditExperienciaComponent},
{path: 'nuevaedu', component: NeweducacionComponent},
{path: 'editedu/:id', component: EditeducacionComponent},
{ path: 'newskill', component: NewSkillComponent},
{ path: 'editskill/:id', component: EditSkillComponent},
{ path: 'editacercade/:id', component: EditAcercaDeComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
