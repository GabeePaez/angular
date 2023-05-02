import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../service/s-experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreEmp: string = '';
  descEmp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  ngOnInit(): void {
  }

    onCreate(): void{
      const expe = new Experiencia(this.nombreEmp, this.descEmp);
      this.sExperiencia.save(expe).subscribe(
        data => {
          alert("Experiencia añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }
  
  }