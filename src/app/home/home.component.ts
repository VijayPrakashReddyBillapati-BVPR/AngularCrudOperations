import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  f_firstPanel: boolean = true
  f_secondPanel: boolean = false
  addingnewitem: boolean = false
  Name: string = ""
  Color: string = ""
  productObject: any = []
  sortedData: any[];
  displayedColumns: string[] = ['id', 'name', 'color', 'edit', 'delete'];
  inputFormControl = new FormControl('', [Validators.required,]);

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, @Inject(MAT_DIALOG_DATA) public  data: any ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.http.get("assets/products.json").subscribe(
      response => {
        this.productObject = new MatTableDataSource(response['products']);
        this.productObject.paginator = this.paginator;
        this.productObject.sort = this.sort;
        console.log(this.productObject)
      }
    )
  }

  public doFilter = (value: string) => {
    this.productObject.filter = value.trim().toLocaleLowerCase();
  }
  sortData(sort: Sort) {
    const data = this.productObject.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        case 'color': return compare(a.color, b.color, isAsc);
        default: return 0;
      }
    });
  }

  editItem(item:any){}
  deleteItem(item:any){}
  addnewItem(){}
}





