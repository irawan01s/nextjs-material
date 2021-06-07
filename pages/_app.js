/* eslint-disable react/forbid-prop-types */
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  teal,
  deepOrange
} from '@material-ui/core/colors'
import Layout from '../components/layouts/Layout'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const [darkState, setDarkState] = useState(false)
  const palletType = darkState ? 'dark' : 'light'
  const mainPrimaryColor = darkState ? teal[600] : teal[800]
  const mainSecondaryColor = darkState ? teal[300] : deepOrange[300]

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor }
    }
  })

  const handleDarkMode = () => {
    setDarkState(!darkState)
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps} darkState={darkState} handleDarkMode={handleDarkMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
