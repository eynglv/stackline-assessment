import { Box } from "@mui/material"

import StacklineLogo from './StacklineLogo'
import Logo from './stackline_logo.svg';

const Header = (): JSX.Element => (
    <Box sx={{ backgroundColor: 'primary.main', width: "100%", height: '80px' }}>
        <StacklineLogo fontSize="large" style={{ fill: 'white' }} sx={{ ml: 2, mt: 2.5 }} />
    </Box>
);

export default Header;