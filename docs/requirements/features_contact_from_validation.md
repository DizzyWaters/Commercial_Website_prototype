# Feature: Contact Form Validation

## User Story

As a website visitor, I want to submit a contact form with my name, email address, and message, so that I can send an inquiry to the business without using external communication tools.

## Acceptance Criteria

### AC1: Valid contact form input

Given the visitor has entered a non-empty name, a valid email address, and a non-empty message
When the contact form is validated
Then the form input should be accepted as valid

### AC2: Missing required fields

Given the visitor leaves one or more required fields empty
When the contact form is validated
Then the form input should be rejected and an error message should be returned for each missing required field

### AC3: Invalid email format

Given the visitor enters an email address in an invalid format
When the contact form is validated
Then the form input should be rejected and an email validation error should be returned

