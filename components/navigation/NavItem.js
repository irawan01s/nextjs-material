import { useRouter } from 'next/router'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Link from '../Link'

function NavItem({ menus }) {
  const router = useRouter()
  const tmpPath = router.asPath
  const urlPath = `/${tmpPath.split('/')[1]}`
  return (
    <>
      {menus.map((v) => (
        <ListItem
          button
          component={Link}
          href={v.path}
          naked
          selected={urlPath === v.path}
          key={v.name}
        >
          <ListItemIcon>{v.icon}</ListItemIcon>
          <ListItemText primary={v.name} />
        </ListItem>
      ))}
      <ListItem button component={Link} naked href="/login" key="/login">
        <ListItemIcon>
          <ExitToAppIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </>
  )
}

export default NavItem
