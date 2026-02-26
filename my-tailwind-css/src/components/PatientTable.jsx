export default function PatientTable({ patients }) {
  const recentPatients = patients.slice(0, 3);

  const getStatusColor = (status) => {
    switch(status) {
      case "Admitted": return "bg-blue-100 text-blue-700";
      case "Recovered": return "bg-green-100 text-green-700";
      case "Treatment": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-5">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Disease</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {recentPatients.map((p) => (
            <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                    {p.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">{p.name}</span>
                </div>
              </td>
              <td className="py-4 text-gray-600">{p.disease}</td>
              <td className="py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(p.status)}`}>
                  {p.status}
                </span>
              </td>
              <td className="py-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {recentPatients.length === 0 && (
        <p className="text-center text-gray-500 py-4">No patients found</p>
      )}
    </div>
  );
}
