import React from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const JoinDiscordButton = () => (
  <Link href="https://discord.gg/Cz9J4ZD">
    <a
      className={`rounded-lg bg-brand-discord px-4 py-2 text-white 
        text-sm transition duration-300 hover:opacity-70 flex items-center
        gap-2` }
      target="_blank"
    >
      <FaDiscord className="text-lg"/>
      <span>Join Discord</span>
    </a>
  </Link>
);

export default JoinDiscordButton;
