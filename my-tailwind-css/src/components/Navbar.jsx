export default function Navbar(){
    return(
        <div className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
        </div>
        
        <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition">
                🔔
            </button>
            <button className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition">
                ⚙️
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">Admin User</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    alt="Profile"
                />
            </div>
        </div>
    </div>
  );
}
