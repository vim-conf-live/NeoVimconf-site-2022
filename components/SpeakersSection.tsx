import speakers, { Speaker } from "../speakers";
import Image from 'next/future/image';
import Link from "next/link";

const YouCard = () => {
  return (
    <>
      <Link href="https://forms.gle/hU18jSEWL2r9xmqP9" target="_blank">
        <a className="rounded-lg bg-black m-2 p-2 flex flex-row" target="_blank">
          <Image className="rounded-full mr-4" src="http://www.clipartbest.com/cliparts/Kij/oAb/KijoAbjzT.png" alt="idk" width={60} height={60} />
          <div className="flew">
            <h3 className="text-green-600 text-xl font-medium leading-tight mb-2">You!</h3>
            <p className="">Click to submit your presentation</p>
          </div>
        </a>
      </Link>
    </>
  );
}

const SpeakerCard = (speaker: Speaker) => {
  return (
    <div className="rounded-lg bg-black m-2 p-2 flex flex-row">
      <Image className="rounded-full mr-4" src={speaker.image} alt="idk" width={60} height={60} />
      <div className="flew">
        <h3 className="text-green-600 text-xl font-medium leading-tight mb-2">{speaker.name}</h3>
        <p className="">{speaker.title}</p>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <section>
      <h2>Speakers</h2>
      <div className="flex flex-col">
        <YouCard />
        {speakers.map(s => <SpeakerCard { ...s } />)}
      </div>
    </section>
  );
};

export default SpeakersSection;
