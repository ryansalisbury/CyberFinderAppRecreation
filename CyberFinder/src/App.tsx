import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/About/AboutPage";
import MapPage from "./Pages/Map/MapPage";
import HomePage from "./Pages/Home/HomePage";
import QuestionnairePage from "./Pages/Questionnaire/QuestionnairePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/see-map" element={<MapPage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
