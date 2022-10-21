import { ReactNode } from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Link from 'next/link';
import NavbarLayout from 'components/NavbarLayout';
import Logo from 'components/Logo';

function Home() {
  return (
    <>
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="mt-16 flex flex-1 flex-col items-center justify-center
        text-center"
      >
        <div className="grid grid-cols-1 content-center items-center justify-center justify-items-center sm:grid-cols-2">
          <HeroSection />
          <div className="info grid-hero-info grid content-center justify-items-center gap-8 p-4">
            <div className="relative h-60 w-60">
              <Logo className="absolute top-0 left-0 z-0 saturate-200" />
              <Logo className="-z-1 absolute top-0 left-0 blur-[3px]" />
              <Logo className="-z-2 absolute top-0 left-0 animate-glow" />
              <Logo className="-z-3 absolute top-0 left-0 animate-glow2" />
            </div>
            <div className="text-8 grid grid-cols-2 gap-4">
              <Link href="/rebranding-rationale">
                <a className="grid content-center rounded-lg bg-green-500 p-2 transition hover:bg-green-600">
                  The Rebranding Rationale
                </a>
              </Link>
              <Link href="https://forms.gle/hU18jSEWL2r9xmqP9" target="_blank">
                <a
                  target="_blank"
                  className="grid content-center rounded-lg bg-green-500 p-2 transition hover:bg-green-600"
                >
                  Speaker Signup
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export default Home;
