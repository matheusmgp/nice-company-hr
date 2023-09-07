import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeClockFormComponent } from './time-clock-form/time-clock-form.component';
import { TimeClockListComponent } from './time-clock-list/time-clock-list.component';

const routes: Routes = [
  {
    path: ':employee/registrar',
    component: TimeClockFormComponent,
  },
  {
    path: 'registros',
    component: TimeClockListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeClockRoutingModule {}
