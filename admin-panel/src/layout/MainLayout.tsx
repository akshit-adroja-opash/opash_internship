
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import "./MainLayout.css";


const MainLayout: React.FC = () => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="content">
                <Header />
                
                <main>
                    <Outlet />
                </main>
            </div> 
        </div>
    );
}

export default MainLayout;