import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Card } from '../Models/card.model';


const httpOptions = {

  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

const url = "https://localhost:44376/api/card";

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http:HttpClient) { }



 getAllCards():Observable<any>{

  return this.http.get<any>(url);
 }

 
 getCardById(id:number| undefined):Observable<any>{

  return this.http.get<any>("https://localhost:44376/" + id);
 }

 deleteCardById(id:number | undefined){

  return this.http.delete("https://localhost:44376/" + id)
 }


 addCard(card: any){


   return this.http.post(url, { name : card.name, surname: card.surName, email : card.email, telephone : card.telephone, image: card.image }, {responseType:"text"})
 }

 updateCard(id : number | undefined, card:any){


  return this.http.put("https://localhost:44376/" + id, { name : card.name, surname: card.surName, email : card.email, telephone : card.telephone, image: card.image }, {responseType:"text"})

 }


}
