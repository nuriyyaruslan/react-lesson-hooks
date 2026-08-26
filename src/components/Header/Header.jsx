import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
    return ( 
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <h2>Header</h2>
                    <Navbar/>
                </div>
            </div>
        </header>
     );
}

export default Header;