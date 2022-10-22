import { ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import JoinDiscordButton from './JoinDiscordButton';

export interface NavbarProps {
  scrolling?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const [email, setEmail] = useState('');
  const { scrolling } = props;

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (router.pathname === '/')
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    else router.push('/', undefined, { scroll: false });
  };

  const scrollingClass = scrolling ? 'bg-black' : '';

  return (
    <nav
      className={`fixed top-0 right-0 left-0 flex
        h-16 items-center justify-between px-4 text-white
        transition duration-300
        ${scrollingClass}`}
    >
      <div className="flex cursor-pointer hover:opacity-70 transition duration-300" onClick={handleLogoClick}>
        <Image
          src="/neovimconf-logo.svg"
          alt="NeovimConf logo"
          width={40}
          height={40}
        />
        <span className="self-center px-3">NeovimConf</span>
      </div>

      <JoinDiscordButton />
      <div className="hidden items-center space-x-2 text-sm">
        <label htmlFor="email">Register:</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className={`rounded border border-white/10 bg-white/20 
            p-1 outline-none placeholder:text-gray-500`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
