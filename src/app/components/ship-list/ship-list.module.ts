import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShipListComponent} from './ship-list.component';
import {SearchComponent} from "../search/search.component";
import {ContentComponent} from "../content/content.component";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {ShipListRoutingModule} from "./ship-list-routing.module";
import {AppPaginationComponent} from "../../app-pagination/app-pagination.component";


@NgModule({
  declarations: [
    ShipListComponent,
    SearchComponent,
    ContentComponent,
    AppPaginationComponent
  ],
  imports: [
    CommonModule,
    ShipListRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
})
export class ShipListModule {
}
