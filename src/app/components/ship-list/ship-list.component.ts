import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SearchModel} from "../../core/models/search.model";

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent {
  form!: FormGroup
  searchData!: SearchModel

  getSearchData(search: SearchModel) {
    this.searchData = search;
  }
}
