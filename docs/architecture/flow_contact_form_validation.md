# Flow: Contact Form Validation Module

## Mermaid Flowchart

```mermaid
flowchart TD
    A[Contact Form UI Component] --> B[validateContactForm input]
    B --> C[createContactFormValidator]
    C --> D[ContactFormValidator]

    D --> E[RequiredFieldStrategy: name]
    D --> F[RequiredFieldStrategy: email]
    D --> G[RequiredFieldStrategy: message]
    D --> H[EmailFormatStrategy]

    E --> I[Validation errors array]
    F --> I
    G --> I
    H --> I

    I --> J{Are there validation errors?}
    J -- Yes --> K[Return isValid false and errors]
    J -- No --> L[Return isValid true and normalized value]

    K --> M[UI displays validation messages]
    L --> N[UI may continue to form submission]
```

## Architecture Notes

- The contact form UI depends on the validation module.
- The validation module does not depend on the UI.
- `ContactFormValidator` is the context that runs all validation strategies.
- Each validation strategy owns one validation rule.
- The module returns a validation result instead of causing side effects.
- Form submission is outside the scope of this module.
