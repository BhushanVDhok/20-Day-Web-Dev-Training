/**
 * App.tsx
 *
 * Key concepts demonstrated:
 *   - useFetch<UsersResponse> — generic hook with concrete type
 *   - typed useState<string>
 *   - useMemo with explicit return type User[]
 *   - type narrowing with status literal
 */

import { useState, useMemo } from 'react'
import useFetch from './hooks/useFetch'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import type { User, UsersResponse } from './types/user'
import './App.css'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  // Generic useFetch — TypeScript knows data is UsersResponse | null
  const { data: users, status, error } = useFetch<UsersResponse>(API_URL)

  const [query, setQuery] = useState<string>('')

  // useMemo with explicit return type annotation
  const filtered: User[] = useMemo(() => {
    if (!users) return []
    const q: string = query.trim().toLowerCase()
    if (!q) return users
    return users.filter((u: User) =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.company.name.toLowerCase().includes(q) ||
      u.address.city.toLowerCase().includes(q)
    )
  }, [users, query])

  const totalCount: number = users?.length ?? 0

  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <span className="header-logo">👥</span>
          <div>
            <h1 className="header-title">User Directory</h1>
            <p className="header-subtitle">Day 03 – TypeScript Essentials</p>
          </div>
        </div>
      </header>

      <main className="main">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name, email, company or city…"
        />

        {status === 'success' && (
          <p className="result-count">
            {filtered.length} of {totalCount} users
          </p>
        )}

        <UserList
          users={filtered}
          status={status}
          error={error}
          query={query}
        />
      </main>
    </div>
  )
}

export default App
