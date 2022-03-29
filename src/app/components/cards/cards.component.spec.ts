import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductosService } from 'src/app/services/productos.service';

describe('componente principal', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent ], 
      imports : [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('se debe crear', inject([ProductosService], (service : ProductosService) =>{
    expect(component).toBeTruthy();
  }));
  
});
