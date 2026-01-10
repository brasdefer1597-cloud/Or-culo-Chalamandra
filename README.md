<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Oráculo Chalamandra

An AI-powered oracle application providing insights with a distinct "Chalamandra" style.

View your app in AI Studio: https://ai.studio/apps/drive/1j-6WQPKve6ckhFyK_AsB0ikAKw57L8ti

## Conversion Funnel Architecture

This project implements a strategic conversion funnel designed to guide users from a limited demo to a premium, deep-analysis experience.

```mermaid
graph TD
    subgraph "Phase 1: The Hook (Calle)"
        A[User Arrives] -->|/prueba| B(Demo Page / demo.html)
        B --> C{User Interaction}
        C -->|Select Method| D[Synthesize & Recompose]
        D --> E[Locked Analysis]
    end

    subgraph "Phase 2: The Bridge (Puente)"
        E -->|Click CTA| F[Buy Me a Coffee]
        F -->|Payment Success| G(Activation Page / thanks.html)
        G -->|Set Token| H[LocalStorage Authorization]
    end

    subgraph "Phase 3: The Treasure (Magistral)"
        H -->|Redirect| I(Full App / index.html)
        I -->|Welcome| J[Magistral Modal]
        I --> K{Deep Analysis}
        K -->|Gemini 2.0 Flash Thinking| L[Full SRAP Report]
        L --> M[PDF Export & History]
    end

    style B fill:#1A1A1D,stroke:#008E4A,stroke-width:2px,color:#fff
    style F fill:#D5006C,stroke:#FFB300,stroke-width:2px,color:#fff
    style I fill:#1A237E,stroke:#D5006C,stroke-width:2px,color:#fff
    style L fill:#FFB300,stroke:#fff,stroke-width:2px,color:#000
```

## Project Structure

The project has been refactored for better organization and maintainability.

- **`src/`**: Contains all source code.
    - **`assets/`**: Centralized static assets.
        - **`styles/`**: CSS files (e.g., `index.css`).
        - **`js/`**: Shared JavaScript/Configuration (e.g., `tailwind-config.js`).
    - **`components/`**: Reusable React components.
    - **`types/`**: TypeScript type definitions.
    - **`utils/`**: Helper functions and constants.
    - **`FullApp.tsx`**: Main application logic.
    - **`DemoApp.tsx`**: Simplified demo version logic.
    - **`main-full.tsx`**: Entry point for the full application.
    - **`main-demo.tsx`**: Entry point for the demo application.

## Entry Points

The application offers two distinct entry points for different user experiences:

- **Full Version**: `index.html` - The complete Oracle experience (Protected).
- **Demo Version**: `demo.html` - A simplified landing page or demo experience.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

Access the full version at `http://localhost:3000/` and the demo version at `http://localhost:3000/demo.html`.
