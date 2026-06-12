# Flow: Contact Form Validation

## Mermaid Flowchart

```mermaid
flowchart TD
    A[Visitor opens contact section] --> B[Visitor enters name, email, and message]
    B --> C[Validate contact form input]

    C --> D{Are all required fields filled?}
    D -- No --> E[Return validation errors for missing fields]
    D -- Yes --> F{Is email format valid?}

    F -- No --> G[Return email validation error]
    F -- Yes --> H[Return valid result]

    E --> I[Display errors in UI]
    G --> I
    H --> J[Allow form submission]
```

## Logic Notes

* Validation must not submit data.
* Validation must not call an API.
* Validation must not modify UI state directly.
* Validation should return a predictable result based only on the provided input.

