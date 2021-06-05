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
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import Link from '../../components/Link'
import Meta from '../../components/Meta'

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: { margin: theme.spacing(3, 0, 2) }
}))

const CreateBank = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const classes = useStyles()
  const router = useRouter()

  const onSubmit = async (bank) => {
    const res = await fetch('http://localhost:4000/banks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bank)
    })
    const data = await res.json()
    if (data.status) {
      router.push('/bank')
    }
  }
  return (
    <>
      <Meta title="Add Bank" />
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={4}>
          <Avatar className={classes.avatar}>
            <AccountBalanceIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Bank
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  id="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  {...register('name', { required: true })}
                />
                {errors.name && errors.name.type === 'required' && <span>This is required</span>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Accoun No"
                  id="accountNo"
                  name="accountNo"
                  variant="outlined"
                  fullWidth
                  required
                  {...register('accountNo', { required: true })}
                />
                {errors.accountNo && errors.accountNo.type === 'required' && <span>This is required</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Branch"
                  id="branch"
                  name="branch"
                  variant="outlined"
                  fullWidth
                  {...register('branch')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/bank" variant="body2">
                  Back To Manage Bank
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default CreateBank
