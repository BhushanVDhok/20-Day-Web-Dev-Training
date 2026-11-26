/**
 * UserCard.tsx
 *
 * Key concepts demonstrated:
 *   - interface for props with specific string fields (not `any`)
 *   - extracting a pure display component — no state, no side effects
 */

import type { User } from '../types/user'
import './UserCard.css'

// We only need the display fields — pick them explicitly instead of passing
// the whole User object so the component stays decoupled from the API shape.
interface UserCardProps {
  name: User['name']          // string
  email: User['email']        // string
  company: User['company']['name']  // string
  city: User['address']['city']     // string
}

function UserCard({ name, email, company, city }: UserCardProps) {
  const initials: string = name
    .split(' ')
    .slice(0, 2)
    .map((word: string) => word[0])
    .join('')
    .toUpperCase()

  return (
    <article className="user-card">
      <div className="user-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
        <p className="user-meta">
          {company} · {city}
        </p>
      </div>
    </article>
  )
}

export default UserCard
