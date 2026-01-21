import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

function App() {

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    hobby: ""
  });

  /* ================= FETCH USERS (READ) ================= */
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/items");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ================= CREATE / UPDATE ================= */
  const addItem = async () => {
    try {
      if (editId) {
        // UPDATE
        await axios.put(`http://localhost:5000/items/${editId}`, form);
        setEditId(null);
      } else {
        // CREATE
        await axios.post("http://localhost:5000/items", form);
      }

      fetchUsers();

      setForm({
        first: "",
        last: "",
        email: "",
        phone: "",
        location: "",
        hobby: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= DELETE ================= */
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= EDIT ================= */
  const editItem = (user) => {
    setForm({
      first: user.first,
      last: user.last,
      email: user.email,
      phone: user.phone,
      location: user.location,
      hobby: user.hobby
    });
    setEditId(user._id || user.id);
  };

  return (
    <div className="container">

      <h2>CRUD Database</h2>

      {/* ===== CREATE / UPDATE FORM ===== */}
      <h3>{editId ? "Edit User" : "Add New User"}</h3>

      <input name="first" placeholder="First" value={form.first} onChange={handleChange} />
      <input name="last" placeholder="Last" value={form.last} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
      <input name="hobby" placeholder="Hobby" value={form.hobby} onChange={handleChange} />

      <br /><br />

      <button className="add-btn" onClick={addItem}>
        {editId ? "Update Item" : "Add Item"}
      </button>

      <br /><br />

      {/* ===== USERS TABLE ===== */}
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id || index}>
              <td>{index + 1}</td>
              <td>{user.first}</td>
              <td>{user.last}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location}</td>
              <td>{user.hobby}</td>
              <td>
                <button className="edit-btn" onClick={() => editItem(user)}>Edit</button>
                <button className="del-btn" onClick={() => deleteItem(user._id)}>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
