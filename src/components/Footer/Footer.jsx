import './Footer.css';
import { Box, Container, Typography } from '@mui/material';
import { useSelector} from 'react-redux';

function Footer() {
    const count = useSelector((state) => state.counter.value);
    return ( 
          <Box component="footer" sx={{ p: 2, border: '1px dashed grey', background: 'blue'}}>
            <Container>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="p" component="p" sx={{ color: 'white'}}>
                       Copyright by Nuriyya {count}
                    </Typography>
                </Box>
            </Container>
        </Box>
     );
}

export default Footer;