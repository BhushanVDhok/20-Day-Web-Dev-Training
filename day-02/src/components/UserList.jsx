import UserCard from './UserCard.jsx'
import './UserList.css'

/**
 * UserList – renders loading / error / empty / success states.
 * Props:
 *   users   – filtered array of user objects
 *   loading – boolean
 *   error   – string | null
 *   query   – current search string (used in empty message)
 */
function UserList({ users, loading, error, query }) {
  if (loading) {
    return (
      <div className="state-box">
        <span className="spinner" aria-label="Loading" />
        <p>Loading users…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-box state-error">
        <p>⚠ Could not load users: {error}</p>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="state-box state-empty">
        {query
          ? <p>No results for "<strong>{query}</strong>".</p>
          : <p>No users found.</p>}
      </div>
    )
  }

  return (
    <ul className="user-list" aria-label="User list">
      {users.map((user) => (
        <li key={user.id}>
          <UserCard
            name={user.name}
            email={user.email}
            company={user.company.name}
            city={user.address.city}
          />
        </li>
      ))}
    </ul>
  )
}

export default UserList
