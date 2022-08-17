import './scss/index.scss';
import NavBar from "./components/NavBar.js"
import MainPage from "./components/MainPage.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
// import {Switch} from "react-switch"
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const App = () => {

    // const location = useLocation()

    return (
        <Router>
            <NavBar/>
            <MobileNavbar/>

            <TransitionGroup>
                <CSSTransition
                    timeout={250}
                    classNames="fade"
                    // key={location.key}
                >
                    <Switch>
                        <Route exact path="/"><MainPage/></Route>
                        <Route exact path="/About"><About/></Route>
                        <Route exact path="/Projects"><Projects/></Route>
                        <Route exact path="/Contact"><Contact/></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        </Router>
    );
}

export default App;