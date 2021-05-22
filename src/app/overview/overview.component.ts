import { Component, OnInit } from '@angular/core';
import { BackendApiService } from "../services/backend-api.service";


import {Card} from "../Models/card.model"
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor( private backend: BackendApiService) {
   }

  cards?:Card[];



  ngOnInit(): void {
    this.backend.getAllCards().subscribe(card =>{
      this.cards = card;
      console.log(card);
    }

    )

  }


  getAllCards(){
    this.backend.getAllCards().subscribe(card =>{
      this.cards = card;
    })
  }



  deleteCard(card:Card){

    let id = card.id;

    this.backend.deleteCardById(card.id).subscribe(card =>{
      console.log(card);
      this.getAllCards();
    }
    )

  }




}
