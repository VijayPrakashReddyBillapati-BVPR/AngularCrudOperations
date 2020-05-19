import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
 import {MatPaginatorModule} from '@angular/material/paginator';
 import {MatSortModule} from '@angular/material/sort';
 import{MatCardModule} from '@angular/material/card'
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
   MatDialogModule,
     MatSortModule,
    // MatProgressSpinnerModule,
     MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
