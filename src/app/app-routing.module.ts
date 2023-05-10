import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorairesComponent } from './horaires/horaires.component';
import { HorairesDetailComponent } from './horaires-detail/horaires-detail.component';

const routes: Routes = [
  { path: 'horaires', component: HorairesComponent},
  { path: 'horairesDetail', component: HorairesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
