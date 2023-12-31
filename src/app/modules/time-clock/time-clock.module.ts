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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimeClockListComponent } from './time-clock-list/time-clock-list.component';
import { TimeClockEditFormComponent } from './time-clock-edit-form/time-clock-edit-form.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from 'src/utils/pipes/phone.pipe';
@NgModule({
  declarations: [
    TimeClockFormComponent,
    CpfPipe,
    PhonePipe,
    TimeClockListComponent,
    TimeClockEditFormComponent,
  ],
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
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    RouterModule,
    MatListModule,
    NoopAnimationsModule,
    NgxMaskModule.forChild(),
  ],
})
export class TimeClockModule {}
