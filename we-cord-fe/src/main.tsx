import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Calender from "./pages/Calender.tsx";
import "./index.css";
import "./i18n"; // i18next 설정 파일을 import 합니다.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
