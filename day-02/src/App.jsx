import { useState, useMemo } from 'react'
import useFetch from './hooks/useFetch.js'
import SearchBar from './components/SearchBar.jsx'
import UserList from './components/UserList.jsx'
import './App.css'

// Public REST API — returns 10 user objects, no auth required
const API_URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const { data: users, loading, error } = useFetch(API_URL)

  // Controlled input state
  const [query, setQuery] = useState('')

  // Derive filtered list whenever users or query changes
  // useMemo avoids re-filtering on every render
  const filtered = useMemo(() => {
    if (!users) return []
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.company.name.toLowerCase().includes(q) ||
        u.address.city.toLowerCase().includes(q)
    )
  }, [users, query])

  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <span className="header-logo">👥</span>
          <div>
            <h1 className="header-title">User Directory</h1>
            <p className="header-subtitle">Day 02 – React Forms &amp; API State</p>
          </div>
        </div>
      </header>

      <main className="main">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name, email, company or city…"
        />

        {/* Result count – only shown when data is ready */}
        {!loading && !error && users && (
          <p className="result-count">
            {filtered.length} of {users.length} users
          </p>
        )}

        <UserList
          users={filtered}
          loading={loading}
          error={error}
          query={query}
        />
      </main>
    </div>
  )
}

export default App
