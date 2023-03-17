import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  id: string = '';
  lugarTrabajo: string = '';
  puesto: string = '';
  anioComienzo: string = '';

  id2: string = '';
  trabajo: string = '';
  lenguajes: string = '';
  anioComienzo2: string = '';

  id3: string = '';
  trabajos: string = '';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
  }
}
