import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl='https://localhost:44381/api';
  constructor(private http:HttpClient) { }

  getContacts():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/contact');
  }

  getById(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/contact/'+val);
  }

  addContact(val:any){
    return this.http.post(this.APIUrl+'/contact',val);
  }

  updateContact(val:any){
    return this.http.put(this.APIUrl+'/contact',val);
  }

  deleteContact(val:any){
    return this.http.delete(this.APIUrl+'/contact/'+val);
  }
}
