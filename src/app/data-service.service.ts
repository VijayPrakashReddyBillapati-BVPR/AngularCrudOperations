import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import{Products} from '../app/home/products'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService { 
  productObject:Array<Products>
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = { headers: this.headers};

  constructor(private http: HttpClient) { }

  
   getAllData(): Observable<Products[]> {     
    
    return this.http.get<Products[]>("assets/products.json")
 }

 getItems()
 {
 console.log(this.productObject);
 }
  addItem (): void {
    //this.productObject = '';
  }

  updateItem (Item: any): void {
    this.productObject = Item;
  }
  deleteItem (id: number): void {
    console.log(id);
  }
  
}
