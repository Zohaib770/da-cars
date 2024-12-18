import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import './Admin.css';

const AdminLayout: React.FC = () => {
  return (
    <div className="adminlayout-container">
      <div className="adminlayout-navbar">
        <AdminNavbar />
      </div>
      <div className="adminlayout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
