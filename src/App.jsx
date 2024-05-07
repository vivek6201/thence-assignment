import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetProjects from "./pages/GetProjectsPage";
import SuccessPage from "./pages/SuccessPage";

function App() {

  // React router dom is used to navigate between the pages.

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<GetProjects />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
