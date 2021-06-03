import Link from 'next/link'
import {
  Container,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import Meta from '../../components/Meta'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)}px auto`
  // color: theme.palette.text.primary,
  }
}))

const columns = [
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'userName', headerName: 'User Name', width: 160 },
  { field: 'email', headerName: 'Email', width: 160 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 120
  },
  {
    field: 'address',
    headerName: 'Addres',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    sortable: false
  }
]

const User = ({ users }) => {
  const classes = useStyles()

  return (
    <>
      <Meta title="Users" />
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid container spacing={3} justify="space-between">
            <Grid item>
              <Typography align="justify" variant="h5">
                <PeopleAltIcon />
                {' '}
                Users
              </Typography>
            </Grid>
            <Grid item>
              <Link href="/user/create" passHref>
                <Tooltip title="Add User" arrow placement="left">
                  <Fab color="secondary" size="small" variant="extended">
                    <PersonAddIcon />
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
  const uri = process.env.API_URI
  const res = await fetch('http://localhost:4000/users')
  const users = await res.json()
  console.log(users.data)

  if (!users) {
    return { notFound: true }
  }

  return { props: { users: users.data } }
}

export default User
