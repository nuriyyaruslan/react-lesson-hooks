import { Link } from 'react-router-dom';
import './Navbar.css';
import { List,ListItem } from '@mui/material';


function Navbar() {
    return ( 
        <List className="navbar">
            <ListItem> 
                <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
                <Link to="/about">About Us</Link>
            </ListItem>
            <ListItem>
                <Link to="/posts">Posts</Link>
            </ListItem>
            <ListItem>
                <Link to="/counter">Counter</Link>
            </ListItem>
            <ListItem>
                <Link to="/contact">Contact</Link>
            </ListItem>
        </List>
     );
}

export default Navbar;