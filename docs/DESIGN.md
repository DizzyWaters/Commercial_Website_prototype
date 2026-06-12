# DESIGN.md

## Purpose

This file is the design contract for the Commercial Website Prototype. AI assistants must follow these UI rules when generating or modifying frontend code.

The goal is to avoid generic, inconsistent, inaccessible UI output. The interface should look like a small professional commercial website, not a random dashboard.

## Framework Choice

- Use **React + TypeScript**.
- Use **Next.js App Router** for the application shell.
- Use plain CSS in `src/app/globals.css` for this prototype.
- Do not add UI libraries unless there is a clear reason.
- Do not use randomly generated Tailwind classes for this task.

## Color Palette

Use only these colors unless a future design update changes this file.

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | `#2563EB` | Main action buttons, focus states, important links |
| Primary Hover | `#1D4ED8` | Hover state for primary actions |
| Secondary | `#14B8A6` | Success messages and small accents |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards and form containers |
| Border | `#CBD5E1` | Inputs, cards, separators |
| Text | `#0F172A` | Main text |
| Muted Text | `#475569` | Supporting text |
| Error | `#DC2626` | Validation errors |
| Error Background | `#FEF2F2` | Error summary background |
| Success Background | `#ECFDF5` | Success message background |

## Typography

- Use system fonts: `Inter`, `Segoe UI`, `Roboto`, `Arial`, `sans-serif`.
- Main page heading must be between `2rem` and `3rem`.
- Section headings must be between `1.5rem` and `2rem`.
- Body text must be at least `1rem`.
- Form labels must be visible and semantically connected to inputs.
- Do not use placeholder text as the only label.

## Spacing and Layout

- Page sections must use comfortable spacing: at least `2rem` vertical padding on small screens and `4rem` on larger screens.
- Cards must use `1.5rem` to `2rem` padding.
- Form fields must have at least `0.75rem` padding.
- Inputs must have at least `0.75rem` vertical spacing between them.
- The contact form must fit comfortably on mobile and desktop.
- Use a single-column form layout for clarity.

## Component Rules

### Buttons

- Primary buttons must use the Primary color.
- Buttons must have rounded corners of at least `0.75rem`.
- Buttons must have clear hover and focus states.
- Never stack two primary buttons directly beside each other.
- Button text must describe the action, for example: `Validate Contact Form`.

### Forms

- Every input must have a visible `<label>`.
- Validation errors must appear near the related field.
- An error summary may appear above the form when multiple errors exist.
- Use `aria-invalid` for invalid fields.
- Use `aria-describedby` to connect error text to inputs.
- Do not submit or send data to an API in this prototype.
- The UI must call the existing `validateContactForm` module from `src/features/contact-validation`.

### Cards

- Cards must use the Surface color.
- Cards must have a visible border.
- Cards must have rounded corners.
- Cards must not rely only on shadows for separation.

## Accessibility Rules

- Use semantic HTML elements: `main`, `section`, `form`, `label`, `input`, `textarea`, `button`.
- Use accessible status areas for validation feedback.
- Do not remove focus outlines without replacing them.
- Color must not be the only way to identify errors.
- Text contrast must remain readable on the selected background.

## Prohibited UI Output

AI assistants must not:

- Generate generic dashboard UI.
- Use default Tailwind blue without checking this file.
- Add a login screen or admin panel.
- Add API calls or database behavior for this task.
- Mix validation logic directly into the React component when the existing module already provides it.
- Create unstructured `div`-only markup when semantic HTML is available.
