# Day 02 – React Forms & API State

**Goal:** Manage user input and asynchronous states in React.

## What was built

A searchable **User Directory** that:
- Fetches 10 users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) on mount
- Shows a **loading spinner** while fetching
- Shows an **error message** if the request fails
- Shows an **empty state** when the search has no matches
- Shows a **result count** (e.g. "3 of 10 users")
- Filters by name, email, company, or city — live as you type
- Has a **clear (✕) button** on the search input

## Component tree

```
App
├── SearchBar          ← controlled input + clear button
└── UserList           ← handles loading / error / empty / success
    └── UserCard × n   ← one card per result
```

## Custom hook

`src/hooks/useFetch.js` — wraps `fetch` + `useEffect` with:
- AbortController cleanup (cancels stale requests)
- Returns `{ data, loading, error }`

## Concepts practised

- Controlled forms (`value` + `onChange`)
- `useState` for input state
- `useEffect` + `AbortController` cleanup (inside custom hook)
- `useMemo` for derived filtered list
- Loading / error / empty / success UI states
- Lifting state up (query lives in `App`, passed down as props)

## How to run

```bash
cd day-02
npm install
npm run dev
```

Then open http://localhost:5173

## References

- https://react.dev/reference/react-dom/components/input
- https://react.dev/learn/synchronizing-with-effects
- https://jsonplaceholder.typicode.com
