import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CounterProvider } from "./context/CounterContext";
import Navbar from "./components/Navbar";
import CounterBox from "./components/CounterBox";

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Navbar />
        <CounterBox />
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
