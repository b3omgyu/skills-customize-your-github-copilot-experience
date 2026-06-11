# New Assignment Skill

Purpose
- Provide maintainers a simple, repeatable process for creating new assignment content that follows project standards and templates.

When to use
- Use this skill when adding a new assignment under `assignments/<assignment-id>/`.

Files created
- `assignments/<assignment-id>/README.md` — follow `templates/assignment-template.md` and include metadata (title, objective, tasks).
- Optional: `assignments/<assignment-id>/solutions/` for instructor solutions (keep private/protected).

Recommended steps
1. Copy `templates/assignment-template.md` to `assignments/<assignment-id>/README.md`.
2. Fill metadata: title, objective, difficulty, estimated time, prerequisites, learning goals.
3. Add tasks with Description and Requirements; include example I/O where helpful.
4. Run site preview (if available) and verify styling and accessibility.
5. If instructor solutions are added, place them in `assignments/<assignment-id>/solutions/` and do not expose them in student-facing files.

Scripts and references
- Place any helper scripts for generating starter code in `.github/skills/new-assignment/scripts/`.
- Keep reference materials (rubrics, sample datasets) in `.github/skills/new-assignment/references/`.

Tone and content rules
- Student-facing files must be student-friendly, encouraging, and avoid full solutions.
- Instructor materials must be clearly labeled and stored separately.

Contact
- Tag maintainers or open an issue if unsure whether content should be instructor-only.