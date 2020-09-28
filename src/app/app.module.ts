import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';
import { NavbarComponent } from './components/sidenav/navbar/navbar.component';
import { CurrentCoinComponent } from './components/sidenav/current-coin/current-coin.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/sidenav/home/home.component';
import { CoinCardComponent } from './components/sidenav/home/coin-card/coin-card.component';
import { ValueChangeDirective } from './directives/value-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    CurrentCoinComponent,
    ChartComponent,
    HomeComponent,
    CoinCardComponent,
    ValueChangeDirective,
  ],
  imports: [
    HighchartsChartModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
