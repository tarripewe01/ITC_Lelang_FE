/* eslint-disable no-unused-vars */
// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItem.items.map((item, idx) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={idx} item={item} />;
            default:
                return (
                    <Typography key={idx} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
