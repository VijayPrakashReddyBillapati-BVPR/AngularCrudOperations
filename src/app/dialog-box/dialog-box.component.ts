import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from '../home/products';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  isDisabled:boolean=false

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Products) {
    this.local_data = {...data};
    this.action = this.local_data.action;
    //console.log(this.local_data);
    
    if(this.action==="Update")
    {
      this.isDisabled=true      
    }
  }

  doAction(){
    console.log(this.local_data);
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  onSubmit(data:any) {
  }

  ngOnInit(): void {
  }

}
