import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import CarrinhoService from '../services/carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  parametro: number;
  oferta: Oferta[];
  _oferta: any;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    // Antigo pega o parametro estaticamente
    /* this.parametro = this.route.snapshot.params['id']; // pega os os parametros da url
    console.log(this.parametro);

    this.ofertasService.getOfertaPorId(this.parametro).subscribe((oferta: Oferta[])=> {
      console.log(oferta[0]);
      this._oferta = oferta[0];
      this.oferta = this._oferta;
    }) */

    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros.id).subscribe((oferta: Oferta[])=> {
        console.log(oferta[0]);
        this._oferta = oferta[0];
        this.oferta = this._oferta;
      })
    })
  }

  public adicionarItemCarrinho() {
    this.carrinhoService.incluirItens(this._oferta);
    console.log(this.carrinhoService.exibirItens());
  }

}
