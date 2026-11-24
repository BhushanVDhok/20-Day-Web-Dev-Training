import './Header.css'

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-logo">🗂</span>
        <div>
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}

export default Header
