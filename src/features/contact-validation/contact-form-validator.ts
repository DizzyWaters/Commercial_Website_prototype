import type { ContactFormInput, ContactFormValidationResult, ValidationError } from './types';
import type { ValidationStrategy } from './validation-strategy';

export class ContactFormValidator {
  constructor(private readonly strategies: ValidationStrategy[]) {}

  validate(input: ContactFormInput): ContactFormValidationResult {
    const value = this.normalize(input);
    const errors = this.runStrategies(value);

    return {
      isValid: errors.length === 0,
      value,
      errors,
    };
  }

  private normalize(input: ContactFormInput): ContactFormInput {
    return {
      name: input.name.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
    };
  }

  private runStrategies(input: ContactFormInput): ValidationError[] {
    return this.strategies.flatMap((strategy) => strategy.validate(input));
  }
}
