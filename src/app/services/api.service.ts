import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root="https://api.adviceslip.com/advice"

  constructor(private http:HttpClient) { }

  getAdvice(){
    return this.http.get(this.root)
  }
}
