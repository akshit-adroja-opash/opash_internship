import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatusCard from "../components/StatusCard";

export default function Patients({ setCurrentPage, patients, onAddPatient, onDeletePatient }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: "", age: "", disease: "", phone: "" });

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = (e) => {
    e.preventDefault();
    onAddPatient(newPatient);
    setNewPatient({ name: "", age: "", disease: "", phone: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    onDeletePatient(id);
  };

  return (
    <div className="flex">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <StatusCard title="Total Patients" value={patients.length} />
            <StatusCard title="Admitted" value={patients.filter(p => p.status === "Admitted").length} />
            <StatusCard title="Treatment" value={patients.filter(p => p.status === "Treatment").length} />
            <StatusCard title="Recovered" value={patients.filter(p => p.status === "Recovered").length} />
          </div>

          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded-lg w-64"
            />
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {showForm ? "Cancel" : "+ Add Patient"}
            </button>
          </div>

          {showForm && (
            <div className="bg-white p-5 rounded-xl shadow mb-6">
              <h3 className="text-lg font-bold mb-4">Add New Patient</h3>
              <form onSubmit={handleAddPatient} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={newPatient.age}
                  onChange={(e) => setNewPatient({...newPatient, age: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Disease"
                  value={newPatient.disease}
                  onChange={(e) => setNewPatient({...newPatient, disease: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={newPatient.phone}
                  onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 col-span-4">
                  Submit
                </button>
              </form>
            </div>
          )}

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">All Patients</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b bg-gray-50">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Disease</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Admitted</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{p.id}</td>
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3">{p.age}</td>
                    <td className="p-3">{p.disease}</td>
                    <td className="p-3">{p.phone}</td>
                    <td className="p-3">{p.admitted}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm ${
                        p.status === "Admitted" ? "bg-blue-100 text-blue-700" :
                        p.status === "Treatment" ? "bg-yellow-100 text-yellow-700" :
                        p.status === "Recovered" ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button 
                        onClick={() => handleDelete(p.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPatients.length === 0 && (
              <p className="text-center text-gray-500 py-4">No patients found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
