import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Imarket } from 'src/app/Models/imarket';
import supermercado from '../../_files/supermercado.json';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  productos : any = [];
  Object = Object;
  @Output() enviar : EventEmitter<number> = new EventEmitter<number>();
  cantidadProducto : any  = 0;
  

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {    
    this.productos = this.data;
  }

  add():void{
     this.cantidadProducto +=1;
     console.log(this.cantidadProducto);
  }

  mandarCantidad(){
    //this.enviar.emit(this.cantidadProducto);
    this.dialogRef.close(this.cantidadProducto);
    return this.cantidadProducto; 
  }

  ngOnInit(): void {
  }

}
