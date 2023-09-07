import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeClockService } from '../time-clock.service';
@Component({
  selector: 'app-time-clock-edit-form',
  templateUrl: './time-clock-edit-form.component.html',
  styleUrls: ['./time-clock-edit-form.component.css'],
})
export class TimeClockEditFormComponent implements OnInit {
  id: string = '';
  employee: string = '';
  employeeData: any;
  constructor(
    private route: ActivatedRoute,
    private readonly timeClockService: TimeClockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.employee = this.route.snapshot.paramMap.get('employee') || '';
    this.getEmployee();
  }

  public getEmployee() {
    try {
      this.timeClockService.getByID(this.id).subscribe({
        next: (employee: any) => {
          this.employeeData = employee.data;
        },
        error: (err) => console.error('An error occurred :', err),
      });
    } catch (err: unknown) {
      this.timeClockService.showMessage(`Error ${err}`, true);
    }
  }
  public edit(status: string) {
    const payload = {
      status,
    };
    try {
      this.timeClockService.update(this.id, payload).subscribe({
        next: () => {
          this.timeClockService.showMessage(
            `Registro de Ponto ${status}`,
            false
          );
          this.router.navigate([`/registros`]);
        },
        error: (err) => console.error('An error occurred :', err),
      });
    } catch (err: unknown) {
      this.timeClockService.showMessage(`Error ${err}`, true);
      this.router.navigate([`/registros`]);
    }
  }
}
