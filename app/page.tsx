import AnnouncementBar from "@/components/AnnouncementBar";
import ArrivalCard from "@/components/ArrivalCard";
import CountdownTimer from "@/components/CountdownTimer";
import Hero from "@/components/Hero";
import { ArrivalCards } from "@/data";
import { Instagram } from "lucide-react";
import Image from "next/image";

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
              Crafted for comfort, designed for impact this is the outerwear
              piece thats redefining everyday style. Our best selling jacket
              brings warmth, versatility, and edge to any outfit.
            </p>
            <button className="uppercase bg-custom-red p-3 px-3 text-xs font-bold cursor-pointer rounded-3xl">
              shop the exclusive jacket
            </button>
          </div>
        </div>
      </section>
      {/* HURRY UP */}
      <section className="bg-white py-12">
        <div className="relative bg-[url('/images/hurryup.jpg')] p-4 md:p-0 flex items-center flex-col justify-center h-[600px] w-full bg-cover bg-center rounded-2xl ">
          <div className="absolute inset-0 bg-black/60" />

          <div className="z-50">
            <h1 className="text-4xl text-white font-bold text-center">
              Hurry Up! Get Up to 50% Off
            </h1>
            <h3 className="text-sm my-4 text-center text-white">
              Step into summer with sun ready styles at cant miss prices.
            </h3>
          </div>
          <CountdownTimer />
          <button className="z-50 uppercase bg-custom-red p-3 px-5 text-xs font-bold cursor-pointer rounded-3xl">
            shop the summer sale
          </button>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="bg-red-50 py-12 flex items-center justify-center flex-col">
        <div className="md:mb-14 ">
          <h1 className="text-black text-3xl font-extrabold text-center">
            How It Works
          </h1>
          <p className="text-black text-center my-3 text-sm">
            Just Pick Pack and Ship
          </p>
        </div>
        <div
          className="bg-white rounded-2xl border border-gray-300 flex-col m-3 md:m-0
         md:flex-row flex md:w-[65%] items-center justify-center my-12"
        >
          <div className="flex items-start p-5">
            <Image
              src={"/images/works-1.png"}
              alt="image"
              width={110}
              height={24}
            />
            <div className="m-3">
              <h1 className="text-sm text-black font-bold">Shop Styles</h1>
              <p className="text-xs text-gray-600 my-2">
                Browse our curated collections for Men, Women, Kids &
                Accessories.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 border-l border-r border-gray-300">
            <Image
              src={"/images/works-2.png"}
              alt="image"
              width={100}
              height={24}
            />
            <div className="m-3">
              <h1 className="text-sm text-black font-bold">Pick Your Fit</h1>
              <p className="text-xs text-gray-600 my-2">
                Find your perfect size with our detailed fit guides and style
                notes for every piece.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5">
            <Image
              src={"/images/works-3.png"}
              alt="image"
              width={100}
              height={24}
            />
            <div className="m-3">
              <h1 className="text-sm text-black font-bold">Checkout Fast</h1>
              <p className="text-xs text-gray-600 my-2">
                Enjoy a quick and secure checkout experience with flexible
                payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FOLLOW */}
      <section className="bg-white flex flex-col items-center justify-center py-24">
        <div className="my-12">
          <h1 className="text-black text-3xl font-extrabold text-center">
            Get 10% Off on Your First Order
          </h1>
          <p className="text-black text-center my-3 text-sm">
            Plus exclusive access to product drops style tips and insider deals.
          </p>
        </div>
        <div className="mb-12">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="placeholder:text-gray-400 text-sm outline p-3 md:mx-2 rounded w-full md:w-[330px]"
          />
          <button className="uppercase w-[90%] md:w-fit m-2 md:m-0 bg-custom-red p-4 px-6  text-xs font-bold cursor-pointer rounded-xl">
            Subscribe
          </button>
        </div>
        <div className="p-3 md:p-0 md:w-[65%] grid grid-cols-2 gap-4 md:grid-cols-4 ">
          <Image
            src={"/images/follow-1.png"}
            alt="image"
            width={200}
            height={180}
            className="rounded-2xl"
          />
          <Image
            src={"/images/follow-2.png"}
            alt="image"
            width={200}
            height={180}
            className="rounded-2xl"
          />
          <Image
            src={"/images/follow-3.png"}
            alt="image"
            width={200}
            height={180}
            className="rounded-2xl"
          />
          <Image
            src={"/images/follow-4.png"}
            alt="image"
            width={200}
            height={180}
            className="rounded-2xl"
          />
        </div>
        <div className="flex items-center p-8 gap-3">
          <Instagram size={20} className="text-custom-red" />
          <h1 className="font-bold  text-black">Follow Us</h1>{" "}
          <span className="text-xs text-gray-400">@VeloraStyle</span>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-red-50 py-12 flex items-center justify-center">
        <div className="max-w-5xl w-full px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center h-full">
            <Image
              src={"/images/delivery1.png"}
              width={60}
              height={60}
              alt="service"
            />
            <h1 className="font-bold text-black my-3 text-sm">
              Free Standard Delivery
            </h1>
            <p className="text-xs text-gray-400">On all Orders Over $100</p>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <Image
              src={"/images/delivery2.png"}
              width={60}
              height={60}
              alt="service"
            />
            <h1 className="font-bold text-black my-3 text-sm">
              Quick Delivery
            </h1>
            <p className="text-xs text-gray-400">
              Delivery within 3 Days across US
            </p>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <Image
              src={"/images/securepayment.png"}
              width={60}
              height={60}
              alt="service"
            />
            <h1 className="font-bold text-black my-3 text-sm">
              Secure Payments
            </h1>
            <p className="text-xs text-gray-400">Secure Payment Methods</p>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <Image
              src={"/images/customerservice.png"}
              width={60}
              height={60}
              alt="service"
            />
            <h1 className="font-bold text-black my-3 text-sm">
              Top Rated Customer Service
            </h1>
            <p className="text-xs text-gray-400">Quick Responses & Solutions</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
