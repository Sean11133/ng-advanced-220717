import { AbstractControl } from '@angular/forms';

export function forbiddenPasswordValidator(control: AbstractControl) {
  let words = ['123', 'will', '1qa'];
  let result = words.find((f) => control.value.includes(f));
  return result ? { forbiddenName: true } : null;
}
