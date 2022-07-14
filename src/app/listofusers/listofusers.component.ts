import { Component, OnInit } from '@angular/core';
import { RegisterserviceuserService } from '../registerserviceuser.service';

import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../viewuser/mode';




@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.scss']
})
export class ListofusersComponent implements OnInit {


  displayedColumns: string[] = ['firstName', 'lastName', 'email','operation'];
  dataSource = new MatTableDataSource<User>();
  users: any;
  id: any;
  constructor(private service: RegisterserviceuserService) { }

  ngOnInit(): void {
    this.getUserList();
   

  }

  getUserList() {
    this.users = this.service.getlistofusers().subscribe((data) => {
        this.dataSource.data = data;
    });
  }

  viewperson(id:string) {
    console.log("captured it view person::::::" + this.id)
  }
}
