import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <header className="bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1 className="h4 mb-0">CRUD</h1>
        </div>
        <nav className="d-flex gap-3">
          <a href="/home2" className="text-decoration-none text-dark">Home</a>
          <a href="/userlist" className="text-decoration-none text-dark">User List</a>
          <a href="/itemlist" className="text-decoration-none text-dark">Add Item</a>
          <a href="/itemform" className="text-decoration-none text-dark">View Items</a>
        </nav>
        <nav>
          <button onClick={handleLogout} className="btn btn-info">Logout</button>
        </nav>
      </header>
    </div>

  );
};

export default Header;