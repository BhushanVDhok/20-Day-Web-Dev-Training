/**
 * SearchBar.tsx
 *
 * Key concepts demonstrated:
 *   - interface for component props
 *   - React.ChangeEvent<HTMLInputElement> — typing DOM events
 *   - optional prop with default value (placeholder?)
 */

import type { ChangeEvent } from 'react'
import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string   // optional prop — has a default
}

function SearchBar({ value, onChange, placeholder = 'Search…' }: SearchBarProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange(e.target.value)
  }

  function handleClear(): void {
    onChange('')
  }

  return (
    <div className="searchbar">
      <label htmlFor="search" className="searchbar-label">
        Search users
      </label>
      <div className="searchbar-row">
        <input
          id="search"
          type="text"
          className="searchbar-input"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className="searchbar-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
