import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import { RenderPageResult } from 'next/dist/next-server/lib/utils'

interface DocumentProps extends DocumentInitialProps {
  styles: React.ReactElement
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
          <meta name="description" content="Hafizh Rifqi Fabian personal website">
          <meta name="keywords" content="HTML, CSS, JavaScript, Frontend, Hiring, Developer, Indonesia">
          <meta name="author" content="Hafizh Rifqi Fabian">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta property="og:title" content="Hafizhrf" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hafizhrf.vercel.app/" />
          <meta property="og:image" content="https://avatars3.githubusercontent.com/u/52806525" />
          <meta property="og:description" content="Do you want to know who i am?" />
          <meta property="og:site_name" content="Hafizh Rifqi Fabian"></meta>
          <meta property="og:updated_time" content="1440432930" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
