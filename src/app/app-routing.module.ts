import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "../app/overview/overview.component"
import {AddCardComponent} from "../app/add-card/add-card.component"
import {UpdateCardComponent} from "../app/update-card/update-card.component"

const routes: Routes = [
  {path: "", component: OverviewComponent},
  {path:"add", component: AddCardComponent},
  {path:"update/:id", component: UpdateCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
