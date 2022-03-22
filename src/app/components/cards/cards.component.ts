import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Imarket } from 'src/app/Models/imarket';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductosService } from 'src/app/services/productos.service';
import { map, Observable, throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  productos : any; 
  verduras$ : any ;
  frutas$ : any ;
  other$ : any ;

  @ViewChild('target')
  private targetElemment!: ElementRef;

  constructor(public dialog: MatDialog, private http: ProductosService) {}

  @HostListener("window:scroll", ['$event']) onWindowScroll(){
    let posicion = document.documentElement.scrollTop;
    let maximno = document.documentElement.scrollHeight;

    if(posicion > maximno){
      console.log(posicion);
      this.productos.push(...this.productos);
    }
  };

  //esta funcion seria necesaria para el output funcione
  // pero en este caso se optiene la cantidad por 
  //

  // recibirCantidad(cantidad : number){
  //   this.cantidadProductos = cantidad;
  //   console.log(this.cantidadProductos);    
  // }

  ngOnInit(): void {

    this.productos = this.http.getProductos().subscribe((data : Imarket[])=>{
      this.verduras$ = data.filter(x => x.type === 'vegetable');
      this.frutas$ = data.filter(x => x.type === 'fruit');
      this.other$ = data.filter(x => x.type === 'other');
     
      this.unsort( this.verduras$);
      this.unsort( this.frutas$);
      this.unsort( this.other$);
    });
 
  }


  unsort(x: any){
    x.sort(function() {
      return Math.random() - 0.5
    });
  }
}
