import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/newsDetailPage";
import { NewsProvider } from "./components/Article_ContextAPI/NewsContext";

function App() {
  return (
    <div className="App">
      <NewsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailArticle/:id" element={<DetailPage />} />
        </Routes>
      </NewsProvider>
    </div>
  );
}

export default App;
