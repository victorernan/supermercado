import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCardListComponent } from './productos-card-list.component';

describe('ProductosCardListComponent', () => {
  let component: ProductosCardListComponent;
  let fixture: ComponentFixture<ProductosCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
