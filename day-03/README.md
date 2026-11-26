# Day 03 – TypeScript Essentials

**Goal:** Use types to make the Day 02 UI code safer and self-documenting.

## What was built

The same **User Directory** from Day 02, fully rewritten in TypeScript:

| File | TypeScript concept |
|------|--------------------|
| `src/types/user.ts` | `interface`, `type` alias, nested interfaces, indexed access types |
| `src/types/fetchState.ts` | union type, literal type, generic interface |
| `src/hooks/useFetch.ts` | generic function `useFetch<T>`, typed `useState`, typed `useEffect` cleanup |
| `src/components/SearchBar.tsx` | props interface, `React.ChangeEvent<HTMLInputElement>` |
| `src/components/UserCard.tsx` | props typed with indexed access (`User['name']`) |
| `src/components/UserList.tsx` | `FetchStatus` union type narrowing |
| `src/App.tsx` | `useFetch<UsersResponse>`, `useState<string>`, `useMemo` return type |
| `src/main.tsx` | null-check before `createRoot` |

## Component + type tree

```
src/
├── types/
│   ├── user.ts        ← User, Address, Company, Geo, UsersResponse
│   └── fetchState.ts  ← FetchStatus (union), FetchState<T> (generic interface)
├── hooks/
│   └── useFetch.ts    ← useFetch<T>(url) → FetchState<T>
└── components/
    ├── SearchBar.tsx   ← SearchBarProps interface
    ├── UserCard.tsx    ← UserCardProps (indexed access types)
    └── UserList.tsx    ← UserListProps with FetchStatus union
```

## Key TypeScript concepts used

- **interface** — shape of objects (User, Address, Company, props)
- **type alias** — primitives + unions (`FetchStatus`, `Coordinate`, `UserId`)
- **generic type** — `useFetch<T>`, `FetchState<T>`
- **union type** — `'idle' | 'loading' | 'success' | 'error'`
- **literal type** — exact string values compared with `===` (type narrowing)
- **indexed access type** — `User['name']` to pick a field's type
- **optional prop** — `placeholder?` in SearchBarProps
- **null check** — `document.getElementById('root')` guarded before use

## How to run

```bash
cd day-03
npm install
npm run dev        # → http://localhost:5173
npm run typecheck  # → tsc --noEmit (should produce 0 errors)
```

## References

- https://www.typescriptlang.org/docs/handbook/intro.html
- https://react.dev/learn/typescript
