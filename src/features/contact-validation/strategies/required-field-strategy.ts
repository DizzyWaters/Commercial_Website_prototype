import type { ContactFormField, ContactFormInput, ValidationError } from '../types';
import type { ValidationStrategy } from '../validation-strategy';

export class RequiredFieldStrategy implements ValidationStrategy {
  constructor(
    private readonly field: ContactFormField,
    private readonly label: string,
  ) {}

  validate(input: ContactFormInput): ValidationError[] {
    const value = input[this.field];

    if (value.trim().length > 0) {
      return [];
    }

    return [
      {
        field: this.field,
        message: `${this.label} is required.`,
      },
    ];
  }
}
