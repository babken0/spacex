import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {SearchComponent} from "./components/search/search.component";
import {ContentComponent} from "./components/content/content.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {RouterLink} from "@angular/router";
import {ShipService} from "./core/services/ship.service";
import {NgxPaginationModule} from "ngx-pagination";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {AppPaginationComponent} from "./app-pagination/app-pagination.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContentComponent,
    AppPaginationComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterLink,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [ShipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
