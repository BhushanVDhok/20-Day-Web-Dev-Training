import './SummaryCard.css'

function SummaryCard({ title, value, note }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
      {note && <p className="card-note">{note}</p>}
    </div>
  )
}

export default SummaryCard
