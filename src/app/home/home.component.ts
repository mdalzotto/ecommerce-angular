import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];
  public origin: any;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // chamada direta
    /* this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas); */

    // chamada com Promisse mocado
    /* this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => {          // resolve
      this.origin = ofertas;
      this.ofertas = this.origin.ofertas;
    })
    //,(param: any) => console.log(param)           // reject ou no catch()
    .catch((param: any) => console.log(param)
    ) */

    this.ofertasService.getOfertas().subscribe((ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
