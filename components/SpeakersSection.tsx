import speakers, { Speaker } from "../speakers";

const Speaker = (speaker: Speaker) => {
  return (
    <div className="info grid-hero-info">
      <p>{speaker.name}</p>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <section className="py-16">
      <h2 className="">Speakers</h2>
      {speakers.map(s => <Speaker { ...s } />)}
    </section>
  );
};

export default SpeakersSection;
