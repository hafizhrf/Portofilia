import React from 'react'
import Head from 'next/head'
import { NextComponentType } from 'next'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import 'normalize.css'

// import Global from '../styles/index.styled'

interface Props {
  Component: NextComponentType
  pageProps: unknown
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2FBBFF',
      contrastText: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

function App({ Component, pageProps }: Props): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Perpustakaan SMK Negeri 1 Kota Bekasi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <Global /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
