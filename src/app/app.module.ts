import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GraphQLModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    RouterOutlet
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
