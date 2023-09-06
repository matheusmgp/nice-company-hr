import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeClockFormComponent } from './time-clock-form/time-clock-form.component';

const routes: Routes = [
  {
    path: ':employee/registrar',
    component: TimeClockFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeClockRoutingModule {}
