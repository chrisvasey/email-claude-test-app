# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 app using the App Router with:
- React 19 with React Compiler enabled (`next.config.ts`)
- TypeScript with strict mode
- Tailwind CSS v4 (PostCSS-based)

Source code lives in `src/app/`. Path alias `@/*` maps to `./src/*`.
