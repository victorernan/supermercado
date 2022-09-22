import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modulos angular material
import { RatingModule } from 'ng-starrating'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

//components
import { ProductosService } from './services/productos.service';
import { ProductosCardListComponent } from './components/productos-card-list/productos-card-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DialogComponent,
    ProductosCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    RatingModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue : []
    },
    ProductosService,
    { 
      provide: MAT_DIALOG_DATA, 
      useValue: [] 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
