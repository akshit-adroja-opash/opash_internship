import { useEffect, useState } from "react";


type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="user-list">
      
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div><strong>ID:</strong> {user.id}</div>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Username:</strong> {user.username}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
