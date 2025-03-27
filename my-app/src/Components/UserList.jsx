import React, { useEffect, useState } from 'react';
import api from '../api'
import Home from './Home'

const UserList = () => {
  const [users, setUsers] = useState([]);
  //    const navigate=useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('user/allusers')
        console.log(res);

        setUsers(res.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser()
  }, [])
  const deleteUser = async (id) => {
    try {
      await api.delete(`user/delete/${id}`);
      const res = await api.get('user/allusers');
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Home />
      <div className="container mt-5">
        <h2>Users</h2>

        <table className="table  mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;