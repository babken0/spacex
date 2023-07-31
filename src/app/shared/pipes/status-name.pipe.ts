import {Pipe, PipeTransform} from '@angular/core';
import {StatusService} from "../../core/services/status.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Pipe({
  name: 'statusName'
})
export class StatusNamePipe implements PipeTransform {
  constructor(private statusService: StatusService) {
  }

  transform(id: number): Observable<string> {
    // return this.statusService.getStatusById(id)
    //   .pipe(map(status => status?.name["3"]));
    return  of("Test")
  }
}
