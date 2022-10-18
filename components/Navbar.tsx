import { ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

export interface NavbarProps {
  inverted?: boolean;
}

const Logo = () => (
  <a
    style={{ cursor: 'pointer' }}
    onClick={() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <Image src="/XMLID-15.svg" alt="Neovim" className="h-14" width={40} height={40} />
  </a>
);

const WatchNow = () => {
  return (
    <Link href="https://www.youtube.com/channel/UCPK_UHtbfcWABCi0F0GPG6w/playlists">
      <a className="hover:underline" target="_blank">
        Watch Now!
      </a>
    </Link>
  );
};


const RegisterPrompt = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  return (
    <div className="hidden items-center space-x-2 text-sm">
      <label htmlFor="email">Register:</label>
      <input
        type="text"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={handleChangeEmail}
        className={`rounded p-1 bg-white/20 outline-none border border-white/10 placeholder:text-gray-500`}
      />
    </div>
  );
};

const Navbar = (props: NavbarProps) => {
  const background = props.inverted ? 'bg-black' : 'bg-green-500'

  return (
    <nav
      className={`fixed top-0 right-0 left-0 h-16
        flex items-center px-4 text-gray-800
        transition duration-300
        ${background}`}
    >
      <Logo />
      <WatchNow />
      <RegisterPrompt />
    </nav>
  );
};

export default Navbar;
