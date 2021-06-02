import NextLink from 'next/link'
import {
  List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'
import {
  ExitToApp as ExitToAppIcon,
  List as ListIcon,
  MenuBook as MenuBookIcon,
  PeopleAlt as UserIcon
} from '@material-ui/icons'
import NavItem from './NavItem'

const menus = [
  {
    name: 'Transaction',
    icon: <MenuBookIcon color="secondary" />,
    path: '/transaction'
  },
  {
    name: 'User',
    icon: <UserIcon color="secondary" />,
    path: '/user'
  },
  {
    name: 'Menu',
    icon: <ListIcon color="secondary" />,
    path: '/menu'
  }
]

const lastIdx = menus.length + 1

const NavMenu = () => (
  <List>
    <NavItem menus={menus} />
    <NextLink href="/login" key={lastIdx} passHref>
      <ListItem button component="a">
        <ListItemIcon>
          <ExitToAppIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </NextLink>
  </List>
)

export default NavMenu
