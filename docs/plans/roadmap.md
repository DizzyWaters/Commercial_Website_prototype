# MVP Roadmap

## Project Goal

The goal of the MVP is to create a functional first version of the product that demonstrates the core idea, supports the main user flow, and is simple enough to maintain and extend later.

## Stage 1: Project Foundation — Complete

- Set up the repository structure.
- Configure TypeScript and basic development tools.
- Create initial documentation:
  - `README.md`
  - `AGENTS.md`
  - `/docs/pm_approach.md`
  - `/docs/plans/roadmap.md`
- Define the main user flow.
- Identify the core MVP features.

## Stage 2: Core MVP Features — In Progress

- Implement the main application layout.
- Implement the primary user-facing feature.
- Add basic data handling.
- Add basic validation and error handling.
- Keep the UI simple and usable.

### Completed Work

- Contact form validation requirements were documented using BDD.
- Contact form validation architecture was documented using Mermaid.
- Contact form validation business logic was implemented as a Strategy Pattern module.
- A spec-driven React UI was implemented for the contact form.
- The UI now calls the existing `validateContactForm` module instead of duplicating validation logic.

### Scope Adjustments

- The contact form currently validates input only.
- The prototype does not send messages to an API, database, or email service.
- This keeps the MVP focused on maintainable frontend integration with documented business logic.
- Form submission behavior may be added in a future release after the validation flow is stable.

## Stage 3: Testing and Stabilization — Not Started

- Add tests for important logic.
- Check edge cases in the main user flow.
- Fix bugs found during manual testing.
- Improve naming, structure, and readability.
- Remove unused or experimental code.

## Stage 4: Documentation and Review — In Progress

- Update the README with setup and usage instructions.
- Review `AGENTS.md` and `/docs` to make sure they match the actual project.
- Document known limitations.
- Prepare the project for instructor review.

## MVP Scope

The MVP includes:

- A working version of the main product idea.
- A clear and simple user interface.
- Basic validation and error handling.
- Basic documentation for humans and AI assistants.
- A maintainable project structure.

## Deferred to Future Releases

The following features are not required for the MVP and may be implemented later:

- Advanced user authentication.
- Complex role-based permissions.
- Payment functionality.
- Advanced analytics.
- Mobile application support.
- Large-scale performance optimization.
- Full production deployment automation.
- Real contact form submission through an API or email service.

## Human and AI Responsibilities

### Human Developer

- Defines product direction and priorities.
- Reviews all AI-generated code.
- Makes final architecture decisions.
- Tests the product manually.
- Ensures the project meets course requirements.

### AI Assistant

- Generates boilerplate code.
- Suggests implementation plans.
- Helps write tests.
- Drafts documentation.
- Suggests refactoring opportunities.
- Explains code and project structure when needed.
