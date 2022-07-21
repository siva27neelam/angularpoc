import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterserviceuserService } from '../registerserviceuser.service';
import { User } from '../viewuser/mode';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss']
})
export class SearchuserComponent implements OnInit {
  users:User[];
  norecordsfound:boolean;
  defaultbehaviour:boolean;
  displayedColumns: string[] = ['firstName', 'lastName', 'email','city','state','zipcode'];
  dataSource = new MatTableDataSource<User>();

  constructor(private fb: FormBuilder, private service:RegisterserviceuserService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
   }
  form:FormGroup;
  ngOnInit(): void {
    
  }
  search(form:FormGroup){
    
    console.log(this.form.value);
  
    this.service.search(this.form.value.firstName, this.form.value.lastName).subscribe((response =>{
       this.users = response;
       if(this.users.length == 0){
        this.norecordsfound = true;
       }
       else{
        this.norecordsfound = false;
        this.defaultbehaviour = true;
       }
       this.dataSource.data = response;
    }));
  }


  clear(){
    console.log("Here in clear function");
    this.norecordsfound = false;
    this.defaultbehaviour = false;
    this.form.reset();
    this.users = [];
    console.log("norecordsfound value: "+this.norecordsfound);

  
   
  }


}
