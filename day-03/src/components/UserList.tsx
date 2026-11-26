/**
 * UserList.tsx
 *
 * Key concepts demonstrated:
 *   - interface with User[] and FetchStatus union type as props
 *   - type narrowing: checking `status` literal before rendering
 *   - ReactNode return type (implicit, inferred by TypeScript)
 */

import type { User } from '../types/user'
import type { FetchStatus } from '../types/fetchState'
import UserCard from './UserCard'
import './UserList.css'

interface UserListProps {
  users: User[]
  status: FetchStatus         // 'idle' | 'loading' | 'success' | 'error'
  error: string | null
  query: string
}

function UserList({ users, status, error, query }: UserListProps) {
  if (status === 'loading') {
    return (
      <div className="state-box">
        <span className="spinner" aria-label="Loading" />
        <p>Loading users…</p>
      </div>
    )
  }

  if (status === 'error') {
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
      {users.map((user: User) => (
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
