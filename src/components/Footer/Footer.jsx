import './Footer.css';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
    return ( 
          <Box component="footer" sx={{ p: 2, border: '1px dashed grey', background: 'blue'}}>
            <Container>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="p" component="p" sx={{ color: 'white'}}>
                       Copyright by Nuriyya
                    </Typography>
                </Box>
            </Container>
        </Box>
     );
}

export default Footer;