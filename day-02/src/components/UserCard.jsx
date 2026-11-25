import './UserCard.css'

/**
 * UserCard – displays one user's summary.
 * Props: name, email, company, city
 */
function UserCard({ name, email, company, city }) {
  // Extract initials from name for the avatar
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
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
