// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return <img src={logo} alt="Berry" width="70" />;
};

export default Logo;
