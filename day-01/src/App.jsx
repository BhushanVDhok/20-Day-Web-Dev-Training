import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import SummaryCard from './components/SummaryCard.jsx'
import './App.css'

const cards = [
  { title: 'Total Employees', value: '124', note: 'across all departments' },
  { title: 'Open Positions', value: '8', note: 'currently hiring' },
  { title: 'Leaves Today', value: '3', note: 'approved absences' },
  { title: 'New Joiners', value: '2', note: 'this week' },
]

function App() {
  return (
    <div className="layout">
      <Header title="Intern Training Dashboard" subtitle="Day 01 – React Foundations" />
      <Nav />
      <main className="main">
        <h2 className="section-title">Overview</h2>
        <div className="card-grid">
          {cards.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              value={card.value}
              note={card.note}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
