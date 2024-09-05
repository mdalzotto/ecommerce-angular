import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [OfertasService]
})
export class NavComponent implements OnInit {
  public ofertas: Oferta[];
  public subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    /*this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((pesquisa:string) => {
        if(pesquisa.trim() === '') return Observable.of<Oferta[]>([])
        else this.ofertasService.pesquisaOferta(pesquisa)
      })
      .catch((err) => {
        console.log(err);
        return Observable.of<Oferta[]>([])
      }) //--- curso não funcionou */

      //this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }
  
  /* public pesquisa(pesquisa: string): void {
    this.subjectPesquisa.next(pesquisa);
  } */ // --- curso não funcionou

  // Executa uma requisição a cada pressionamento de tecla
  public pesquisa(pesquisa: string): void {
    let _ofertas = this.ofertasService.pesquisaOferta(pesquisa);
    _ofertas.subscribe((valor: Oferta[]) => this.ofertas = valor);
    console.log(this.ofertas);
  }

}
