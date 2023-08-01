import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SearchModel} from "../../core/models/search.model";
import {Observable} from "rxjs";
import {ShipService} from "../../core/services/ship.service";
import {StateService} from "../../core/services/state.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() filter = new EventEmitter<SearchModel>()
  public formGroup!: FormGroup;
  public ports$!: Observable<string[]>;
  public types$!: Observable<string[]>;
  public ports = new FormControl([]);

  constructor(private shipService: ShipService,
              private formBuilder: FormBuilder,
              private stateService: StateService) {
    this.formGroup = this.formBuilder.group({
      "name": new FormControl(""),
      "ports": new FormControl([]),
      "type": new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.ports$ = this.shipService.getPorts();
    this.types$ = this.shipService.getTypes();
    this.initValues();
  }

  public onSearch() {
    this.filter.emit(this.createFilterModel());
  }

  public createFilterModel(): SearchModel {
    return {
      name: this.formGroup.controls["name"]?.value,
      ports: this.formGroup.controls["ports"]?.value,
      type: this.formGroup.controls["type"]?.value,
    }
  }

  private initValues() {
    const searchData = this.stateService.getFilteredData();
    this.formGroup.controls["name"].setValue(searchData.name);
    this.formGroup.controls["ports"].setValue(searchData.ports);
    this.formGroup.controls["type"].setValue(searchData.type);
    this.onSearch();
  }
}
