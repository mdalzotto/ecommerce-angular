import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public categoria: string = 'restaurante';
  public restaurantes: Oferta[]; 

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria(this.categoria)
    .subscribe((restaurante: Oferta[]) => { 
      this.restaurantes = restaurante;
      console.log(this.restaurantes)
    })
  }

}
