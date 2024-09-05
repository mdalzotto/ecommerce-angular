import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Pedido } from '../shared/pedido-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdemCompraService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

    public efetivaCompra(pedido: Pedido): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json'
            })
        }

        return this.http.post(`${this.apiUrl}/pedidos`, JSON.stringify(pedido), httpOptions)
    }
}
