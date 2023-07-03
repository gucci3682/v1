import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Ng Gerald" />
          <meta
            name="description"
            content="Ng Gerald is an aspiring software engineer."
          />
          <meta name="image" content="/preview.png" />
          <meta
            name="google-site-verification"
            content="1oxF7G6_fEXhGoqV-vMT975YbJVIS6tnbpTr-uR2cCo"
          />
          <meta property="og:title" content="Ng Gerald Portfolio" />
          <meta
            property="og:description"
            content="Ng Gerald is an aspiring software engineer."
          />
          <meta property="og:image" content="/preview.png" />
          <meta property="og:type" content="website" data-react-helmet="true" />
          <meta property="og:url" content="https://v1-gucci3682.vercel.app/" />
          <meta name="twitter:title" content="Ng Gerald" />
          <meta
            name="twitter:description"
            content="Ng Gerald is an aspiring software engineer."
          />
          <meta name="twitter:image" content="/preview.png" />

          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
