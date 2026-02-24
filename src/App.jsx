import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import StudentDashboard from "./components/StudentDashboard";
import AdminJobs from "./components/AdminJobs";

import AuthProvider, { useAuth } from "./context/AuthContext";


// ✅ PRIVATE ROUTE HERE
function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
}


// ✅ ROUTES
function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔒 Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* 🔒 Student page */}
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <StudentDashboard />
            </PrivateRoute>
          }
        />

        {/* 🔒 Admin page */}
        <Route
          path="/admin/jobs"
          element={
            <PrivateRoute>
              <AdminJobs />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}


// ✅ APP WRAPPER
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
