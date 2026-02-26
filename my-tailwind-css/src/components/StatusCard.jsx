export default function StatusCard({title, value, icon, color, trend}){
    return(
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>
                {trend && (
                    <span className="text-green-500 text-sm font-medium">{trend} ↑</span>
                )}
            </div>
            {icon && (
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                    {icon}
                </div>
            )}
        </div>
    </div>
    );
}
