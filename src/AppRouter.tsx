import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { CompanyInfoPage } from "./pages/CompanyInfoPage";
import { LanguageProvider } from "./context/LanguageContext";
export function AppRouter() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<CompanyInfoPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
