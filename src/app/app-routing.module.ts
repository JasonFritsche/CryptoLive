import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentCoinComponent } from './components/sidenav/current-coin/current-coin.component';

const routes: Routes = [
  { path: 'Latest', component: CurrentCoinComponent },
  { path: '', redirectTo: '/Latest', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
