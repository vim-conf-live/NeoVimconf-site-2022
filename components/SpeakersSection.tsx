import speakers, { Speaker } from "../speakers";
import Image from 'next/future/image';

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
        {speakers.map(s => <SpeakerCard { ...s } />)}
      </div>
    </section>
  );
};

export default SpeakersSection;
