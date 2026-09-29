import { useState } from 'react';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random().toString(), name, age },
    ]);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <div className="card">
        <h3>User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
