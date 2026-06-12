# AI Prompt: Contact Validation Strategy Pattern

```text
You are working in a TypeScript commercial website prototype.

Before implementing, follow these repository rules:
- Read AGENTS.md.
- Keep the code understandable for a student-level software engineering project.
- Use TypeScript.
- Use meaningful names.
- Keep functions small and focused.
- Do not add unnecessary dependencies.
- Update documentation when architecture changes.

Selected feature:
Contact form validation.

User story:
As a website visitor, I want to submit a contact form with my name, email address, and message, so that I can send an inquiry to the business without using external communication tools.

Acceptance criteria:
1. Given the visitor has entered a non-empty name, a valid email address, and a non-empty message, when the contact form is validated, then the form input should be accepted as valid.
2. Given the visitor leaves one or more required fields empty, when the contact form is validated, then the form input should be rejected and an error message should be returned for each missing required field.
3. Given the visitor enters an email address in an invalid format, when the contact form is validated, then the form input should be rejected and an email validation error should be returned.

Task:
Implement the business logic for this feature using the Strategy design pattern.

Required structure:
Create a dedicated module at:
src/features/contact-validation/

The module must include:
- Contact form input types.
- Validation result types.
- A ValidationStrategy interface.
- RequiredFieldStrategy.
- EmailFormatStrategy.
- ContactFormValidator as the context that runs strategies.
- A factory function that creates the default validator.
- A simple exported validateContactForm function for UI usage.
- A README.md explaining the pattern choice and module interaction.

Strict constraints:
- Do not call an API.
- Do not modify UI state.
- Do not use browser storage.
- Do not submit the form.
- Do not add dependencies.
- Keep validation predictable and deterministic.
```
