import {NgModule} from '@angular/core';
import {ShipService} from "./services/ship.service";

@NgModule({
  providers: [
    ShipService,
  ]
})
export class CoreModule {
}
