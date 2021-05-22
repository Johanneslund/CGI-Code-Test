import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../Models/card.model';
import { BackendApiService } from "../services/backend-api.service";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor( private backend: BackendApiService, public router: Router) { }

  ngOnInit(): void {

  }


  addCard(name:string, surName: string, email: string, telephone: string, image : string){

    let card ={
      name : name,
    surName : surName,
    email : email,
    telephone : telephone,
    image : image}; 
    
    this.backend.addCard(card).subscribe(card => {
      console.log(card);
      this.router.navigate(['']);
    });

  }




}
