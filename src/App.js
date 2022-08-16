import './index.scss';
import NavBar from "./components/NavBar.js"
import MainPage from "./components/MainPage.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />


      </Routes>
    </Router>
  );
}

export default App;