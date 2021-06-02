import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  active: {
    backgroundColor: '#fce4ec'
  }
})

function NavItem({ menus }) {
  const classes = useStyles()
  const router = useRouter()
  const tmpPath = router.asPath
  const urlPath = `/${tmpPath.split('/')[1]}`
  return (
    <>
      {menus.map((v) => (
        <NextLink href={v.path} key={v.name} passHref>
          <ListItem
            button
            component="a"
            className={urlPath === v.path ? classes.active : null}
          >
            <ListItemIcon>{v.icon}</ListItemIcon>
            <ListItemText primary={v.name} />
          </ListItem>
        </NextLink>
      ))}
    </>
  )
}

export default NavItem
