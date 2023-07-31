import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ContentDetailsComponent} from "./content-details.component";


const routes: Routes = [
  {path: '', component: ContentDetailsComponent},
];

@NgModule({
  declarations: [
    ContentDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentDetailsModule {
}
