import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { useTheme } from "../contexts/useTheme";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
    const { darkMode } = useTheme();

    return (
        <div className="admin-container" data-theme={darkMode ? 'dark' : 'light'}>
            <Sidebar />

            <div className="main-wrapper">
                <Header />

                <main className="page-content">
                    <div className="content-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainLayout;