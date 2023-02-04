import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureListComponent } from './capture-list/capture-list.component';
import { CaptureComponent } from './capture/capture.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'capture-list', component: CaptureListComponent },
  { path: 'capture/:name', component: CaptureComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
