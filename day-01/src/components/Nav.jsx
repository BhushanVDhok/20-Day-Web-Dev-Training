import './Nav.css'

const links = [
  { label: 'Dashboard', href: '#' },
  { label: 'Employees', href: '#' },
  { label: 'Leaves', href: '#' },
  { label: 'Reports', href: '#' },
]

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
