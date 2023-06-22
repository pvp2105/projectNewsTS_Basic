import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/newsDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailArticle/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
