export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormField = keyof ContactFormInput;

export type ValidationError = {
  field: ContactFormField;
  message: string;
};

export type ContactFormValidationResult = {
  isValid: boolean;
  value: ContactFormInput;
  errors: ValidationError[];
};
