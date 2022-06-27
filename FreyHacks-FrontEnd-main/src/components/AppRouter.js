import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Meeting from "../pages/Meeting";
import Sample from "../pages/Sample";
import Select from "../pages/Select";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/select" element={<Select />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}
