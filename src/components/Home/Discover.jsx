import { profile_idam, profile_adam, profile_reza, profile_raihan } from "../../assets/muscal";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: profile_idam,
    title: "Idam",
  },
  {
    id: 2,
    image: profile_raihan,
    title: "Raihan",
  },
  {
    id: 3,
    image: profile_adam,
    title: "Adam",
  },
  {
    id: 4,
    image: profile_reza,
    title: "Reza",
  },
];

const DiscoverCard = ({ card }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform p-4 shadow-md"
      style={{ backgroundColor: "#423D36" }}
    >
      <img src={card.image} alt="discover_image" className="rounded-lg" />
      <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
        {card.title}
      </div>
    </div>
  );
};

export default function Discover() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="Our Team" />
        {/* <div className="bg-black bg-opacity-10 p-8 rounded-lg shadow-lg mt-8"> */}
        <div className="grid lg:grid-cols-4 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
          {cards.map((card) => (
            <DiscoverCard card={card} key={card.id} />
          ))}
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
}
