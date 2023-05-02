import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreEsc: string;
  descEsc: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEsc, this.descEsc);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Los estudios fueron añadidos correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}