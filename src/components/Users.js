import {  Outlet,NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error('Error fetching user data:', error))  // Hata yakalama

      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to={`/Users/${user.id}`}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />  {/* İç içe nested yapıları için güncel sürümlerde kullanılır. */} 

    </div>
  );
}

export default Users;
