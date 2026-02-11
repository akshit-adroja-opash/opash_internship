import { BrowserRouter , Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Settings from "./pages/settings";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import "./App.css";
import  Product  from "./pages/Product";


const App: React.FC = () => {
  return(
    <ThemeProvider>
      <UserProvider>
        <ProductProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="Product" element={<Product />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
   );
}

export default App;   
  