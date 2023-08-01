import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ContentDetailsComponent} from "./content-details.component";
import {ContentDetailsRoutingModule} from "./content-details.routing.module";


const routes: Routes = [
  {path: '', component: ContentDetailsComponent},
];

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
