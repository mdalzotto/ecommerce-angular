import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Oferta } from '../shared/oferta.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

     public getOfertas() {
        return this.http.get<Oferta[]>(`${this.apiUrl}/ofertas`)
    }

    public getOfertasCategoria(categoria: string) {
        return this.http.get<Oferta[]>(`${this.apiUrl}/ofertas?categoria=${categoria}`)
    }

    public getOfertaPorId(id: number) {
        return this.http.get<Oferta[]>(`${this.apiUrl}/ofertas?id=${id}`)
    }

    public getComoUsarOfertaPorId(id: number) {
        return this.http.get(`${this.apiUrl}/como-usar?id=${id}`)
    }

    public getOndeFicaOfertaPorId(id: number) {
        return this.http.get(`${this.apiUrl}/onde-fica?id=${id}`)
    }

    public pesquisaOferta(termo: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${this.apiUrl}/ofertas?descricao_oferta_like=${termo}`)
        .pipe((resposta: any) => resposta);
    }
}
