import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../assets/img/logo.png'
import '../styles/Login.css'
import { Link } from 'react-router-dom';



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
    marginTop: 60
  },

}));

export default function MenuPaciente(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logout = () => {
    console.log("cerrar")
    console.log(props.history)
    localStorage.clear()
    props.history.push('/')
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{ marginTop: "-50px" }}>
        <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL"></img>
      </div>
      <Divider />
      <List>
        <ListItem className={"link"} component={Link} to={"/inicioPaciente"} style={{backgroundColor:props.activo===1?"#C9D468":""}}>
          <ListItemIcon>
            <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary={"Inicio"} />
        </ListItem>
        
        <ListItem className={"link"} component={Link} to={"/antecedente"} style={{backgroundColor:props.activo===4?"#C9D468":""}}>
          <ListItemIcon>
            <LocalHospitalIcon></LocalHospitalIcon>
          </ListItemIcon>
          <ListItemText primary={"Antecedente clinico"} />
  </ListItem>
  <ListItem className={"link"} component={Link} to={"/registrarCuestionario"} style={{backgroundColor:props.activo===5?"#C9D468":""}}>
          <ListItemIcon>
            <FavoriteIcon></FavoriteIcon>
          </ListItemIcon>
          <ListItemText primary={"Cuestionario sobre dolor"} />
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
      <CssBaseline />{/**#6B4C35 #C9D468*/}
      <AppBar style={{ backgroundColor: "#6B4C35" }} position="fixed" className={classes.appBar}>
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
        </div>
      </main>

    </div>
  );
}