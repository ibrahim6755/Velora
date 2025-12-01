import AnnouncementBar from "@/components/AnnouncementBar";
import ArrivalCard from "@/components/ArrivalCard";
import CountdownTimer from "@/components/CountdownTimer";
import Hero from "@/components/Hero";
import { ArrivalCards } from "@/data";

const Home = () => {
  return (
    <main>
      <div className=" bg-black p-3 flex justify-center text-white text-xs">
        <AnnouncementBar />
      </div>
      {/* HERO */}
      <section>
        <Hero />
      </section>
      {/* NEW ARRIVALS */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto ">
          <div className="flex-col p-4 md:flex-row md:p-0 flex items-center justify-between w-full">
            <div>
              <h1 className="text-center md:text-start text-4xl font-bold text-black my-3">
                New Arrivals
              </h1>
              <h3 className="text-center md:text-start text-gray-600 text-sm">
                Be the first to wear this seasons latest looks. Handpicked and
                freshly styled.
              </h3>
            </div>
            <button className="my-4 md:my-0 uppercase font-extralight text-custom-red border border-custom-red hover:bg-custom-red hover:text-white transition duration-300 p-3 px-5 text-xs cursor-pointer rounded-3xl">
              See whats new
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 my-12 p-4">
            {ArrivalCards.map((item, idx) => (
              <div key={idx} className="m-2">
                <ArrivalCard
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  startingPrice={item.startingPrice}
                  endingPrice={item.endingPrice}
                  sizes={item.sizes}
                  colors={item.colors}
                  badge={item.badge}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* EXCLUSICE JACKET */}
      <section className="bg-white ">
        <div className="relative bg-[url('/images/exclusive-jackets.jpg')] bg-cover bg-center w-full md:w-[75%] h-[500px] p-9 md:p-0 rounded-2xl">
          <div className="absolute bg-white p-8 rounded-2xl top-50 md:-right-18 md:top-40 md:w-[30%] flex flex-col items-start shadow-2xl">
            <h1 className="text-black font-bold">
              The Exclusive Jackets - Starting at just $40
            </h1>
            <p className="text-gray-600 text-xs my-8">
              Crafted for comfort, designed for impact — this is the outerwear
              piece thats redefining everyday style. Our best-selling jacket
              brings warmth, versatility, and edge to any outfit.
            </p>
            <button className="uppercase bg-custom-red p-3 px-3 text-xs font-bold cursor-pointer rounded-3xl">
              shop the exclusive jacket
            </button>
          </div>
        </div>
      </section>
      {/* HURRY UP */}
      <section className="bg-white py-10">
        <div className="relative bg-[url('/images/hurryup.jpg')] p-4 md:p-0 flex items-center flex-col justify-center h-[600px] w-full bg-cover bg-center rounded-2xl ">
          <div className="absolute inset-0 bg-black/60" />

          <div className="z-50">
            <h1 className="text-4xl text-white font-bold text-center">
              Hurry Up! Get Up to 50% Off
            </h1>
            <h3 className="text-sm my-4 text-center text-white">
              Step into summer with sun-ready styles at can't-miss prices.
            </h3>
          </div>
          <CountdownTimer />
          <button className="z-50 uppercase bg-custom-red p-3 px-5 text-xs font-bold cursor-pointer rounded-3xl">
            shop the summer sale
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
