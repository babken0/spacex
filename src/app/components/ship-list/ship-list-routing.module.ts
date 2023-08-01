import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShipListComponent} from "./ship-list.component";

const routes: Routes = [
  {
    path: '',
    component: ShipListComponent,

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipListRoutingModule {
}
