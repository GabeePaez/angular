import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habs',
  templateUrl: './habs.component.html',
  styleUrls: ['./habs.component.css']
})
export class HabsComponent implements OnInit{
habs: any=[];

 
 constructor(private portfolioService: PortfolioService) { }

 ngOnInit(): void {
  //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.portfolioService.getDatos().subscribe(portfolio => {
    //console.log(portfolio);
    //Definir información a mostrar
    this.habs=portfolio.habs;
  });
  
 }
}
