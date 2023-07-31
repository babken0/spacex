import {Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from "rxjs";

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {
  constructor() {
  }

  transform(id: number): Observable<string> {
    // return this.countryService.getCountryById(id)
    //   .pipe(map(country => country?.name["3"]))
    return  of("name")
  }
}
