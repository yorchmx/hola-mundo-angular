 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss']
})
export class NuevoComponenteComponent implements OnInit {
  nombre = 'Yorch Manrique';
  peliculas = [];
  constructor() {}

  ngOnInit(): void {
    this.peliculas = this.getPeliculas();
  }

  getProfesion() {
    return 'Ingeniero en Sistemas';
  }
  getPeliculas() {
    //--
    return [
      {
        nombre: 'El valle encantado',
        puntuacion: 10
      },
      {
        nombre: 'La tostadora valiente',
        puntuacion: 10
      },
      {
        nombre: 'El quinto elemento',
        puntuacion: 10
      }

    ];
  }

}
