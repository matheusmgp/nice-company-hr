import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  logout() {
    localStorage.removeItem('section');
    localStorage.removeItem('section_token');
    sessionStorage.clear();
    window.location.reload();
  }
}
