import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>
            Taras Kliushta | Front-End developer | taraskliushta.dev
          </title>
          <meta
            name='description'
            content='Taras Kliushta - Front-End developer'
          ></meta>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap'
            rel='stylesheet'
          />
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
