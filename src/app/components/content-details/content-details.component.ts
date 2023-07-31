import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {ShipService} from "../../core/services/ship.service";
import {Ship} from "../../core/models/ship.model";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {

  public ship$!: Observable<Ship>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private shipService: ShipService) {
  }

  ngOnInit(): void {
    this.ship$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.shipService.getShipsById(String(params.get('id'))))
      );
  }

}
