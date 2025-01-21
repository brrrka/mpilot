import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import KapalPage from "./pages/KapalPage";
import DashboardPage from "./pages/DashboardPage";
import KapalFormPage from "./pages/form/KapalFormPage";
import MHPKPPage from "./pages/mHPKPKPage";
import MHPKPFormPage from "./pages/form/MHPKPKFormPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/kapal" element={<KapalPage />} />
          <Route path="/kapal/form" element={<KapalFormPage />} />
          <Route path="/mhpkp" element={<MHPKPPage />} />
          <Route path="/mhpkp/form" element={<MHPKPFormPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
