import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import SaveIcon from '@material-ui/icons/Save'
import Link from '../../../components/Link'
import Meta from '../../../components/Meta'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: { margin: theme.spacing(3, 0, 2) }
}))

const UpdateUser = ({ user }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const classes = useStyles()
  const router = useRouter()

  const onSubmit = async (data) => {
    const uri = process.env.API_URI || 'https://express-mongodb-api.herokuapp.com'
    const res = await fetch(`${uri}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const resData = await res.json()
    if (resData.status) {
      router.push('/user')
    }
  }
  return (
    <>
      <Meta title="Update User" />
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={4}>
          <Avatar className={classes.avatar}>
            <PersonOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update User
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  id="name"
                  name="name"
                  value={user.name}
                  variant="outlined"
                  fullWidth
                  required
                  {...register('name', { required: true })}
                />
                {errors.name && errors.name.type === 'required' && <span>This is required</span>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="User Name"
                  id="userName"
                  name="userName"
                  value={user.userName}
                  variant="outlined"
                  fullWidth
                  required
                  {...register('userName', { required: true })}
                />
                {errors.userName && errors.userName.type === 'required' && <span>This is required</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  id="email"
                  name="email"
                  value={user.email}
                  type="email"
                  variant="outlined"
                  fullWidth
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  type="number"
                  variant="outlined"
                  fullWidth
                  {...register('phone')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  id="address"
                  name="address"
                  value={user.address}
                  variant="outlined"
                  fullWidth
                  {...register('address')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Place"
                  id="birthPlace"
                  name="birthPlace"
                  value={user.birthPlace}
                  variant="outlined"
                  fullWidth
                  {...register('birthPlace')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Date"
                  id="birthDate"
                  name="birthDate"
                  value={user.birthDate}
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  {...register('birthDate')}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Parent Name"
                  id="parentName"
                  name="parentName"
                  value={user.parentName}
                  variant="outlined"
                  fullWidth
                  required
                  {...register('parentName')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              className={classes.submit}
            >
              Save
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/user" variant="body2">
                  Back To Manage Users
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export async function getServerSideProps(contex) {
  const uri = process.env.API_URI || 'https://express-mongodb-api.herokuapp.com'
  const res = await fetch(`${uri}/users?id=${contex.params.id}`)
  const user = await res.json()

  if (!user) {
    return { notFound: true }
  }

  return { props: { user: user.data[0] } }
}

export default UpdateUser
