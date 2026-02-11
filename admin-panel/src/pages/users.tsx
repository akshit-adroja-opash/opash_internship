import type { FC } from "react";
import { useState } from "react";
import { FiTrash2, FiEdit3, FiUserPlus, FiCheck, FiX, FiMail, FiUser } from "react-icons/fi";
import { useUsers } from "../contexts/useUsers";
import "./users.css"

const Users: FC = () => {
  const { users, addUser, deleteUser, updateUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleAction = () => {
    if (!name || !email) {
      setEmailError("Both fields are required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (editId !== null) {
      updateUser(editId, { id: editId, name, email });
      setEditId(null);
    } else {
      addUser({ id: Date.now(), name, email });
    }
    
    setName("");
    setEmail("");
    setEmailError("");
  };

  const handleEdit = (user: { id: number; name: string; email: string }) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setEmail("");
    setEmailError("");
  };

  return (
    <div className="users-view">
      <header className="view-header">
        <div>
          <h1>User Management</h1>
          <p>Total active members: {users.length}</p>
        </div>
      </header>

      <div className="users-grid-layout">
        {/* Form Section */}
        <aside className="user-form-card">
          <h3>{editId ? "Update User" : "Add New User"}</h3>
          <div className="modern-form">
            <div className="form-group">
              <label><FiUser /> Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Akshit Adroja" 
              />
            </div>
            <div className="form-group">
              <label><FiMail /> Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Akshit@example.com" 
              />
              {emailError && <span className="error-text">{emailError}</span>}
            </div>
            <div className="form-actions">
              <button className="primary-btn wide" onClick={handleAction}>
                {editId ? <><FiCheck /> Update</> : <><FiUserPlus /> Add User</>}
              </button>
              {editId && <button className="ghost-btn wide" onClick={resetForm}><FiX /> Cancel</button>}
            </div>
          </div>
        </aside>

        {/* List Section */}
        <section className="user-list-container">
          {users.length > 0 ? (
            <div className="table-responsive">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>User Detail</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className={editId === user.id ? "editing-row" : ""}>
                      <td>
                        <div className="user-profile">
                          <div className="user-avatar">{user.name.charAt(0)}</div>
                          <span className="user-name">{user.name}</span>
                        </div>
                      </td>
                      <td><span className="user-email">{user.email}</span></td>
                      <td>
                        <div className="action-row">
                          <button className="icon-btn edit" onClick={() => handleEdit(user)}><FiEdit3 /></button>
                          <button className="icon-btn delete" onClick={() => deleteUser(user.id)}><FiTrash2 /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <FiUser size={48} />
              <p>No users found in the system.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Users;