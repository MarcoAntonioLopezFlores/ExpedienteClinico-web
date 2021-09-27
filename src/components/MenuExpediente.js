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
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../assets/img/logo.png'
import '../styles/Login.css'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Collapse from '@material-ui/core/Collapse';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoodIcon from '@material-ui/icons/Mood';
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

export default function MenuExpediente(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleClick = () => {
    setOpen(!open);
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

        <ListItem className={"link"} component={Link} to={"/paciente"} style={{backgroundColor:props.activo===1?"#C9D468":""}}>
          <ListItemIcon>
            <AssignmentIndIcon></AssignmentIndIcon>
          </ListItemIcon>
          <ListItemText primary={"Información clínica"} />
        </ListItem>

        <ListItem className={"link"} component={Link} to={"/paciente/notas"} style={{backgroundColor:props.activo===2?"#C9D468":""}}>
          <ListItemIcon>
            <HelpIcon></HelpIcon>
          </ListItemIcon>
          <ListItemText primary={"Notas de Evolución"} />
        </ListItem>

        <ListItem className={"link"} component={Link} to={"/paciente/documentos"} style={{backgroundColor:props.activo===3?"#C9D468":""}}>
          <ListItemIcon>
            <DescriptionIcon></DescriptionIcon>
          </ListItemIcon>
          <ListItemText primary={"Documentos"} />
        </ListItem>

        <ListItem className={"link"} component={Link} to={"/paciente/revisiones"} style={{backgroundColor:props.activo===4?"#C9D468":""}}>
          <ListItemIcon>
            <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
          </ListItemIcon>
          <ListItemText primary={"Revisiones"} />
        </ListItem>
        <ListItem className={"link"} component={Link} to={"/paciente/odontogramas"} style={{backgroundColor:props.activo===5?"#C9D468":""}}>
          <ListItemIcon>
            <MoodIcon></MoodIcon>
          </ListItemIcon>
          <ListItemText primary={"Odontograma"} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <ListAltIcon></ListAltIcon>
          </ListItemIcon>
          <ListItemText primary="Cuestionarios" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={"link"} component={Link} to={"/paciente/cuestionarios"}>
              <ListItemIcon>
                <FavoriteIcon></FavoriteIcon>
              </ListItemIcon>
              <ListItemText primary="Dolor" />
            </ListItem>
            <ListItem className={"link"} component={Link} to={"/paciente/fisio"}>
              <ListItemIcon>
                <AccessibilityNewIcon></AccessibilityNewIcon>
              </ListItemIcon>
              <ListItemText primary="Fisioterapia" />
            </ListItem>
            <ListItem className={"link"} component={Link} to={"/paciente/acupuntura"}>
              <ListItemIcon>
                <AirlineSeatFlatIcon></AirlineSeatFlatIcon>
              </ListItemIcon>
              <ListItemText primary="Acupuntura" />
            </ListItem>
          </List>
        </Collapse>



        <ListItem className={"link"} component={Link} to={"/pacientes"}>
          <ListItemIcon>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </ListItemIcon>
          <ListItemText primary={"Volver a pacientes"} />
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