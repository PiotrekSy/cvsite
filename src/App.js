import './scss/index.scss';
import NavBar from "./components/NavBar.js"
import MainPage from "./components/MainPage.js"
import About from "./components/About.js"
import Portfolio from "./components/Portfolio.js"
import Contact from "./components/Contact.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
    return (
        <Router>
            <NavBar/>
            <MobileNavbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;