import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/userSlice';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const user = useSelector(selectUser);
  console.log("User:",user);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  const navigate = useNavigate();  
  console.log({username});
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handlejobClick = () => {
    navigate('/Manage');
    toggleDrawer(false);
  };
  const handleSearchjobClick = () => {
    navigate('/Search');
    toggleDrawer(false);
  };
  const handleResumejobClick = () => {
    navigate('/Resume');
    toggleDrawer(false);
  };
  const handleProfilejobClick = () => {
    navigate('/Profile');
    toggleDrawer(false);
  };
  const handleAdminjobClick = () => {
    navigate('/AdminLogin');
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console' }}>
            JOB SYMPHONY
          </Typography>
          
          <Button color="inherit" href="/Home" >Home</Button>
          <Button color="inherit" href="/Description" >About</Button>
          <Button color="inherit"href="/Contact" >Contact US</Button>
          <Button color="inherit"href="/">Login</Button>
          <Button color="inherit"a href="/SignUp">SignUp</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Hello Again!<br/>{username}.
          </center>
         
            <ListItem button onClick={handleSearchjobClick}>
              <ListItemText primary=" Search jobs" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Manage jobs" />
            </ListItem>

            <ListItem button onClick={handleResumejobClick}>
              <ListItemText primary="Resume Kit" />
            </ListItem>
            <ListItem button onClick={handleProfilejobClick}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={handleAdminjobClick}>
              <ListItemText primary="Admin Login" />
            </ListItem>

          </List>
        </div>
      </Drawer>
    </Box>
  );
}
