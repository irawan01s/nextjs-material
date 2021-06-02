/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from '../components/Layouts/Layout'
import theme from '../src/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
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
