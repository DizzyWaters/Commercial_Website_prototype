# Prompt: Spec-Driven Contact Form UI

Use this prompt with an AI coding assistant after providing these files as context:

- `docs/DESIGN.md`
- `src/features/contact-validation/README.md`
- `src/features/contact-validation/validate-contact-form.ts`
- `src/features/contact-validation/types.ts`

```text
You are working in my Product Repository for a commercial website prototype.

Task:
Generate a frontend UI for the existing Contact Form Validation feature.

Context:
- Follow `docs/DESIGN.md` strictly.
- The existing business logic is in `src/features/contact-validation`.
- The UI must import and call `validateContactForm` from that module.
- The validation module already uses the Strategy Pattern. Do not rewrite the validation logic inside the UI.

Framework:
- Use React + TypeScript.
- Use Next.js App Router.
- Use plain CSS in `src/app/globals.css`.

Requirements:
1. Create a contact form UI with fields for name, email, and message.
2. Add a submit/validate button.
3. On button click or form submit, call `validateContactForm`.
4. If validation fails, display returned validation errors beside the correct fields.
5. If validation succeeds, display a success message.
6. Do not call an API.
7. Do not store data in localStorage or a database.
8. Keep the React component small and readable.
9. Use semantic and accessible HTML.
10. Follow all colors, spacing, typography, component, and accessibility rules from `docs/DESIGN.md`.

Expected output:
- `src/components/ContactFormSection.tsx`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- Any minimal config files required to run the Next.js prototype.
```
