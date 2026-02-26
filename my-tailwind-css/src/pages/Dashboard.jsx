import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatusCard from "../components/StatusCard";
import PatientTable from "../components/PatientTable";

export default function Dashboard({ setCurrentPage, patients }){
    const totalPatients = patients.length;
    const admittedPatients = patients.filter(p => p.status === "Admitted").length;
    const treatmentPatients = patients.filter(p => p.status === "Treatment").length;
    const recoveredPatients = patients.filter(p => p.status === "Recovered").length;

    return(
        <div className="flex">
            <Sidebar setCurrentPage={setCurrentPage}/>
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
                <Navbar/>

                <div className="p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <StatusCard 
                            title="Total Patients" 
                            value={totalPatients} 
                            icon="👥" 
                            color="bg-blue-500"
                            trend="+12%"
                        />
                        <StatusCard 
                            title="Admitted" 
                            value={admittedPatients} 
                            icon="🏥" 
                            color="bg-green-500"
                            trend="+5%"
                        />
                        <StatusCard 
                            title="Treatment" 
                            value={treatmentPatients} 
                            icon="💉" 
                            color="bg-purple-500"
                            trend="+18%"
                        />
                        <StatusCard 
                            title="Recovered" 
                            value={recoveredPatients} 
                            icon="✨"
                            color="bg-yellow-500"
                            trend="+8%"
                        />
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Recent Patients</h2>
                            <button 
                                onClick={() => setCurrentPage("patients")}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                View All →
                            </button>
                        </div>
                        <PatientTable patients={patients} />
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
                            <h3 className="font-bold text-lg">Add New Patient</h3>
                            <p className="text-blue-100 text-sm mt-1">Register a new patient</p>
                            <button 
                                onClick={() => setCurrentPage("patients")}
                                className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50"
                            >
                                Click Here
                            </button>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
                            <h3 className="font-bold text-lg">View Doctors</h3>
                            <p className="text-green-100 text-sm mt-1">Manage doctor schedules</p>
                            <button className="mt-3 bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50">
                                Click Here
                            </button>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
                            <h3 className="font-bold text-lg">Appointments</h3>
                            <p className="text-purple-100 text-sm mt-1">View all appointments</p>
                            <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50">
                                Click Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
