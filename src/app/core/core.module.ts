import {NgModule} from '@angular/core';
import {ShipService} from "./services/ship.service";
import {StateService} from "./services/state.service";

@NgModule({
  providers: [
    ShipService,
    StateService
  ]
})
export class CoreModule {
}
