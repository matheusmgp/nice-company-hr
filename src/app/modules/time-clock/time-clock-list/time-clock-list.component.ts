import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TimeClockService } from '../time-clock.service';

export type Registers = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: boolean;
};
@Component({
  selector: 'app-time-clock-list',
  templateUrl: './time-clock-list.component.html',
  styleUrls: ['./time-clock-list.component.css'],
})
export class TimeClockListComponent implements OnInit {
  displayedColumns = ['name', 'email', 'cpf', 'phone', 'status', 'editar'];
  registers: Registers[] = [];
  public dataSource: MatTableDataSource<Registers>;
  constructor(private readonly timeClockService: TimeClockService) {}

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
          console.log(retorno);
          this.registers = retorno.data.map((valor: any) => {
            return valor;
          });
          this.dataSource = new MatTableDataSource<Registers>(this.registers);
        },
        error: (err) => console.error('An error occurred :', err),
      });
    } catch (error) {
      console.log(error);
    }
  }

  edit(id: string) {
    console.log('edit', id);
  }

  showStatus(status: boolean): string {
    return status ? 'Validado' : 'Não Validado';
  }
}
