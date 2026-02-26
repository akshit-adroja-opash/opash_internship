export default function Sidebar({ setCurrentPage }){
    const menuItems = [
        { name: "Dashboard", page: "dashboard", icon: "📊" },
        { name: "Patients", page: "patients", icon: "👥" },
        { name: "Doctors", page: "doctors", icon: "👨‍⚕️" },
        { name: "Appointments", page: "appointments", icon: "📅" },
        { name: "Billing", page: "billing", icon: "💰" },
    ];

    return(
        <div className="w-64 h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white p-5 shadow-xl">
        <h1 className="text-2xl font-bold flex justify-center items-center mb-8 gap-2">
            <span className="text-3xl">🏥</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                Hospital
            </span>
        </h1>

        <nav className="space-y-2">
            {menuItems.map((item) => (
                <li 
                    key={item.page}
                    onClick={() => setCurrentPage(item.page)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-105 hover:shadow-lg list-none"
                >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                </li>
            ))}
        </nav>

        <div className="absolute bottom-5 left-0 w-64 px-5">
            <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-sm text-blue-200">Hospital Management</p>
                <p className="text-xs text-blue-300 mt-1">v1.0.0</p>
            </div>
        </div>
        </div>
    );
}
