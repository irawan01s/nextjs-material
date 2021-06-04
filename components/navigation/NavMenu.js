import List from '@material-ui/core/List'
import {
  AccountBalance as AccountBalanceIcon,
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
    name: 'Bank',
    icon: <AccountBalanceIcon color="secondary" />,
    path: '/bank'
  }
]

const NavMenu = () => (
  <List component="nav">
    <NavItem menus={menus} />
  </List>
)

export default NavMenu
