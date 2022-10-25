import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * Set the lang and dir global attributes for the HTML tag.
 * @see: https://www.w3schools.com/tags/att_lang.asp
 * @see: https://www.w3schools.com/tags/att_dir.asp
 *
 * @param {RootDocumentProps} props
 * @returns {Document}
 */
const RootDocumentMarkup = () => {
  return (
    <>
      <Html lang={'en'} dir={'ltr'}>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            rel="preload"
            href="/fonts/roboto-v30-latin-regular.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/roboto-v30-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body
          style={{
            fontFamily: 'Roboto',
            margin: '0',
            padding: '0',
            width: 'auto!important',
            overflowX: 'hidden!important',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}

/**
 * Extends the root HTML document class to modify.
 *
 * @class RootDocument
 * @extends {Document<RootDocumentProps>}
 */
class AxiosDocument extends Document {
  // https://dev.to/dharmi/adding-fonts-in-nextjs-local-fonts-along-with-styled-components-2cdd
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return <RootDocumentMarkup {...this.props} />
  }
}

export default AxiosDocument
