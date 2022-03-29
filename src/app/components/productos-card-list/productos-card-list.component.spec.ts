import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosCardListComponent } from './productos-card-list.component';

describe('ProductosCardListComponent', () => {
  let component: ProductosCardListComponent;
  let fixture: ComponentFixture<ProductosCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCardListComponent ],
      imports: [MatDialogModule],
      providers : [
        {provide: MatDialogRef, useValue: {}},
        {provide : MAT_DIALOG_DATA, useValue : {}}
      ]
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
