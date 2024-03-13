import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { JsonPipe, NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatError,
    NgIf,
    MatInput,
    MatCheckbox,
    MatLabel,
    MatButton,
    JsonPipe
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  submitted = false;

  submitForm() {
    if (this.registrationForm.valid) {
      this.submitted = true;
    }
  }

  readonly registrationForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    acceptsTandC: new FormControl<boolean>(false, {
      nonNullable: true
    })
  });

  reset(): void {
    this.submitted = false;
    this.registrationForm.reset();
  }

}
