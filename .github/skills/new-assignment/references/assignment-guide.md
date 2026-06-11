# Assignment Guide

Purpose
- Help maintainers choose appropriate difficulty, scope, and supporting files when creating programming assignments for Mergington High School.

Required metadata (include near the top of README.md)
- id: kebab-case identifier (matches folder name)
- title: short, descriptive title
- difficulty: beginner | intermediate | advanced
- estimated_time: e.g., "30-45 minutes"
- prerequisites: short list (language features, libraries)
- learning_goals: 3–5 concise goals

Difficulty & scope guidance
- Beginner: single focused concept (e.g., loops, conditionals). 20–45 minutes, 1–3 small tasks.
- Intermediate: combines concepts (functions + file I/O, simple data structures). 45–90 minutes, 2–4 tasks.
- Advanced: multi-step project with modular code and tests. 90+ minutes, 3+ tasks and optional extensions.

Starter code
- Provide minimal starter code only when it helps students get started (scaffold functions, simple tests).
- Keep starter code focused: do not include full solutions or detailed hints that reveal answers.

Tasks and requirements
- Each task must include a Description and a Requirements list (specific, testable outcomes).
- Provide at least one example input/output or expected behavior for each task when helpful.

Assessment & rubrics
- Include a brief rubric for instructors when relevant (points per requirement or a pass/fail checklist).

Accessibility & clarity
- Use clear language, short sentences, and example inputs/outputs in monospace blocks.
- Ensure content is screen-reader friendly (use headings, avoid complex inline images with no alt text).

Files & organization
- README.md (student-facing) follows template.
- Optional: `starter/` for starter code, `data/` for datasets, and `solutions/` for instructor-only material.
- Label instructor-only content clearly and keep it out of student-facing files.

Registering assignments
- Use the scripts in `.github/skills/new-assignment/scripts/` to update `config.json` and register attachments.
- Verify entries and files exist after running scripts.

Verification checklist
- Metadata present and accurate
- README follows template structure with Objective, Tasks, and Requirements
- Starter code and data files included (if needed)
- Assignment registered in config and files committed

If unsure
- Ask maintainers or open an issue describing why the assignment might expose solutions; prefer hints over full answers.