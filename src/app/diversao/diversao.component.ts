import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  public categoria: string = 'diversao';
  public diversao: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria(this.categoria)
    .subscribe((diversao: Oferta[]) => { 
      this.diversao = diversao;
      console.log(this.diversao)
    })
  }

}
