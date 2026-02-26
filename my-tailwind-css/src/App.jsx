import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  
  const initialPatients = [
    { id: 1, name: "Rahul", age: 32, disease: "Fever", phone: "9876543210", admitted: "2024-01-15", status: "Admitted" },
    { id: 2, name: "Priya", age: 28, disease: "Covid", phone: "9876543211", admitted: "2024-01-14", status: "Recovered" },
    { id: 3, name: "Amit", age: 45, disease: "Injury", phone: "9876543212", admitted: "2024-01-13", status: "Treatment" },
    { id: 4, name: "Sneha", age: 25, disease: "Flu", phone: "9876543213", admitted: "2024-01-12", status: "Admitted" },
    { id: 5, name: "Raj", age: 50, disease: "Diabetes", phone: "9876543214", admitted: "2024-01-11", status: "Discharged" },
  ];

  // Use localStorage to persist patient data
  const [patients, setPatients] = useLocalStorage("patients", initialPatients);

  // Handler to add a new patient
  const handleAddPatient = (patient) => {
    const newPatient = {
      ...patient,
      id: patients.length + 1,
      admitted: new Date().toISOString().split('T')[0],
      status: "Admitted"
    };
    setPatients([...patients, newPatient]);
  };

  // Handler to delete a patient
  const handleDeletePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    <>
      {currentPage === "dashboard" && (
        <Dashboard 
          setCurrentPage={setCurrentPage} 
          patients={patients}
        />
      )}
      {currentPage === "patients" && (
        <Patients 
          setCurrentPage={setCurrentPage} 
          patients={patients}
          onAddPatient={handleAddPatient}
          onDeletePatient={handleDeletePatient}
        />
      )}
    </>
  );
}

export default App;
