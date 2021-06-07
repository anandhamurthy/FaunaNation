import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyReportShortViewModule } from './daily-report-short-view/daily-report-short-view.module';
import { DailyReportStatusModule } from './daily-report-status/daily-report-status.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DailyReportShortViewModule,
    DailyReportStatusModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
