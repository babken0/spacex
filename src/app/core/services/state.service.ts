import { Injectable } from '@angular/core';
import {Ship} from "../models/ship.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private filteredData: Ship[] = [];

  setFilteredData(ships: Ship[]) {
    this.filteredData = ships;
  }

  getFilteredData(): Ship[] {
    return this.filteredData;
  }
}
