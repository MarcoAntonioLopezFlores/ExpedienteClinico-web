import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/img/logo.png'
import '../../styles/Login.css'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChangePassAdmin from './ChangePassAdmin';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:60
  },
  
}));

export default function Menu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [stateModalChangePass, setStateModalChangePass] = React.useState(false);
   
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const logout = ()=>{
    console.log("cerrar")
    console.log(props.history)
    localStorage.clear()
    props.history.push('/')
  }
  const tooglePass = () => {
    setStateModalChangePass(!stateModalChangePass)
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{marginTop:"-50px"}}>
         <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL"></img> 
      </div>
      <Divider />
      <List>
      <ListItem className={"link"} component={Link} to={"/inicioAdmin"} style={{backgroundColor:props.activo===1?"#C9D468":""}}>
          <ListItemIcon>
            <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary={"Inicio"} />
        </ListItem>
          
          <ListItem className={"link"} component={Link} to={"/verPacientes"} style={{backgroundColor:props.activo===2?"#C9D468":""}}>    
            <ListItemIcon>
                <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>
            <ListItemText primary={"Ver Pacientes"} />
          </ListItem>


          <ListItem className={"link"} onClick={tooglePass}>    
            <ListItemIcon>
                <VpnKeyIcon></VpnKeyIcon>
            </ListItemIcon>
            <ListItemText primary={"Cambiar Contraseña"} />
          </ListItem> 
          

          <ListItem className={"link"} onClick={logout}>    
            <ListItemIcon>
                <ExitToAppIcon></ExitToAppIcon>
            </ListItemIcon>
            <ListItemText primary={"Cerrar Sesión"} />
          </ListItem>   
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor:"#6B4C35"}} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            BALANCENEURAL
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {props.children}
          {
                    stateModalChangePass &&
                    <ChangePassAdmin
                        title={"CAMBIO DE CONTRASEÑA"}
                        toogle={tooglePass}
                        stateModal={stateModalChangePass}

                    />
          }
        </div>
      </main>
      
      </div>
  );
}
