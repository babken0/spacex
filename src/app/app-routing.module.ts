import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";


const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {path: 'content', component: AppComponent}
    ]
  },
  {
    path: 'content/:id',
    loadChildren: () => import('./components/content-details/content-details.module').then(m => m.ContentDetailsModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
