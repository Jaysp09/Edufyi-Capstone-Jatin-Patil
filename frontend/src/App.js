import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import ContactManager from "@/pages/ContactManager";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/contact-manager" element={<ContactManager />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
