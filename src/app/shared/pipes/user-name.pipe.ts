import {Pipe, PipeTransform} from '@angular/core';
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {
  constructor() {
  }

  transform(id: number):Observable<string> {
    // return  this.userService.getUserById(id)
    //   .pipe(map(user => user?.name["3"]))
    return of("Test")
  }
}
