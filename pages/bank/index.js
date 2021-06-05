import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import AddIcon from '@material-ui/icons/Add'
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
  { field: 'accountNo', headerName: 'Account No', width: 260 },
  { field: 'name', headerName: 'Name', width: 260 },
  { field: 'branch', headerName: 'Branch', flex: 1 }
]

const Bank = ({ banks }) => {
  const classes = useStyles()
  return (
    <>
      <Meta title="Bank" />
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid container spacing={3} justify="space-between">
            <List dense={true}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <AccountBalanceIcon color="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <Typography align="justify" variant="h5">
                  Banks
                </Typography>
              </ListItem>
            </List>
            <Grid item>
              <Link href="/bank/create">
                <Tooltip title="Add Bank" arrow placement="left">
                  <Fab color="secondary" size="small" variant="extended">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item xs={12} md={12}>
              <DataGrid
                rows={banks}
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
  const res = await fetch('http://localhost:4000/banks')
  const banks = await res.json()

  if (!banks) {
    return { notFound: true }
  }

  return { props: { banks: banks.data } }
}

export default Bank
