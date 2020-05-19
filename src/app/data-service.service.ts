import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService { 
  productObject: any = [];
  constructor(private http: HttpClient) { }

  
  getAllData():any []{
    console.log('**************************************************************8')
    this.http.get("assets/products.json").subscribe(
      response => {
        this.productObject = response['products'];
        console.log('###########################################################')
      }
    )
    return this.productObject
  }

  // addItem (): void {
  //   this.productObject = '';
  // }

  // updateItem (Item: any): void {
  //   this.productObject = Item;
  // }
  // deleteItem (id: number): void {
  //   console.log(id);
  //}
  
}
