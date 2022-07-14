import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RegisterserviceuserService } from '../registerserviceuser.service';
import { User } from './mode';
import { Location } from '@angular/common';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service: RegisterserviceuserService, private location:Location) { }
  emailId:string = '';
  user: User;
  res:any;
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.emailId = params['id'];
    console.log("captured it view person::::::"+this.emailId) ;
      this.viewuser(this.emailId);
  })};

  viewuser(emailId: string) {
    this.service.viewuser(this.emailId).subscribe((data) => this.user = data);

  }

  back(): void {
    this.location.back()
  }

}
