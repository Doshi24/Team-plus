import { useSelector } from 'react-redux';

export default function TasksPage() {
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <div>
      <h1>Tasks</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Assigned To</th><th>Status</th><th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
