import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarPersona() {
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }
}
