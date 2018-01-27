import Document, { Head, Main, NextScript } from 'next/document';
import cxs from 'cxs';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = cxs.getCss();

    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Jere Piispanen</title>

          <meta
            name="description"
            content="Front-end developer based in Helsinki, Finland."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="Jere Piispanen" />
          <meta property="og:site_name" content="Jere Piispanen" />
          <meta
            property="og:description"
            content="Front-end developer based in Helsinki, Finland."
          />
          <meta property="og:url" content="https://jerep.me" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Jere Piispanen" />
          <meta
            name="twitter:description"
            content="Front-end developer based in Helsinki, Finland."
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
            body {
              font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              margin: 0;
              background-color: #fff;
            }
          `
            }}
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
