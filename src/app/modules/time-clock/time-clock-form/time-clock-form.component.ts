import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-clock-form',
  templateUrl: './time-clock-form.component.html',
  styleUrls: ['./time-clock-form.component.css'],
})
export class TimeClockFormComponent implements OnInit {
  public form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.maxLength(100), Validators.email],
      ],
      cpf: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
        ],
      ],
    });
  }

  public register() {
    if (this.form.valid) {
      console.log('register', this.form.value);
      /*try {
        this.crudService.create(this.form.value, this.resource).subscribe({
          next: (retorno: any) => {
            this.submitClicked.emit(retorno);
            this.dialogRef.close();
            this.crudService.showMessage(
              `Categoria Criada com SUCESSO!!!`,
              false
            );
          },
          error: (err) => console.error('An error occurred :', err),
        });
      } catch (err: unknown) {
        this.crudService.showMessage(`Error ${err}`, true);
        this.router.navigate(['/categorias']);
      }*/
    }
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
