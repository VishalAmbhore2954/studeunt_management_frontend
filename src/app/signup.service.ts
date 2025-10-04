import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  storeEmployeeData(data:any){
    return this.http.post(`${this.apiUrl}/student`,data);
  }
}
