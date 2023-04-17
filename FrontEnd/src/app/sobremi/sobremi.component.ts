import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  personas: any=[];
  
   
   constructor(private portfolioService: PortfolioService) { }
  
   ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);
      //Definir información a mostrar
      this.personas=portfolio.personas;
    });
    
   }
  }