import type { FC } from "react";
import { useState } from "react";
import { FaTrash, FaEdit, FaPlus, FaCheck } from "react-icons/fa";
import { useUsers } from "../contexts/useUsers";

const Users: FC = () => {
  const { users, addUser, deleteUser, updateUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddUser = () => {
    if (!name || !email) {
      setEmailError("Please enter both name and email");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    const newUser = { id: Date.now(), name, email };
    addUser(newUser);
    setName("");
    setEmail("");
    setEmailError("");
  };

  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const handleUpdate = () => {
    if (editId === null) return;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    updateUser(editId, { id: editId, name, email });
    setEditId(null);
    setName("");
    setEmail("");
  };

  const handleEdit = (user: { id: number; name: string; email: string }) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleCancel = () => {
    setEditId(null);
    setName("");
    setEmail("");
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>👥 Users Management</h1>
        <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
          Manage all users in the system
        </p>
      </div>

      <div className="form-container" style={{ maxWidth: "100%", marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1.5rem", marginTop: 0 }}>
          {editId ? "Edit User" : "Add New User"}
        </h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter user name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ margin: 0, flex: 1 }}
          />
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            style={{ margin: 0, flex: 1 }}
          />
          {emailError && <p style={{ color: "red", fontSize: "0.875rem", margin: "0.5rem 0" }}>{emailError}</p>}
          {editId ? (
            <>
              <button
                onClick={handleUpdate}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  margin: 0,
                  backgroundColor: "#10b981",
                }}
              >
                <FaCheck /> Update
              </button>
              <button
                onClick={handleCancel}
                style={{ margin: 0, backgroundColor: "#6b7280" }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddUser}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                margin: 0,
              }}
            >
              <FaPlus /> Add User
            </button>
          )}
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: "1rem", marginTop: 0 }}>
          All Users ({users.length})
        </h2>
        {users.length > 0 ? (
          <ul className="users-list">
            {users.map((user) => (
              <li
                key={user.id}
                style={{
                  opacity: editId === user.id ? 0.7 : 1,
                  border: editId === user.id ? "2px solid #3b82f6" : "1px solid #e5e7eb",
                }}
              >
                <div className="user-info">
                  <strong>{user.name}</strong>
                  <em>{user.email}</em>
                </div>
                <div className="user-actions">
                  <button
                    onClick={() => handleEdit(user)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#3b82f6",
                    }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="danger"
                    onClick={() => handleDelete(user.id)}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              background: "white",
              borderRadius: "12px",
              color: "#6b7280",
            }}
          >
            <p style={{ fontSize: "1.125rem" }}>No users yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
