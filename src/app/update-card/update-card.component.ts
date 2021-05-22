import { Component, OnInit } from '@angular/core';
import { BackendApiService } from "../services/backend-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private backend: BackendApiService, public router: Router) { }

  id?: number;
  name?: string;

  card: any;
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

    this.backend.getCardById(this.id).subscribe(card => {

      this.card = card;
      console.log(card);
    })

    this.name = this.card.name;

  }


  updateCard(name: string, surName: string, email: string, telephone: string, image: string) {

    console.log(name)
    let card = {
      name: name,
      surName: surName,
      email: email,
      telephone: telephone,
      image: image
    };

    this.backend.updateCard(this.id, card).subscribe(card => {
      console.log(card);
      this.router.navigate(['']);
    });

  }

}
