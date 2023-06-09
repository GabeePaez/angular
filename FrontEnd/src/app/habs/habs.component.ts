import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-habs',
  templateUrl: './habs.component.html',
  styleUrls: ['./habs.component.css']
})
export class HabsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}