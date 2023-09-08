import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeClockFormComponent } from './time-clock-form/time-clock-form.component';
import { TimeClockListComponent } from './time-clock-list/time-clock-list.component';
import { TimeClockEditFormComponent } from './time-clock-edit-form/time-clock-edit-form.component';

const routes: Routes = [
  {
    path: ':employee/registrar',
    component: TimeClockFormComponent,
  },
  {
    path: 'registros',
    component: TimeClockListComponent,
  },
  {
    path: ':employee/validar/:id',
    component: TimeClockEditFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeClockRoutingModule {}
