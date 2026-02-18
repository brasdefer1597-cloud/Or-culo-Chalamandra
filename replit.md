# Oráculo Chalamandra

## Overview
A React + TypeScript + Vite frontend application that serves as a decision-making oracle tool. Users select a method (6 Sombreros, 5 Porqués, Disney, Covey, OODA Loop), a context, describe their situation, and receive structured analysis questions. Optionally uses Google Gemini AI for deeper analysis.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **AI Integration**: Google Gemini API (`@google/genai`)
- **Port**: 5000 (development)

### File Structure
```
/                     - Root project directory
├── index.html        - HTML entry point
├── index.tsx         - React app bootstrap
├── App.tsx           - Main application component
├── types.ts          - TypeScript types and enums
├── constants.ts      - Oracle question bank and method descriptions
├── components/
│   ├── Button.tsx    - Reusable button component
│   ├── Footer.tsx    - Footer component
│   ├── Header.tsx    - Header with app title
│   ├── Input.tsx     - Form input components (Select, Textarea, Toggle)
│   ├── OracleForm.tsx - Oracle configuration form
│   └── OracleResult.tsx - Results display with AI integration
├── vite.config.ts    - Vite configuration (port 5000, allowedHosts)
├── tsconfig.json     - TypeScript configuration
└── package.json      - Dependencies and scripts
```

## Environment Variables
- `GEMINI_API_KEY` - Required for AI-powered analysis feature (optional for basic oracle functionality)

## Recent Changes
- 2026-02-18: Initial Replit setup - configured Vite to port 5000 with allowedHosts, removed CDN importmap in favor of bundled dependencies, added Vite entry script to index.html.
