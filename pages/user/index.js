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
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    sortable: false,
    valueGetter: (params) => `${params.getValue(params.id, 'firstName') || ''} ${
      params.getValue(params.id, 'lastName') || ''
    }`
  }
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

const User = () => {
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
              <Link href="/user/create">
                <Tooltip title="Add User" arrow placement="left">
                  <Fab color="secondary" size="small" variant="extended">
                    <PersonAddIcon />
                  </Fab>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item xs={12} md={12}>
              <DataGrid
                rows={rows}
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

export default User
