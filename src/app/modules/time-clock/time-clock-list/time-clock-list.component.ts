import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  registers: Registers[] = [
    {
      id: 1,
      name: 'Maria',
      email: 'matheus@gmail.com',
      cpf: '60412390388',
      phone: '85998033564',
      status: true,
    },
    {
      id: 1,
      name: 'Pedro',
      email: 'matheus@gmail.com',
      cpf: '60412390388',
      phone: '85998033564',
      status: true,
    },
    {
      id: 1,
      name: 'Pereira',
      email: 'matheus@gmail.com',
      cpf: '60412390388',
      phone: '85998033564',
      status: true,
    },
    {
      id: 1,
      name: 'Iara',
      email: 'matheus@gmail.com',
      cpf: '60412390388',
      phone: '85998033564',
      status: true,
    },
    {
      id: 1,
      name: 'Gustavo',
      email: 'matheus@gmail.com',
      cpf: '60412390388',
      phone: '85998033564',
      status: false,
    },
  ];
  public dataSource: MatTableDataSource<Registers>;
  constructor() {}

  ngOnInit(): void {
    this.getRegisters();
  }
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public getRegisters() {
    this.registers;
    this.dataSource = new MatTableDataSource<Registers>(this.registers);
  }
  edit(id: string) {
    console.log('edit', id);
  }

  showStatus(status: boolean): string {
    return status ? 'Validado' : 'Não Validado';
  }
}
