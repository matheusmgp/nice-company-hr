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
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControlPipe } from 'src/utils/pipes/formcontrol.pipe';
@NgModule({
  declarations: [TimeClockFormComponent, CpfPipe, FormControlPipe],
  imports: [
    CommonModule,
    TimeClockRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    NgxMaskModule.forChild(),
  ],
})
export class TimeClockModule {}
