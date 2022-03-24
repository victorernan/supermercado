
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { ProductosService } from './productos.service';

describe('ProductosService', () => {
  let service: ProductosService;
  let httpClient : HttpClient;
  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
       ],
      });
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpClientTestingModule);
  });

  it('ProductosService debe estar creado', inject([ProductosService], (service : ProductosService) =>{
    expect(service).toBeTruthy();
  }));

   it('funcion getProductos', () => {
     service = TestBed.get(ProductosService);
     expect(service.getProductos).toBeTruthy();
   });
});
