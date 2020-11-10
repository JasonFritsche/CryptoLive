import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';
import { NavbarComponent } from './components/sidenav/navbar/navbar.component';
import { CurrentCoinComponent } from './components/sidenav/current-coin/current-coin.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/sidenav/home/home.component';
import { CoinTableComponent } from './components/sidenav/home/coin-table/coin-table.component';
import { ValueChangeDirective } from './directives/value-change.directive';
import { InfoDialogComponent } from './components/sidenav/navbar/info-dialog/info-dialog.component';
import { CoinInfoComponent } from './components/sidenav/home/coin-table/coin-info/coin-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    CurrentCoinComponent,
    ChartComponent,
    HomeComponent,
    CoinTableComponent,
    ValueChangeDirective,
    InfoDialogComponent,
    CoinInfoComponent,
  ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
