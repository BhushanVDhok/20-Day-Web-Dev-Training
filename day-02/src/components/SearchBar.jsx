import './SearchBar.css'

/**
 * SearchBar – controlled input component.
 * Props:
 *   value    – current search string (controlled)
 *   onChange – callback(newValue: string)
 *   placeholder – optional hint text
 */
function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  function handleClear() {
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
