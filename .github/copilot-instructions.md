# Copilot instructions for this repository

Purpose
- Help maintainers create and improve educational assignments, templates, and site assets.
- Guide suggestions toward pedagogy, clarity, accessibility, and consistent style.

How to help
- For assignment content and templates: prefer hints, scaffolding, and explanatory comments rather than complete, final student solutions.
- When suggesting code examples for authors (not students), label them clearly (e.g., "-- instructor solution --") and keep them in dedicated files or branches named `solutions/`.
- Suggest improvements that increase accessibility, readability, and clear learning objectives (title, difficulty, estimated time, prerequisites, learning goals).
- Recommend consistent file/folder naming, metadata fields, and template usage.

Tone and style
- Student-friendly, encouraging, concise, and clear.
- Avoid condescending language; prefer actionable, positive guidance.

Do not do
- Do not produce or insert full homework solutions inline in public assignment files intended for student consumption.
- Do not generate or commit secrets, personal student data, or copyrighted answers without attribution and appropriate licensing.

Files and structure hints
- Each assignment lives under `assignments/<assignment-id>/` with metadata (e.g., metadata.json or README.md) describing objectives and difficulty.
- Keep instructor-only materials in `assignments/<assignment-id>/solutions/` or a protected branch; label them clearly.

Security & privacy
- Never suggest or include API keys, credentials, or personally identifiable student information.

If unsure
- When a suggestion could give students the answer to an assignment, prefer offering step-by-step hints and ask maintainers to confirm if a full solution is appropriate.

Thank you for keeping guidance learning-focused and student-first.