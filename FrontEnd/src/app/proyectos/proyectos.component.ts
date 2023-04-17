import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any=[];
  
   
   constructor(private portfolioService: PortfolioService) { }
  
   ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);
      //Definir información a mostrar
      this.proyectos=portfolio.proyectos;
    });
    
   }
  }
