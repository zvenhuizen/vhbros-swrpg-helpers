import Logo from './Logo.js';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Status, Items, Talents, Gear, Info } from '../pages/SidebarPages'

const Header = (props) => {

    return (
        <header className="header">
            <Logo />
            <Router>
                <Sidebar />
                <Routes>
                    <Route path='/' exact component={Home} />
                    <Route path='/status' exact component={Status} />
                    <Route path='/items' exact component={Items} />
                    <Route path='/talents' exact component={Talents} />
                    <Route path='/gear' exact component={Gear} />
                    <Route path='/info' exact component={Info} />
                </Routes>
            </Router>
        </header>
    )
}

export default Header;