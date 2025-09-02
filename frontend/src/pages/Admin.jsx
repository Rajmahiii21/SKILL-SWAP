import React from 'react';
import './Admin.css';

function Admin() {
  const users = [
    { id: 1, name: 'Alice', role: 'User' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Admin' },
  ];

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <p>Manage users and monitor platform activity.</p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <button>Promote</button>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
