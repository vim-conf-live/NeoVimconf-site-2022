import { ReactNode } from 'react';
import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Link from 'next/link';
import Image from 'next/future/image';
import NavbarLayout from 'components/NavbarLayout';
import SpeakersSection from 'components/SpeakersSection';

function Home() {
  return (
    <>
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="mt-16 flex w-full flex-1 flex-col items-center justify-center
        text-center"
      >
        <div className="grid grid-cols-1 content-center items-center justify-center justify-items-center sm:grid-cols-2">
          <HeroSection />
          <div className="info grid-hero-info grid content-center justify-items-center gap-8 p-4">
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                document.documentElement.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              <Image src="/XMLID-15.svg" alt="Neovim" width={160} height={40} />
            </a>
            <div className="text-8 grid grid-cols-2 gap-4">
              <Link href="/rebranding-rationale">
                <a className="rounded-lg bg-green-500 p-2 transition hover:bg-green-600">
                  The Rebranding Rationale
                </a>
              </Link>
              <Link href="https://forms.gle/hU18jSEWL2r9xmqP9" target="_blank">
                <a
                  target="_blank"
                  className="rounded-lg bg-green-500 p-2 transition hover:bg-green-600"
                >
                  Speaker Signup
                </a>
              </Link>
            </div>
          </div>
        </div>
        <SpeakersSection />
      </main>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export default Home;
