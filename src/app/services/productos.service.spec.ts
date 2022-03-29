
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ProductosService } from './productos.service';

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
       ],
       providers: [
        ProductosService
       ]
      });
     
  });

  it('ProductosService debe estar creado', inject([ProductosService], (service : ProductosService) =>{
    expect(service).toBeTruthy();
  }));

   it('funcion getProductos', () => {
     service = TestBed.get(ProductosService);
     expect(service.getProductos).toBeTruthy();
   });
});
