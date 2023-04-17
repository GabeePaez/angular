import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  educacion: any=[];
  
   
   constructor(private portfolioService: PortfolioService) { }
  
   ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);
      //Definir información a mostrar
      this.educacion=portfolio.educacion;
    });
    
   }
  }