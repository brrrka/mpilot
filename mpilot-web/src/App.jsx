import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import KapalPage from "./pages/KapalPage";
import DashboardPage from "./pages/DashboardPage";
import KapalFormPage from "./pages/form/KapalFormPage";
import MHPKPPage from "./pages/MHPKPKPage";
import MHPKPFormPage from "./pages/form/MHPKPKFormPage";
import UserManagementPage from "./pages/UserManagementPage";
import UserFormPage from "./pages/form/UserFormPage";
import PanduFormPage from "./pages/form/PanduFormPage";
import MRPKROPage from "./pages/MRPKROPage";
import MRPKROFormPage from "./pages/form/MRPKROFormPage";
import MSPKPPage from "./pages/MSPKPPage";
import MSPKPFormPage from "./pages/form/MSPKPFormPage";

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

          <Route path="/mrpkro" element={<MRPKROPage />} />
          <Route path="/mrpkro/form" element={<MRPKROFormPage />} />

          <Route path="/mspkp" element={<MSPKPPage />} />
          <Route path="/mspkp/form" element={<MSPKPFormPage />} />

          <Route path="/mhpkp" element={<MHPKPPage />} />
          <Route path="/mhpkp/form" element={<MHPKPFormPage />} />

          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/user-management/user-form" element={<UserFormPage />} />
          <Route path="/user-management/pandu-form" element={<PanduFormPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
