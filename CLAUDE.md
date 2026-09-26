# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Hands-on practice repo for a personal backend course. The course itself (lessons, roadmap,
learning records) lives in `D:\NestJS Learning` — read its `NOTES.md` for roadmap position and
the working agreement before helping with anything here. Goal: a production-shaped NestJS +
PostgreSQL service the learner can defend in an interview.

## Learning rules (from the course working agreement)

The learner is building skill, not just code. These override the usual "just implement it":

- **No-AI-first on new topics.** Don't write feature code unprompted. Syntax/API questions:
  answer straight. Errors: ask one pointed question first, then answer. Approach questions:
  give the shape (pieces, order), not the code.
- **"Just give me the code" is honoured** — state the tradeoff once, then comply, and note it
  should be marked *not demonstrated* in the course's `learning-records/`.
- **Raw SQL before any ORM.** Don't add Prisma/Drizzle/TypeORM; the ORM choice is an open
  decision revisited around roadmap step 8–10.
- Explain in simple language; Bangla with English technical terms is fine.

## Commands

```bash
npm run start:dev        # watch mode, port from $PORT or 3000
npm run build            # nest build -> dist/
npm run lint             # oxlint --type-aware src/ test/
npm run format           # prettier (single quotes, trailing commas)
npm test                 # vitest unit tests (**/*.spec.ts)
npm run test:e2e         # vitest e2e (**/*.e2e-spec.ts, separate config)
npx vitest run src/app.controller.spec.ts   # single file
npx vitest run -t "should return"           # single test by name
```

## Quirks

- **ESM project** (`"type": "module"`, `module: nodenext`). Relative imports must end in `.js`
  (`import { AppService } from './app.service.js'`), even from `.ts` files. `main.ts` uses
  top-level `await`.
- Vitest, not Jest: `describe`/`it`/`expect` are globals (`vitest/globals` in tsconfig).
- oxlint makes `no-floating-promises` an error — await or explicitly handle every promise.
- NestJS 12, TypeScript 6. Don't assume older Nest docs apply verbatim.
