import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {DataServiceService} from '../data-service.service'
import { Products } from './products';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filtereddata: boolean = false
  productObject: any=[]
 // productObject:  any = []
  //productObject:MatTableDataSource<Products>
  itemList: Products[]
  displayedColumns: string[] = ['index','id', 'name', 'color', 'edit', 'delete'];
  inputFormControl = new FormControl('', [Validators.required,]);

  constructor(private dataservice: DataServiceService,private http: HttpClient, private dialog: MatDialog, private router: Router ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  ngOnInit(): void {
    this.dataservice.getAllData().subscribe(
     ( response: Products[]) => {
      this.itemList=response['products']
     this.productObject = new MatTableDataSource<Products>(this.itemList);    
     //this.productObject= new MatTableDataSource<Products>(response['products'].slice()); 
     //this.productObject= new MatTableDataSource(response['products'].slice()); 
      this.productObject.paginator = this.paginator;
      this.productObject.sort = this.sort;      
      }
    )
  }
  public doFilter = (value: string) => {
    this.filtereddata= true
   this.productObject.filter = value.trim().toLocaleLowerCase();
   console.log(this.productObject);
  }
  reset() {
    this.productObject.data = this.itemList.slice();
    this.table.renderRows();    
  }

  editItem(item:any){}

  deleteItem(itemId: number , index: number){
    if(this.filtereddata){
      console.log('filtered data')
      const data = this.productObject.filteredData;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index,1);
      this.productObject.filteredData= data
      console.log(itemId);
      console.log(this.productObject.data.indexOf(itemId));
      
  //     const allData = this.productObject.data;
  //     allData.splice((this.paginator.pageIndex * this.paginator.pageSize) + this.productObject.data.indexOf(itemId),1);
  //     this.productObject.data= allData
  // console.log(this.productObject.data);
  
      console.log("success")
    }else{
      console.log('entire  data')
    const data = this.productObject.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.productObject.data = data;

    console.log("success")
    }
    
  }
  addnewItem(){}
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("after close method");
      console.log(result.action);
      
      if(result.action == 'Add'){
        this.addRowData(result.data);
      }else if(result.action == 'Update'){
        console.log("inside update if condition");
        
        this.updateRowData(result.data);
      }else if(result.action == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
}
deleteRow(item, index){
  item.index=index
  item.action='Delete'
  console.log(item.id);
  console.log(index);
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    width: '350px',
    data:item

  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result.id);
  console.log(result.index);
    const data = this.productObject.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + result.index, 1);
    this.productObject.data = data;
    console.log("success")
    
  });
}

addRowData(row_obj){
  var d = new Date();
  this.productObject.push({
    id:d.getTime(),
    name:row_obj.name
  });
  this.table.renderRows();
  
}
updateRowData(row_obj){
  console.log('#######################################################################');
  
  this.productObject = this.productObject.filter((value,key)=>{
    if(value.id == row_obj.id){
      value.name = row_obj.name;
    }
    return true;
  });
}
deleteRowData(row_obj){
  console.log("**********************************************");
  
  console.log(row_obj);
  
  this.productObject = this.productObject.filter((value,key)=>{
    return value.id != row_obj.id;
  });
}
}




