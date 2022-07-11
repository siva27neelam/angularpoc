import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegisterserviceuserService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:8080/";

  getlistofusers(){
    return this.http.get(this.url+"users");
    
    }
  

  registeruser(request:string){
    console.log("hello");
    let headers = new HttpHeaders;
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.url+"user", request, {headers:headers}).subscribe((result => {
      console.log("response here::" +JSON.stringify(result));
    }));
  }


}
