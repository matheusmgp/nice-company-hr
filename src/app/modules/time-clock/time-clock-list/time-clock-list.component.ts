import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TimeClockService } from '../time-clock.service';
import { Router } from '@angular/router';
import { Register } from '../entities/register.entity';

@Component({
  selector: 'app-time-clock-list',
  templateUrl: './time-clock-list.component.html',
  styleUrls: ['./time-clock-list.component.css'],
})
export class TimeClockListComponent implements OnInit {
  displayedColumns = [
    'name',
    'email',
    'cpf',
    'phone',
    'status',
    'updatedAt',
    'editar',
  ];
  registers: Register[] = [];
  public dataSource: MatTableDataSource<Register>;
  constructor(
    private readonly timeClockService: TimeClockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRegisters();
  }
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public getRegisters() {
    try {
      this.timeClockService.getAll().subscribe({
        next: (retorno: any) => {
          this.registers = retorno.data;
          this.dataSource = new MatTableDataSource<Register>(this.registers);
        },
        error: (err) => console.error('An error occurred :', err),
      });
    } catch (error) {
      console.log(error);
    }
  }

  edit(name: string, id: string) {
    this.router.navigate([`${name}/validar/${id}`]);
  }

  showStatus(status: string): string {
    return status == 'VALIDADO'
      ? 'Validado'
      : status == 'NAO VALIDADO'
      ? 'Não Validado'
      : 'Pendente';
  }
}
