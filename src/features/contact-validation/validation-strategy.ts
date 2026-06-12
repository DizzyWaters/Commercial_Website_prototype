import type { ContactFormInput, ValidationError } from './types';

/**
 * Strategy interface for contact form validation rules.
 * Each strategy checks one rule and returns zero or more validation errors.
 */
export interface ValidationStrategy {
  validate(input: ContactFormInput): ValidationError[];
}
