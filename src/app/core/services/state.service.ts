import {Injectable} from '@angular/core';
import {SearchModel} from "../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private filterData: SearchModel = {
    name: '',
    ports: [],
    type: ''
  };

  setFilterData(searchModel: SearchModel) {
    this.filterData = searchModel;
  }

  getFilteredData(): SearchModel {
    return this.filterData;
  }
}
