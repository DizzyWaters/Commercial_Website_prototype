export type {
  ContactFormField,
  ContactFormInput,
  ContactFormValidationResult,
  ValidationError,
} from './types';

export type { ValidationStrategy } from './validation-strategy';

export { ContactFormValidator } from './contact-form-validator';
export { createContactFormValidator } from './create-contact-form-validator';
export { validateContactForm } from './validate-contact-form';
export { EmailFormatStrategy } from './strategies/email-format-strategy';
export { RequiredFieldStrategy } from './strategies/required-field-strategy';
