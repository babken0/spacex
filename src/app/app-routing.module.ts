import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'content'},
  {
    path: 'content',
    loadChildren: () => import('./components/ship-list/ship-list.module').then(m => m.ShipListModule)
  },
  {
    path: 'content/:id',
    loadChildren: () => import('./components/content-details/content-details.module').then(m => m.ContentDetailsModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
