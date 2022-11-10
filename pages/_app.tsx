import 'styles/main.css';
import Head from 'next/head';
import NavbarLayout from 'components/NavbarLayout';
import useVimMappings from 'hooks/useVimMappings';

function MyApp({ Component, pageProps }) {
  useVimMappings();

  return (
    <>
      <Head>
        <title>{`Neovim Conf 2022`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
        <meta name="description" content="NeovimConf 2022" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neovimconf.live" />
        <meta property="og:title" content="NeovimConf 2022" />
        <meta property="og:site_name" content="NeovimConf" />
        <meta
          property="og:image"
          content="https://www.neovimconf.live/neovimconf.png"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:width" content="566" />
        <meta
          property="og:description"
          content="Connecting the neovim community to share their love and passion for all things neovim!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VimconfLive" />
        <meta name="twitter:creator" content="@VimconfLive" />
      </Head>
      <NavbarLayout>
        <Component {...pageProps} />
      </NavbarLayout>
    </>
  );
}

export default MyApp;
