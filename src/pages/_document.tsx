import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document';
import {GA_TRACKING_ID} from 'lib/ga';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  createMarkup() {
    return {
      __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });`,
    };
  }

  render() {
    return (
      <Html>
        <Head> 
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script dangerouslySetInnerHTML={this.createMarkup()} /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
