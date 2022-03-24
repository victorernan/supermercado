import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosCardListComponent } from '../productos-card-list/productos-card-list.component';
import { DialogComponent } from './dialog.component';

describe('Testear DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let x : number;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DialogComponent
      ], 
      imports: [MatDialogModule],
      providers : [
        {provide: MatDialogRef, useValue: {}},
        {provide : MAT_DIALOG_DATA, useValue : {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('el componente debe existir', () => {
    expect(component).toBeTruthy();
  });

  // ProductosCardListComponent
  // it('should call openDialog', () => {
  //   const fixture = TestBed.createComponent(ProductosCardListComponent);
  //   const app = fixture.componentInstance;
  //   const expected_header = "Welcome Samuel";
  //   app.openDialog();
  // });

});
