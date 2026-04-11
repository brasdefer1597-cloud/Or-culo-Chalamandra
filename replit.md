# Oráculo Chalamandra

## Overview
A React + TypeScript + Vite frontend application that serves as a decision-making oracle tool. Users select a method (6 Sombreros, 5 Porqués, Disney, Covey, OODA Loop, SCAMPER, Mind Mapping, Design Thinking, SWOT, Storytelling, Role Storming), a context/persona (La Chola, La Fresa, La Malandra), describe their situation, and receive structured analysis questions. Optionally uses Google Gemini AI for deeper analysis via a secure server-side proxy.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **AI Integration**: Google Gemini 2.0 Flash via Vite server plugin proxy (`server/api-proxy.ts`)
- **Runtime Validation**: Zod (AI response schema validation)
- **Port**: 5000 (development)

### File Structure
```
/                       - Root project directory
├── index.html          - HTML entry point
├── index.tsx           - React app bootstrap
├── App.tsx             - Main application component (WebP images, explicit dimensions)
├── types.ts            - TypeScript types and enums
├── constants.ts        - Oracle question bank, method descriptions, COLOR_TOKEN_MAP, dev warnings
├── AUDIT_REPORT.md     - Full 14-phase forensic audit report
├── components/
│   ├── Button.tsx      - Reusable button component
│   ├── Footer.tsx      - Footer component
│   ├── Header.tsx      - Header with app title
│   ├── Input.tsx       - Form input components (Select, Textarea)
│   ├── OracleForm.tsx  - Oracle configuration form
│   └── OracleResult.tsx - Results display using COLOR_TOKEN_MAP for color resolution
├── hooks/
│   └── useOracleAI.ts  - Custom hook: calls /api/oracle proxy, Zod validation
├── server/
│   └── api-proxy.ts    - Vite plugin: /api/oracle endpoint (dev + preview modes)
│                          Server-side prompt construction, sanitization, rate limiting
├── public/
│   ├── brand-street-wisdom.png / .webp
│   ├── chalamandra.png / .webp
│   ├── method-5whys.png / .webp
│   └── method-disney.png / .webp
├── vite.config.ts      - Vite configuration (port 5000, api-proxy plugin)
├── tsconfig.json       - TypeScript configuration
└── package.json        - Dependencies and scripts
```

## Security Model
- **API Key**: `GEMINI_API_KEY` is read ONLY by the Vite plugin server process. It is never bundled into the client and never included in `define`.
- **Prompt Construction**: Built entirely server-side in `server/api-proxy.ts`. Client sends `{ method, context, situation }` — domain inputs only.
- **Input Validation**: Method and context are validated against allow-lists (enum values) before use.
- **Prompt Injection**: `sanitizeSituation()` strips quotes/backticks, limits to 1000 chars. System instructions are wrapped in immutable delimiters.
- **Rate Limiting**: 20 requests per 5 minutes per IP (in-memory in Vite plugin).
- **Body Size Limit**: 8 KB max request body.
- **Response Validation**: All AI responses validated with Zod `ResponseSchema` before use in UI.

## Environment Variables
- `GEMINI_API_KEY` - Required for AI-powered analysis. Read server-side only by Vite plugin.
- `API_KEY` - Fallback alias for `GEMINI_API_KEY`.

## Recent Changes
- 2026-04-11: Full forensic audit (14-phase) + 7 critical fixes applied:
  1. API key exposure → Vite plugin proxy in `server/api-proxy.ts` (works in dev + preview)
  2. Prompt injection hardening → server-side sanitization + system instruction delimiters
  3. Timer performance → 100ms → 500ms (−80% re-renders during loading)
  4. Color token map → `COLOR_TOKEN_MAP` replaces brittle `parseBorderClass`/`parseTextClass`
  5. Zod runtime validation → `ResponseSchema.parse()` on all AI responses
  6. Image optimization → WebP format + explicit dimensions + `<picture>` fallback
  7. Dev-time Oracle Bank completeness check → `console.warn` for missing keys
- 2026-02-18: Initial Replit setup - configured Vite to port 5000 with allowedHosts.
