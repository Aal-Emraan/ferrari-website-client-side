import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import logo from '../../img/logo.png'

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const userOptions = [
      {name: "Pay", icon: <PaymentsIcon/>, to: `${url}/pay`},
      {name: "My Orders", icon: <AddShoppingCartIcon/>, to: `${url}/myorders`},
      {name: "Review", icon: <ReviewsIcon/>, to: `${url}/review`},
      {name: "Logout", icon: <ExitToAppIcon/>, to: `${url}`}
  ]

  const adminOptions = [
      {name: 'Manage All Orders', icon: <SettingsIcon/>, to: `${url}/manageallorders`},
      {name: 'Add a Product', icon: <AddShoppingCartIcon/>, to: `${url}/addproduct` },
      {name: 'Make Admin', icon: <ManageAccountsIcon/>, to: `${url}/makeadmin`},
      {name: 'Manage Products', icon: <SettingsApplicationsIcon/>, to: `${url}/manageproducts`},
      {name: 'Log Out', icon: <ExitToAppIcon/>, to: `${url}`},
  ]

//   ['Pay', 'My Orders', 'Review', 'Log Out']

  const drawer = (
    <div>
      <Toolbar style={{background: '#AD0C0C'}}>
          <Box style={{display: 'flex', alignItems: 'center', color: 'white'}}>
              <img src={logo} alt="logo" style={{width: '30%'}} />
              <Typography variant="h4">Ferrari</Typography>
          </Box>
      </Toolbar>
      <Divider />
            <Link to="/" style={{display: 'flex', alignItems: 'center',margin: '0 15px', color: '#AD0C0C', textDecoration: 'none'}}>
                    <HomeIcon/>
                    <Typography variant="h6" sx={{ml:4}}>Home</Typography>
            </Link>
      <List>
 
        {userOptions.map((text, index) => (
            <Link to={text.to}>
                <ListItem button key={text}>
                    <ListItemIcon>
                    {text.icon}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                </ListItem>
            </Link>
        ))}
      </List>
      <Divider />
      <List>
        {adminOptions.map((text, index) => (
            <Link to={text.to}>
                <ListItem button key={index}>
                    <ListItemIcon>
                    {text.icon}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={`${path}/pay`}>
            <Pay></Pay>
        </Route>
        <Route path={`${path}/myorders`}>
            <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
            <AddReview></AddReview>
        </Route>
        <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
