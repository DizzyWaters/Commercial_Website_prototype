import { ContactFormValidator } from './contact-form-validator';
import { EmailFormatStrategy } from './strategies/email-format-strategy';
import { RequiredFieldStrategy } from './strategies/required-field-strategy';

export function createContactFormValidator(): ContactFormValidator {
  return new ContactFormValidator([
    new RequiredFieldStrategy('name', 'Name'),
    new RequiredFieldStrategy('email', 'Email'),
    new RequiredFieldStrategy('message', 'Message'),
    new EmailFormatStrategy(),
  ]);
}
