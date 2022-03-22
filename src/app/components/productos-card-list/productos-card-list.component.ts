import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Imarket } from 'src/app/Models/imarket';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-productos-card-list',
  templateUrl: './productos-card-list.component.html',
  styleUrls: ['./productos-card-list.component.css']
})
export class ProductosCardListComponent implements OnInit {

  @Input() 
  Supermercado :Imarket[] = [];
  Object = Object;
  constructor(private dialog: MatDialog) {
    console.log("ProductosCardListComponent ", this.Supermercado);
    
   } 

  ngOnInit(): void {
    
  }

  openDialog(x:number){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '400px',
      data:{x}
    })
  }

  editProduct({title, type, description, price, rating}:Imarket){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title, type, description, price, rating
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

  }

}
