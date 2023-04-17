import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: any=[];
  
   
   constructor(private portfolioService: PortfolioService) { }
  
   ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);
      //Definir información a mostrar
      this.experiencia=portfolio.experiencia;
    });
    
   }
  }