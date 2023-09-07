import {
  Component,
  OnInit,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { TimeClockService } from '../time-clock.service';
@Component({
  selector: 'app-time-clock-form',
  templateUrl: './time-clock-form.component.html',
  styleUrls: ['./time-clock-form.component.css'],
})
export class TimeClockFormComponent implements OnInit {
  employee: string = '';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('knowledgeInput')
  knowledgeInput!: ElementRef<HTMLInputElement>;
  announcer = inject(LiveAnnouncer);
  filteredKnowledges!: Observable<string[]>;
  public form: FormGroup;
  public allConhecimentos: string[] = [
    'Git',
    'React',
    'PHP',
    'NodeJS',
    'DevOps',
    'Banco de Dados',
    'TypeScript',
  ];
  public conhecimentos: string[] = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private readonly timeClockService: TimeClockService
  ) {}

  ngOnInit(): void {
    this.employee = this.route.snapshot.paramMap.get('employee') || '';
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
          Validators.maxLength(20),
          Validators.minLength(10),
        ],
      ],
      knowledges: [[], [Validators.required, Validators.minLength(1)]],
    });
    this.filteredKnowledges = this.form.controls[
      'knowledges'
    ].valueChanges.pipe(
      startWith(null),
      map((knowle: string | null) => this.allConhecimentos.slice())
    );
  }

  public register() {
    if (this.form.valid) {
      try {
        this.timeClockService.create(this.form.value).subscribe({
          next: () => {
            this.timeClockService.showMessage(
              `Obrigado, seu registro de Ponto foi enviado!`,
              false
            );
          },
          error: (err) => {
            this.timeClockService.showMessage(`${err.error.message}`, true);
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.conhecimentos.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.form.controls['knowledges'].setValue(value);
  }

  remove(fruit: string): void {
    const index = this.conhecimentos.indexOf(fruit);

    if (index >= 0) {
      this.conhecimentos.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (this.conhecimentos.length < 3 && !this.conhecimentos.includes(value)) {
      this.conhecimentos.push(value);
    }
    //this.form.controls['knowledges'].setValue(null);
    this.form.controls['knowledges'].setValue(this.conhecimentos);
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
