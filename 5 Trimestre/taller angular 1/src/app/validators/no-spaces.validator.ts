import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpacesValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '');
  return value.includes(' ') ? { spacesNotAllowed: true } : null;
}
