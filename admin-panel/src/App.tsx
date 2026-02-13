import { BrowserRouter , Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Settings from "./pages/settings";
import { AppProvider } from "./contexts/AppContext";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import  Product  from "./pages/Product";
import Login from "./pages/login";


const App: React.FC = () => {
  return(
    <AuthProvider>
      <AppProvider>
        <ThemeProvider>
          <UserProvider>
            <ProductProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="Product" element={<Product />} />
                    <Route index element={<Dashboard />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </ProductProvider>
          </UserProvider>
        </ThemeProvider>
      </AppProvider>
    </AuthProvider>

   );
}

export default App;   
  