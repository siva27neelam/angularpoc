import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterserviceuserService } from '../registerserviceuser.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {
  emailId:string = '';
  constructor(private route: ActivatedRoute,private service:RegisterserviceuserService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.emailId = params['id'];
    console.log("captured it delete person::::::"+this.emailId) ;
      this.userdelete(this.emailId);
  })};

  userdelete(emailId: string) {
    this.service.deleteuser(this.emailId);
  }

  back(): void {
    this.location.back()
  }

}


