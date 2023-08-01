import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ContentDetailsComponent} from "./content-details.component";
import {ContentDetailsRoutingModule} from "./content-details.routing.module";

@NgModule({
  declarations: [
    ContentDetailsComponent,
  ],
  imports: [
    CommonModule,
    ContentDetailsRoutingModule
  ],
})
export class ContentDetailsModule {
}
