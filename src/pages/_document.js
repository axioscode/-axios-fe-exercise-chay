import Document, { Head, Html, Main, NextScript } from 'next/document'

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
        </Head>
        <body
          style={{
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
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)
    return {
      ...initialProps,
    }
  }

  render() {
    return <RootDocumentMarkup {...this.props} />
  }
}

export default AxiosDocument
