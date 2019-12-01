/**
 * @see https://www.styled-components.com/docs/advanced#nextjs
 * @see https://github.com/zeit/next.js/blob/e03266008c41b2fbad3214f586ace15a98ea7467/examples/with-styled-components/pages/_document.js
 */
import Document, { DocumentInitialProps, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta content="#000000" name="theme-color" />
          <link href="/memo/static/manifest.json" rel="manifest" />
        </Head>
        <body>
          <Main />
          {/* here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
