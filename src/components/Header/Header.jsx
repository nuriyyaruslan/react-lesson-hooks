import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Box, Container, Typography } from '@mui/material';

function Header() {
    return (
        <Box component="header" sx={{ p: 2, border: '1px dashed grey', background: 'blue'}}>
            <Container>
                <Box className="header-content">
                    <Typography variant="h4" component="h4" sx={{ color: 'white'}}>
                        Logo
                    </Typography>
                    <Navbar />
                </Box>
            </Container>
        </Box>
    );
}

export default Header;