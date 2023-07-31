import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SearchModel} from "../../core/models/search.model";
import {Observable} from "rxjs";
import {ShipService} from "../../core/services/ship.service";
import {MatRadioChange} from "@angular/material/radio";
import {MatSelectChange} from "@angular/material/select";

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
              private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      "name": new FormControl(""),
      "ports": new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.ports$ = this.shipService.getPorts();
    this.types$ = this.shipService.getTypes();
  }

  // public portSelected(ports: MatSelectChange) {
  //     this.filter.emit(ports.value)
  // }

  public onSearch(event?: any) {
    this.filter.emit(this.createFilterModel(event?.value));
  }

  // public onFilter(type: MatRadioChange) {
  //   this.filter.emit(this.createFilterModel(type.value));
  // }

  public createFilterModel(type?: string): SearchModel {
    return {
      name: this.formGroup.controls["name"]?.value,
      ports: this.formGroup.controls["ports"]?.value,
      type: type || '',
    }
  }
}
