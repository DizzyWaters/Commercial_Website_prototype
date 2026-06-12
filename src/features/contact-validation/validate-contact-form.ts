import { createContactFormValidator } from './create-contact-form-validator';
import type { ContactFormInput, ContactFormValidationResult } from './types';

/**
 * Convenience function for UI components that only need the default validator.
 * It keeps the public API simple while the module internals use Strategy pattern.
 */
export function validateContactForm(input: ContactFormInput): ContactFormValidationResult {
  return createContactFormValidator().validate(input);
}
