import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupItemComponent } from './group-item/group-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [GroupComponent, GroupItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule],
  exports: [GroupComponent, GroupItemComponent],
})
export class DailyReportShortViewModule {}
