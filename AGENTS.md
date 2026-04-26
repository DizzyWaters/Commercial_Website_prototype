# AGENTS.md

## Project Overview

- This project is a software product developed as part of the Software Engineering course.
- The goal of the project is to build a maintainable MVP with clear architecture, readable code, and documented project management decisions.
- The repository is intended to support a hybrid development workflow: human developer + AI coding assistant.
- The AI assistant must treat this file as the entry point for repository instructions.

## Core Rules for AI Assistants

- Always read the `/docs` folder before making architectural or feature-level changes.
- Use `/docs/pm_approach.md` to understand how the project is managed.
- Use `/docs/plans/roadmap.md` to understand the MVP scope and implementation order.
- Do not invent requirements that are not documented.
- Do not make large architectural changes without explaining the reason first.
- Prefer small, focused changes instead of large rewrites.
- Keep the code understandable for a student-level software engineering project.

## Technology Rules

- Use TypeScript as the main programming language.
- Use consistent formatting and clear naming.
- Prefer simple, readable code over clever abstractions.
- Avoid duplicated logic when a small reusable function or component would be clearer.
- Add comments only when they explain non-obvious decisions.
- Do not add unnecessary dependencies without justification.

## Coding Style

- Use meaningful names for files, functions, variables, and components.
- Keep functions small and focused on one responsibility.
- Follow existing project structure and naming conventions.
- Validate user input where needed.
- Handle errors explicitly instead of ignoring them.

## Testing and Quality

- Add or update tests when implementing important logic.
- Run available linting, formatting, and test commands before considering work complete.
- If tests or checks cannot be run, clearly explain why.
- Do not leave broken, unused, or experimental code in the repository.

## Documentation Rules

- Update documentation when project behavior, architecture, or scope changes.
- Keep documentation short, specific, and useful.
- Do not put all context into this file.
- Use the `/docs` folder for detailed project information.




