import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imarket } from '../Models/imarket';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Imarket[] = []; 
  endpoint : string = "http://localhost:3000/api";

  constructor(private http : HttpClient) {}

  getProductos():Observable<Imarket[]>{
    return this.http.get<Imarket[]>(`${this.endpoint}/productos`);
  }

 }
