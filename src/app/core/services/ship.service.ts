import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Apollo} from "apollo-angular";
import {GET_SHIPS} from "../../graphql.operations";
import {Ship} from "../models/ship.model";
import {map, shareReplay} from "rxjs/operators";

@Injectable()
export class ShipService {

  private ships$ !: Observable<Ship[]>

  constructor(private apollo: Apollo) {
    this.initShips()
  }

  public getShips(): Observable<Ship[]> {
    return this.ships$;
  }

  public getShipsById(id: string): Observable<Ship | undefined> {
    return this.ships$
      .pipe(
        map(ships => {
          return ships.find(ship => ship.id === id);
        })
      )
  }

  public getPorts(): Observable<string[]> {
    return this.ships$
      .pipe(
        map(ships => {
            const uniques = new Set();
            return ships.reduce((arr: string[], current) => {
              if (!uniques.has(current.home_port)) {
                arr.push(current.home_port);
                uniques.add(current.home_port);
              }
              return arr;
            }, []);
          }
        )
      )
  }

  public getTypes(): Observable<string[]> {
    return this.ships$
      .pipe(
        map(ships => {
            const uniques = new Set();
            return ships.reduce((arr: string[], current) => {
              if (!uniques.has(current.type)) {
                arr.push(current.type);
                uniques.add(current.type);
              }
              return arr;
            }, []);
          }
        )
      )
  }

  private initShips() {
    this.ships$ = this.apollo.watchQuery<Ship[]>({query: GET_SHIPS}).valueChanges
      .pipe(
        map(({data}: any) => data.ships),
        shareReplay({bufferSize: 1, refCount: true})
      )
  }
}
