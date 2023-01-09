import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";
import SEO from "./SEO";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.png"
        />
        <link rel="icon" href="/assets/logo.png" />
        <link ref="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <SEO />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
