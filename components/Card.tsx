import { useState } from 'react';
import Image from 'next/future/image';
import {
  FaAmazon,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMicrophone,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaMastodon,
} from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
import { CgArrowsExpandRight } from 'react-icons/cg';

interface Props {
  name: string;
  about: string;
  src: string;
  // make lecture title optional till all title is added
  lectureTitle?: string;
  github?: string | null;
  twitter?: string | null;
  twitch?: string | null;
  website?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  amazon?: string | null;
  matrix?: string | null;
  mastodon?: string | null;
}

const Card = (props: Props) => {
  const {
    name,
    about,
    src,
    lectureTitle,
    github,
    twitter,
    twitch,
    website,
    linkedin,
    youtube,
    amazon,
    matrix,
    mastodon,
  } = { ...props };

  const [isExpanded, setisExpanded] = useState(false);

  const titleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  };

  const handleCardExpand = () => {
    if (isExpanded) {
      document.body.style.overflow = 'unset';
      setisExpanded(false);
    } else {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
      setisExpanded(true);
    }
  };

  const ModalButton = () => {
    return (
      <button
        onClick={handleCardExpand}
        className="absolute right-3 top-3 cursor-pointer text-gray-400"
      >
        {isExpanded && <MdClose className="text-2xl" />}
        {!isExpanded && <CgArrowsExpandRight className="text-xl" />}
      </button>
    );
  };

  const SocialLinks = () => {
    return (
      <ul className="mt-2 flex flex-wrap gap-4">
        {github && (
          <li>
            <a href={github} target={'_blank'} rel={'noreferrer'}>
              <FaGithub className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {mastodon && (
          <li>
            <a href={mastodon} target={'_blank'} rel={'noreferrer'}>
              <FaMastodon className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a href={twitter} target={'_blank'} rel={'noreferrer'}>
              <FaTwitter className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {twitch && (
          <li>
            <a href={twitch} target={'_blank'} rel={'noreferrer'}>
              <FaTwitch className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {website && (
          <li>
            <a href={website} target={'_blank'} rel={'noreferrer'}>
              <FaGlobe className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {matrix && (
          <li>
            <a href={matrix} target={'_blank'} rel={'noreferrer'}>
              <SiMatrix className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target={'_blank'} rel={'noreferrer'}>
              <FaLinkedin className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {youtube && (
          <li>
            <a href={youtube} target={'_blank'} rel={'noreferrer'}>
              <FaYoutube className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
        {amazon && (
          <li>
            <a href={amazon} target={'_blank'} rel={'noreferrer'}>
              <FaAmazon className="text-xl text-gray-400 hover:opacity-70" />
            </a>
          </li>
        )}
      </ul>
    );
  };

  const BackgroundOverlay = () => {
    if (isExpanded)
      return (
        <div
          className="fixed top-16 left-0 z-10 h-full w-full bg-black opacity-90"
          onClick={handleCardExpand}
        ></div>
      );
    return null;
  };

  const lineClamp = isExpanded ? '' : 'line-clamp-4';

  const animate = isExpanded ? 'animate-appear' : '';

  const modalStyle = isExpanded
    ? ' ' +
      'fixed top-20 md:left-4 z-20 h-5/6 md:top-24  md:w-1/2 overflow-y-auto'
    : ' ' + 'relative md:max-w-sm';

  return (
    <>
      <article
        className={`mx-5 rounded-lg bg-gray-800 p-5 shadow-lg md:mx-0 ${animate} ${modalStyle}`}
      >
        <ModalButton />
        <div className="flex gap-5">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden lg:h-32 lg:w-32">
            <Image
              fill
              src={src}
              alt="speaker profile image"
              className="rounded-full"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <h3 className="text-2xl font-bold text-gray-100 lg:text-2xl">
              {lectureTitle}
            </h3>
            <h3 className="text-lg text-gray-300 lg:text-xl">
              <FaMicrophone className="mr-2 inline-block text-gray-400" />
              {titleCase(name)}
            </h3>
            <SocialLinks />
          </div>
        </div>
        <p
          className={`text-md mt-5 px-3 text-left text-gray-400 lg:text-lg ${lineClamp}`}
        >
          {about}
        </p>
      </article>
      <BackgroundOverlay />
    </>
  );
};

export default Card;
