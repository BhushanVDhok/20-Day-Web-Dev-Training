# Day 01 – React Foundations

**Goal:** Build a small component-based interface using JSX, props, state, and component composition.

## What was built

A simple dashboard page with:
- `Header` – site title and subtitle
- `Nav` – tab-style navigation bar
- `SummaryCard` – reusable stat card (title, value, note)
- `App` – assembles the page, passes data as props

## Component tree
(check component tree image at images/day 1-component-tree.drawio.png)
```
App
├── Header
├── Nav
└── SummaryCard × 4
```

## How to run

```bash
cd day-01
npm install
npm run dev
```

Then open http://localhost:5173

## Concepts practised

- JSX and functional components
- Props (title, value, note)
- Component composition and naming conventions
- One CSS file per component, plain CSS (no frameworks)

## References

- https://react.dev/learn
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
