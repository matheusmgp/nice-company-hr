import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeClockFormComponent } from './time-clock-form/time-clock-form.component';
import { TimeClockRoutingModule } from './time-clock-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CpfPipe } from 'src/utils/pipes/cpf.pipe';
@NgModule({
  declarations: [TimeClockFormComponent, CpfPipe],
  imports: [
    CommonModule,
    TimeClockRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class TimeClockModule {}
