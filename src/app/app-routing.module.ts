import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './daily-report-short-view/group/group.component';
import { StatusComponent } from './daily-report-status/status/status.component';

const routes: Routes = [
  { path: 'daily-report-short-view', component: GroupComponent },
  { path: 'daily-report-status', component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
