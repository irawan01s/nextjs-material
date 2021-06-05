import { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Switch from '@material-ui/core/Switch'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {
  grey,
  indigo,
  deepOrange
} from '@material-ui/core/colors'
import NavMenu from '../navigation/NavMenu'
import Link from '../Link'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  toolbar: { paddingRight: 24 },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: { marginRight: 36 },
  menuButtonHidden: { display: 'none' },
  title: { flexGrow: 1 },
  titleText: {
    color: grey[50],
    textDecoration: 'none'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: { width: theme.spacing(9) }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: { height: 240 }
}))

export default function Dashboard({ children }) {
  const [open, setOpen] = useState(false)
  const [darkState, setDarkState] = useState(false)
  const palletType = darkState ? 'dark' : 'light'
  const mainPrimaryColor = darkState ? grey[600] : indigo[600]
  const mainSecondaryColor = darkState ? indigo[300] : deepOrange[600]

  const appBarColor = darkState ? 'default' : 'primary'
  const customTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor }
    }
  })

  const classes = useStyles()
  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          color={appBarColor}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className={classes.title}>
              <Typography
                component="h1"
                variant="h6"
                noWrap
                className={classes.titleText}
              >
                {/* <Link href="/"> */}
                Dashboard
                {/* </Link> */}
              </Typography>
            </Link>
            <Switch checked={darkState} onChange={handleThemeChange} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <NavMenu />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
