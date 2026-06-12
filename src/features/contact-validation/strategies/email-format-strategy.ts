import type { ContactFormInput, ValidationError } from '../types';
import type { ValidationStrategy } from '../validation-strategy';

const SIMPLE_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailFormatStrategy implements ValidationStrategy {
  validate(input: ContactFormInput): ValidationError[] {
    const email = input.email.trim();

    if (email.length === 0) {
      return [];
    }

    if (SIMPLE_EMAIL_PATTERN.test(email)) {
      return [];
    }

    return [
      {
        field: 'email',
        message: 'Email must be in a valid format.',
      },
    ];
  }
}
