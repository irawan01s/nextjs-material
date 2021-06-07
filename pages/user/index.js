import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography
} from '@material-ui/core'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import PeopleIcon from '@material-ui/icons/People'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import { teal } from '@material-ui/core/colors'
import Link from '../../components/Link'
import Meta from '../../components/Meta'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)}px auto`
  },
  avatar: { backgroundColor: teal[400] }
}))

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'username', headerName: 'User Name', width: 160 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150
  },
  {
    field: 'address',
    headerName: 'Addres',
    flex: 1,
    sortable: false,
    renderCell: params => (
      // console.log(params)
      // const result = []
      // if (params.row.address.street) {
      //   result.push(`street: ${params.row.address.street}`)
      // }
      // if (params.row.address.city) {
      //   result.push(`city: ${params.row.address.city}`)
      // }
      // return result.join(', ')
      <Link naked href={`/user/${params.row.id}/update`}>
        <Tooltip title="Update" arrow placement="right">
          <Fab color="secondary" size="small" variant="round">
            <PeopleIcon />
          </Fab>
        </Tooltip>
      </Link>
    )
  }
]

const User = ({ users }) => {
  const classes = useStyles()
  return (
    <>
      <Meta title="User" />
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid container spacing={3} justify="space-between">
            <List dense={true}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <PeopleAltIcon color="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <Typography align="justify" variant="h5">
                  Users
                </Typography>
              </ListItem>
            </List>
            <Grid item>
              <Link href="/user/create">
                <Tooltip title="Add User" arrow placement="left">
                  <Fab color="secondary" size="small" variant="extended">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item xs={12} md={12}>
              <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                autoHeight
                components={{ Toolbar: GridToolbar }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export const getServerSideProps = async () => {
  // const uri = process.env.API_URI
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  if (!users) {
    return { notFound: true }
  }

  return { props: { users } }
}

export default User
