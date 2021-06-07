import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { StatusItemComponent } from './status-item/status-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [StatusComponent, StatusItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule],
  exports: [StatusComponent, StatusItemComponent],
})
export class DailyReportStatusModule {}
