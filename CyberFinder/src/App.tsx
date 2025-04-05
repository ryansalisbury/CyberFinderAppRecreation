import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/About/AboutPage";
import MapPage from "./Pages/Map/MapPage";
import HomePage from "./Pages/Home/HomePage";
import QuestionnairePage from "./Pages/Questionnaire/QuestionnairePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./Pages/Login/LoginPage";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/see-map" element={<MapPage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
