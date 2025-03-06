import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ParentDashboard from "./pages/ParentDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import AddRecord from "./pages/AddRecord";
import NotFound from "./pages/NotFound";
import ChildProfiles from "./pages/ChildProfiles";
import ChildDetail from "./pages/ChildDetail";
import MedicalRecords from "./pages/MedicalRecords";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import LandingPage from "./pages/LandingPage";
import AddChild from "./pages/Addchild";
import VerifyOTP from "./pages/VerifyOTP";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Auth Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Parent Routes */}
            <Route path="/dashboard" element={<ParentDashboard />} />
            <Route path="/children" element={<ChildProfiles />} />
            <Route path="/children/:id" element={<ChildDetail />} />
            <Route path="/add-child" element={<AddChild />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/settings" element={<Settings />} />

            {/* Hospital Routes */}
            <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
            <Route path="/add-record" element={<AddRecord />} />

            {/* Redirects */}
            {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
