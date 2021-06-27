// import useSWR from 'swr'
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
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import PencilIcon from '@material-ui/icons/Create'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import { teal } from '@material-ui/core/colors'
import Link from '../../components/Link'
import Meta from '../../components/Meta'
import LoadingBackdrop from '../../components/Backdrop'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)}px auto`
  },
  avatar: { backgroundColor: teal[400] }
}))

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'userName', headerName: 'User Name', width: 160 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'address', headerName: 'Address', width: 250 },
  {
    field: 'action',
    headerName: 'Action',
    align: 'center',
    flex: 1,
    sortable: false,
    renderCell: params => (
      <Link naked href={`/user/${params.row.id}/update`}>
        <Tooltip title="Update" arrow placement="right">
          <Fab color="secondary" size="small" variant="round">
            <PencilIcon />
          </Fab>
        </Tooltip>
      </Link>
    )
  }
]

// const fetcher = url => fetch(url).then(res => res.json())

const User = ({ users }) => {
  const classes = useStyles()
  // const { data: users, error } = useSWR('/api/user', fetcher)

  // if (error) return <div>failed to load</div>
  if (!users) return <div><LoadingBackdrop loading={true} /></div>

  return (
    <>
      <Meta title="User" />
      <Container maxWidth="lg">
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
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const uri = process.env.API_URI
  const res = await fetch(`${uri}/users`).then(u => u.json())
  const users = res.data

  return {
    props: { users },
    revalidate: 1
  }
}

// export const getServerSideProps = async () => {
//   const uri = process.env.API_URI
//   const headers = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   }
//   const users = await fetch(`${uri}/users`, headers).then(response => response.json()).then(response => response.data)
//   // const users = await res.data

//   if (!users) {
//     return { notFound: true }
//   }

//   return { props: { users } }
// }

export default User
