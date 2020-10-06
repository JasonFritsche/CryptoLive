import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentCoinComponent } from './components/sidenav/current-coin/current-coin.component';
import { HomeComponent } from './components/sidenav/home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Chart', component: CurrentCoinComponent },
  { path: 'Chart/:id', component: CurrentCoinComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
