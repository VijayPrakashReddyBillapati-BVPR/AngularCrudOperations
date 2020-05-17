import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
 import {MatPaginatorModule} from '@angular/material/paginator';
 import {MatSortModule} from '@angular/material/sort';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent
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
    // MatDialogModule,
     MatSortModule,
    // MatProgressSpinnerModule,
     MatFormFieldModule,
    // MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
