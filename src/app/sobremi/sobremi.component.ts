import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  // Esta es una forma pero no es la que va
  //nombre = 'Gabriel';
  //apellido = 'Paez';

  // Inicializar variables de instancia
  nombre: string = '';
  apellido: string = '';
  acerca: string = '';
  frase: string = '';
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
    console.log(portfolio);
    //Definir información a mostrar
    this.nombre=portfolio.nombre;
    this.apellido=portfolio.apellido;
    this.acerca=portfolio.acerca;
    this.frase=portfolio.frase;
  });
  }
}