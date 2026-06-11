import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WeatherRisk from "./pages/WeatherRisk";
import WeatherAssistant from "./pages/WeatherAssistant";
import About from "./pages/About";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather-risk" element={<WeatherRisk />} />
        <Route path="/weather-assistant"element={<WeatherAssistant />}/>
        <Route path="/about"element={<About />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;