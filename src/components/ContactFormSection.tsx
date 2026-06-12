'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  validateContactForm,
  type ContactFormField,
  type ContactFormInput,
  type ValidationError,
} from '../features/contact-validation';

const initialFormState: ContactFormInput = {
  name: '',
  email: '',
  message: '',
};

function getFieldError(errors: ValidationError[], field: ContactFormField): string | undefined {
  return errors.find((error) => error.field === field)?.message;
}

export function ContactFormSection() {
  const [form, setForm] = useState<ContactFormInput>(initialFormState);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const fieldErrors = useMemo(
    () => ({
      name: getFieldError(errors, 'name'),
      email: getFieldError(errors, 'email'),
      message: getFieldError(errors, 'message'),
    }),
    [errors],
  );

  function updateField(field: ContactFormField, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = validateContactForm(form);

    setErrors(result.errors);

    if (result.isValid) {
      setForm(result.value);
      setSuccessMessage('Your contact details are valid. The form is ready for future submission logic.');
      return;
    }

    setSuccessMessage('');
  }

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="eyebrow">Contact validation demo</p>
        <h1 id="contact-heading">Send a clear business inquiry</h1>
        <p>
          This prototype connects the visible contact form to the Strategy Pattern validation module created in
          the previous task. The form checks input locally and does not send data to a server.
        </p>
      </div>

      <form className="contact-card" onSubmit={handleSubmit} noValidate>
        <div className="form-header">
          <h2>Contact form</h2>
          <p>All fields are required.</p>
        </div>

        {errors.length > 0 && (
          <div className="error-summary" role="alert" aria-live="polite">
            <strong>Please fix the following:</strong>
            <ul>
              {errors.map((error) => (
                <li key={`${error.field}-${error.message}`}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        {successMessage && (
          <div className="success-message" role="status" aria-live="polite">
            {successMessage}
          </div>
        )}

        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
          />
          {fieldErrors.name && (
            <p className="field-error" id="contact-name-error">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
          />
          {fieldErrors.email && (
            <p className="field-error" id="contact-email-error">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
          />
          {fieldErrors.message && (
            <p className="field-error" id="contact-message-error">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <button className="primary-button" type="submit">
          Validate Contact Form
        </button>
      </form>
    </section>
  );
}
