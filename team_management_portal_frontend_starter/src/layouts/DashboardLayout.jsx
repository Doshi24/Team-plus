import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Team Tracker</h2>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">Task Management Portal</header>
        <Outlet />
      </main>
    </div>
  );
}
