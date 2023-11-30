import "./App.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course" element={<CourseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
