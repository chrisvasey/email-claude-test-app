# Test Issues for Claude Code Automation

## Issue 1: Add a dark mode toggle
**Subject:** Add dark mode toggle with system preference detection

**Body:**
Add a dark mode toggle button to the top right of the page. It should:
- Detect system preference on initial load
- Allow manual toggle override
- Persist preference in localStorage
- Use Tailwind's dark mode classes

---

## Issue 2: Create a contact form
**Subject:** Build a contact form with validation

**Body:**
Create a `/contact` page with a form that has:
- Name, email, and message fields
- Client-side validation (required fields, valid email format)
- A submit button that shows a success message
- Styled with Tailwind CSS

---

## Issue 3: Add a navigation header
**Subject:** Create a reusable navigation header component

**Body:**
Build a navigation header component that:
- Has links to Home and Contact pages
- Is responsive (hamburger menu on mobile)
- Highlights the current active page
- Is used in the root layout

---

## Issue 4: Implement a counter component
**Subject:** Create an interactive counter with increment/decrement

**Body:**
Add a simple counter component to the home page with:
- Display of current count
- Increment and decrement buttons
- Reset button
- Count should not go below 0

---

## Issue 5: Add an API route
**Subject:** Create a health check API endpoint

**Body:**
Create an API route at `/api/health` that returns:
- Status: "ok"
- Timestamp of the request
- Environment (development/production)

---

## Issue 6: Build a todo list
**Subject:** Implement a basic todo list with local storage

**Body:**
Create a `/todos` page with a todo list that:
- Allows adding new todos
- Allows marking todos as complete
- Allows deleting todos
- Persists todos to localStorage
- Shows empty state when no todos exist

---

## Issue 7: Add loading and error states
**Subject:** Create reusable loading spinner and error boundary components

**Body:**
Create two components:
1. A loading spinner component with customizable size
2. An error boundary component that catches errors and displays a friendly message

Place these in a `src/components/` directory.

---

## Issue 8: Implement a card grid
**Subject:** Create a responsive card grid layout

**Body:**
Build a card component and display a grid of 6 sample cards on the home page:
- Each card should have a title, description, and link
- Grid should be 1 column on mobile, 2 on tablet, 3 on desktop
- Cards should have hover effects

---

## Issue 9: Add metadata and SEO
**Subject:** Configure proper metadata for all pages

**Body:**
Add proper metadata to the app:
- Set up metadata in layout.tsx with title template
- Add Open Graph tags
- Add a favicon (already exists, just reference it)
- Create a `robots.ts` file

---

## Issue 10: Create a 404 page
**Subject:** Add a custom not-found page

**Body:**
Create a custom 404 page (`not-found.tsx`) that:
- Has a friendly "Page not found" message
- Includes a link back to the home page
- Matches the site's styling

---

## Issue 11: Add environment variable handling
**Subject:** Set up environment variables with validation

**Body:**
Create a `src/lib/env.ts` file that:
- Defines expected environment variables
- Validates they exist at build time
- Exports typed environment variables for use in the app

Add a `.env.example` file documenting required variables.

---

## Issue 12: Implement a fetch wrapper
**Subject:** Create a typed fetch utility for API calls

**Body:**
Create a `src/lib/fetch.ts` utility that:
- Wraps the native fetch API
- Handles JSON parsing
- Includes error handling
- Is properly typed with generics
- Supports common options (headers, timeout)
