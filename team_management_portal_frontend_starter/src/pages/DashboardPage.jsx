export default function DashboardPage() {
  const cards = ['Total Tasks', 'Pending', 'In Progress', 'Completed', 'Overdue'];
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card}>{card}</div>
        ))}
      </div>
    </div>
  );
}
