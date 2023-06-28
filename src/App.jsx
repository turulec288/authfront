import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";  // <== IMPORT
import LoginPage from "./pages/LoginPage";  // <== IMPORT
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route exact path="/projects/edit/:projectId" element={<EditProjectPage />} />   
            {/*    ADD    */}
            <Route path="/signup" element={ <SignupPage /> } />   
                  {/*    ADD    */}
        <Route path="/login" element={ <LoginPage /> } />     
      </Routes>
    </div>
  );
}

export default App;
