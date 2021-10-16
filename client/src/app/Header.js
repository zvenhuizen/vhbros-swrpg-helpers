import Logo from './Logo.js';
import Navbar from './Navbar.js';

const Header = (props) => {

    return (
        <header className="header" style={props.style} onClick={props.headerClick}>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header;