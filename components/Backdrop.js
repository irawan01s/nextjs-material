import { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const LoadingBackdrop = ({ loading }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(loading)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingBackdrop
