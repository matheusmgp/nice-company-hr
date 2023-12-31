import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: '',
  };
  public form: UntypedFormGroup;

  constructor(private router: Router, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('fake@email.com'),
      password: new FormControl('FAKE'),
    });
  }
  public async submit() {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['registros']).then(() => {
      window.location.reload();
    });
  }
}
