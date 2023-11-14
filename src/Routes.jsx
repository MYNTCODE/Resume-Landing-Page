import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Education from "./pages/Education";
import NotFoundPage from "./pages/404";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<Education />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default Router;
