import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {SearchModel} from "../../core/models/search.model";
import {ShipService} from "../../core/services/ship.service";
import {Ship} from "../../core/models/ship.model";
import { map} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit ,OnChanges{
  @Input() searchData!: SearchModel;
  filteredShowShips: Ship[] = [];

  filteredShips: Ship [] = [];

  public maxSize: number = 7;
  public itemsPerPage =  5;
  public  currentPage =  1;

  constructor(private shipService: ShipService, private router:Router) {
  }

  ngOnInit(): void {
    this.initResponses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.shipService.getShips().pipe(
      map(ships => ships.filter((ship) =>{
        if(this.searchData) {
          const ports = this.searchData.ports;
          const type =  this.searchData.type ;
          const isContainName = String(ship.name).includes(this.searchData.name)
          return (!ports.length ||  ports.includes(ship.home_port)) && (!type || type == ship.type) &&
            (!this.searchData.name?.length || isContainName)
        }
return []
      }
      )))
      .subscribe(ships => {
        this.filteredShips = ships;
        this.filteredShowShips = ships;
        this.initFilteredTableData();
      })
  }

  initResponses(): void {
    this.shipService.getShips().subscribe(ships => {
      this.filteredShips = ships;
      this.filteredShowShips = ships;
      this.initFilteredTableData();
    })
  }


  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.initFilteredTableData();
  }

  private initFilteredTableData() {
    let startIndex = this.currentPage <= 1 ? 0 : (this.currentPage - 1) * this.itemsPerPage;
    this.filteredShowShips =  this.filteredShips.slice(startIndex, startIndex + this.itemsPerPage);
  }
  //
  // navigate(id : number) {
  //   this.router.navigate([`/${id}`]).then(r => r) ;
  // }
}
