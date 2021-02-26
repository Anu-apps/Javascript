import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import nikeLogo from '../assets/images/nikeLogo.png';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { logOut } from '../helpers'
import Queries from './Queries';
import Products from './Products';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    cursor: "pointer"
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardIcon: {
    fontSize: 50,
    color: '#f73378'
  },
  colorDashBoardIcon: {
    fontSize: 50,
    color: 'red'
  },
  colorUserIcon: {
    fontSize: 50,
    color: 'blue'
  }
  ,
  colorProductsIcon: {
    fontSize: 50,
    color: 'aqua'
  }
  ,
  colorQueriesIcon: {
    fontSize: 50,
    color: '#2196f3'
  }
  ,
  colorLogoutIcon: {
    fontSize: 50,
    color: 'red'
  }

}));

function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.root} spacing={5}>

      <Grid item xs={6}>

        <Card>
          <CardContent className={classes.cardContent}>

            <DashboardIcon className={classes.cardIcon} className={classes.colorDashBoardIcon} />


            <Typography className={classes.cardTitle}>
              Dashboard
            </Typography>

          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={6}>

        <Card onClick={() => { props.history.push('/users') }}>
          <CardContent className={classes.cardContent}>

            <GroupIcon className={classes.cardIcon} className={classes.colorUserIcon} />

            <Typography className={classes.cardTitle}>
              Users
            </Typography>

          </CardContent>
        </Card>

      </Grid>

      <Grid item xs={6}>

        <Card onClick={() => { props.history.push('/products') }}>
          <CardContent className={classes.cardContent}>

            <StoreFrontIcon className={classes.cardIcon} className={classes.colorProductsIcon} />

            <Typography className={classes.cardTitle}>
              Products
            </Typography>

          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={6}>

        <Card onClick={() => { props.history.push('/queries') }}>
          <CardContent className={classes.cardContent}>

            <MessageIcon className={classes.cardIcon} className={classes.colorQueriesIcon} />

            <Typography className={classes.cardTitle}>
              Queries
</Typography>

          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={6}>

        <Card onClick={() => { logOut(props.setIsUserLoggedIn, props.history) }}>
          <CardContent className={classes.cardContent}>

            <ExitToAppIcon className={classes.cardIcon} className={classes.colorLogoutIcon} />

            <Typography className={classes.cardTitle}>
              Logout
</Typography>

          </CardContent>
        </Card>

      </Grid>

    </Grid>
  );
}

export default Dashboard