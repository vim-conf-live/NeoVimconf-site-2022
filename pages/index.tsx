import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import Link from 'next/link';
import Image from 'next/future/image';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  // TO-DO: We need to debounce this
  const handleScroll = useCallback(() => {
    const isScrolling = document.documentElement.scrollTop > 0;
    setScrolling(isScrolling);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="text-gray-200">
      <Navbar scrolling={scrolling} />
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full flex-1 text-center
        mt-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center content-center">
          <HeroSection />
          <div className="info grid grid-hero-info gap-8 p-4 justify-items-center content-center">
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
            <div className="grid grid-cols-2 gap-4 text-8">
              <Link href="/rebranding-rationale">
                <a className="p-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
                  The Rebranding Rationale
                </a>
              </Link>
              <Link href="https://forms.gle/hU18jSEWL2r9xmqP9" target="_blank">
                <a
                  target="_blank"
                  className="p-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
                >
                  Speaker Signup
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
