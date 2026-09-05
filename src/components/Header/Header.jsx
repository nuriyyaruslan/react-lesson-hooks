import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Box, Container, Typography } from '@mui/material';
import { useSelector} from 'react-redux';

function Header() {

    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.counter.user);

    return (
        <Box component="header" sx={{ p: 2, border: '1px dashed grey', background: 'blue'}}>
            <Container>
                <Box className="header-content">
                    <Typography variant="h4" component="h4" sx={{ color: 'white'}}>
                        Logo {count} {user}
                    </Typography>
                    <Navbar />
                </Box>
            </Container>
        </Box>
    );
}

export default Header;