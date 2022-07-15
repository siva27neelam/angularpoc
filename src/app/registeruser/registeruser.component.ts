import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceuserService } from '../registerserviceuser.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {

  angForm:FormGroup;
  title:string= "User Registration Form";
  hobbies = new FormControl('');
  hobbiesList: string[] = ['Dancing', 'Painting', 'Photography', 'Gaming', 'Cooking', 'Gardening'];
  region = new FormControl('');
  regionList: string[] = ['Northeast', 'Southwest', 'West', 'Southeast', 'Midwest'];
  constructor(private fb: FormBuilder, private service:RegisterserviceuserService) {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      hobbies: ['',Validators.required],
      region:['',Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipcode: ['']
      })
   });
 }
 

  ngOnInit(): void {
  }
 
  onSubmit(){
    console.log(this.angForm.value);
    let serializedForm = JSON.stringify(this.angForm.value);
    this.service.registeruser(serializedForm);
  }

  clearform(){
    console.log("cler form called");
    this.angForm.reset();
    this.angForm.reset

  }
}
