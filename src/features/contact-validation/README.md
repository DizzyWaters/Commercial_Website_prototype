# Contact Validation Module

## Purpose

This module contains the business logic for validating the contact form input from the commercial website prototype.

The module checks:

- Whether the visitor entered a name.
- Whether the visitor entered an email address.
- Whether the email address has a valid basic format.
- Whether the visitor entered a message.

## Selected Design Pattern

The selected design pattern is the **Strategy Pattern**.

## Why Strategy Pattern Fits This Feature

Contact form validation is made of separate rules. Each rule can be treated as an independent validation strategy.

This is a good fit because:

- Each validation rule has one clear responsibility.
- New validation rules can be added without rewriting the main validator.
- The main validator does not need to know the details of each rule.
- The module avoids one large function full of unrelated `if` statements.
- The logic stays simple enough for a student-level software engineering project.

## Module Structure

```text
src/features/contact-validation/
  README.md
  index.ts
  types.ts
  validation-strategy.ts
  contact-form-validator.ts
  create-contact-form-validator.ts
  validate-contact-form.ts
  strategies/
    required-field-strategy.ts
    email-format-strategy.ts
```

## How the Module Works

`ValidationStrategy` defines the common interface for validation rules.

`RequiredFieldStrategy` validates that a required field is not empty.

`EmailFormatStrategy` validates the basic format of the email address.

`ContactFormValidator` receives a list of strategies and runs them against the contact form input.

`createContactFormValidator` builds the default validator used by the application.

`validateContactForm` is a small convenience function that UI components can call.

## Interaction With Other Components

A future contact form UI component should import `validateContactForm` from this module.

The UI component should:

1. Collect the visitor input.
2. Pass the input to `validateContactForm`.
3. Display returned validation errors if `isValid` is `false`.
4. Continue with form submission only if `isValid` is `true`.

This module does not submit the form, call APIs, update UI state, write to storage, or perform side effects. It only validates input and returns a predictable result.

## Example Usage

```ts
import { validateContactForm } from './src/features/contact-validation';

const result = validateContactForm({
  name: 'Alex',
  email: 'alex@example.com',
  message: 'I would like to know more about your services.',
});

if (!result.isValid) {
  console.log(result.errors);
}
```
