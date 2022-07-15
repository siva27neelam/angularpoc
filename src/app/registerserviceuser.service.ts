import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './viewuser/mode';



@Injectable({
  providedIn: 'root'
})
export class RegisterserviceuserService {

  constructor(private http:HttpClient) { }

  // url:string = "http://localhost:8080/"; - Use for local.
  url:string= "https://spring-mongo-poc.herokuapp.com/";

  getlistofusers():Observable<User[]>{
    return this.http.get<User[]>(this.url+"users");
    }

  registeruser(request:string){
    console.log("hello");
    let headers = new HttpHeaders;
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.url+"user", request, {headers:headers}).subscribe((result => {
      console.log("response here::" +JSON.stringify(result));
    }));
  }

  deleteuser(request:string){
    return this.http.delete(this.url+"user/"+request).subscribe((data) => {console.log("user deleted") }, (error) =>{
      console.log("In error code:" + error.status)
    });
  }

  viewuser(request:string):Observable<User>{
    return this.http.get<User>(this.url+"user/"+request);
  
  }
  search(firstName:string, lastName:string):Observable<User[]>{
    console.log("search::" +firstName + lastName);
    let headers = new HttpHeaders;
    headers = headers.set('Content-Type', 'application/json');
    
    let params = new HttpParams();
    params = params.append('firstName', firstName);
    params = params.append('lastName', lastName);

    return this.http.get<User[]>(this.url+"user/search",{headers: headers, params: params});
  
  }


}
