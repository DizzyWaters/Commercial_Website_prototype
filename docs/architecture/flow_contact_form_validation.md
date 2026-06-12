# Flow: Contact Form Validation UI and Strategy Module

## Mermaid Flowchart

```mermaid
flowchart TD
    A[Visitor opens commercial website homepage] --> B[ContactFormSection React component renders]
    B --> C[Visitor enters name, email, and message]
    C --> D[Visitor clicks Validate Contact Form]
    D --> E[UI calls validateContactForm input]

    subgraph UI[Frontend UI Layer]
        B
        C
        D
        K[Display field errors or success message]
    end

    subgraph Module[Contact Validation Module]
        E --> F[createContactFormValidator]
        F --> G[ContactFormValidator]
        G --> H[Run RequiredFieldStrategy]
        G --> I[Run EmailFormatStrategy]
        H --> J[Return validation result]
        I --> J
    end

    J --> K
    K --> L{Is form valid?}
    L -- No --> M[Keep user on form and show accessible errors]
    L -- Yes --> N[Show success message for prototype]
```

## Architecture Notes

- `ContactFormSection` is the frontend UI component.
- `ContactFormSection` imports `validateContactForm` from `src/features/contact-validation`.
- The UI does not duplicate validation rules.
- The UI does not submit data to an API in this prototype.
- The validation module remains responsible for business logic.
- The UI is responsible for collecting input and displaying returned errors.
```
