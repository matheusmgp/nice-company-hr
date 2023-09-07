import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}
  public isLogged: boolean = false;
  ngOnInit(): void {
    let value = localStorage.getItem('logged');
    this.isLogged = value ? true : false;
  }
  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
