import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class TimeClockService {
  constructor(
    private http: HttpClient,
    @Inject(Injector) private injector: Injector
  ) {}
  url: string = `http://localhost:3000/api/v1`;
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/time-clock`);
  }
  getByID(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/time-clock${id}`);
  }
  update(id: string, payload: any): Observable<any[]> {
    const url = `${this.url}/time-clock/${id}`;
    return this.http.patch<any>(url, payload);
  }
  create(payload: any): Observable<any> {
    return this.http.post<any>(`${this.url}/time-clock`, payload);
  }
  showMessage(msg: string, isError: boolean = false): void {
    isError
      ? this.toastrService.error(`${msg}`, 'Operação não efetuada.')
      : this.toastrService.info(`${msg}`, 'Operação efetuada com sucesso.');
  }
}
