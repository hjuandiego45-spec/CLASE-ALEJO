import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpacesValidator } from './validators/no-spaces.validator';
import { passwordMatchValidator } from './validators/password-match.validator';

interface RegistrationForm {
  fullName: FormControl<string>;
  email: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  age: FormControl<number | null>;
  terms: FormControl<boolean>;
}

interface RegisteredUser {
  fullName: string;
  email: string;
  username: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  showPassword = false;
  submittedUser: RegisteredUser | null = null;

  readonly registrationForm: FormGroup<RegistrationForm>;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group(
      {
        fullName: this.formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: this.formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.email
        ]),
        username: this.formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9_]+$/),
          noSpacesValidator
        ]),
        password: this.formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        confirmPassword: this.formBuilder.nonNullable.control('', [Validators.required]),
        age: this.formBuilder.control<number | null>(null, [
          Validators.required,
          Validators.min(15),
          Validators.max(90)
        ]),
        terms: this.formBuilder.nonNullable.control(false, [Validators.requiredTrue])
      },
      { validators: passwordMatchValidator }
    );
  }

  get controls(): RegistrationForm {
    return this.registrationForm.controls;
  }

  isInvalid(controlName: keyof RegistrationForm): boolean {
    const control = this.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const value = this.registrationForm.getRawValue();

    this.submittedUser = {
      fullName: value.fullName,
      email: value.email,
      username: value.username,
      age: value.age as number
    };
  }

  clearForm(): void {
    this.registrationForm.reset({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      age: null,
      terms: false
    });
    this.submittedUser = null;
  }
}
