import Document, { Head, Main, NextScript } from 'next/document'
import cxs from 'cxs'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const style = cxs.getCss()

    return { ...page, style }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Jere Piispanen</title>
          <style dangerouslySetInnerHTML={{ __html: `
            body {
              font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              margin: 0;
              background-color: #fff;
            }
          `}} />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
          <script src="https://use.fontawesome.com/7d6ed6fb7e.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
