import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Title from "../components/shared/Title";
import { Tab, Tabs } from "../components/shared/Tabs";
import CardsHorizontal from "../components/shared/CardsHorizontal";
import { IMAGES, TABS_INVEST, TABS_RENT } from "../constants";
import PropertyCards from "../components/shared/PropertyCards";
import Button from "../components/shared/Button";

const Home = () => {

  return (
    <>
      <Header />
      <Hero />
      <section id="section-1-tabs">
        <Title
          text="Supercharge your search"
          subText="Explore the most home listings in the UAE. With the most reliable information. All at your fingertips."
        />

        <Tabs>
          {/* Tabs - Rent */}
          <Tab label="Rent">
            {TABS_RENT?.map((tab) => (
              <CardsHorizontal
                key={tab.id}
                title={tab.title}
                subText={tab.subText}
                linkText={tab.linkText}
                link={tab.link}
                imgUrl={tab.imgUrl}
                bgColor={tab.bgColor || "bg-gray-200"}
              />
            ))}
          </Tab>

          {/* Tabs - Buy */}
          <Tab label="Buy">
            {TABS_RENT?.map((tab) => (
              <CardsHorizontal
                key={tab.id}
                title={tab.title}
                subText={tab.subText}
                linkText={tab.linkText}
                link={tab.link}
                imgUrl={tab.imgUrl}
                bgColor={tab.bgColor || "bg-gray-200"}
              />
            ))}
          </Tab>

          {/* Tabs - Invest */}
          <Tab label="Invest">
            {TABS_INVEST?.map((tab) => (
              <CardsHorizontal
                key={tab.id}
                title={tab.title}
                subText={tab.subText}
                linkText={tab.linkText}
                link={tab.link}
                imgUrl={tab.imgUrl}
                bgColor={tab.bgColor || "bg-gray-200"}
              />
            ))}
          </Tab>
        </Tabs>
      </section>

      <section id="section-2-QR-code">
        <div className="flex-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-50 via-global-white to-white bg-opacity-40">
          <div className="flex-1 px-4">
            <h1 className="text-2xl mb-7 font-semibold">
              Download the UAE’s most trusted property search app
            </h1>
            <p className="text-sm sub-gray-text">
              Install the Property Finder app and start searching smarter.
            </p>
          </div>
          <div className="relative flex-1 flex justify-end py-5">
            <div className="absolute right-[46%] qr-code flex-col mt-[100px] bg-white shadow-lg text-center p-2">
              <canvas className="w-[250px] h-[180px]"></canvas>
              <p className="text-sm sub-gray-text mt-3">scan to download</p>
            </div>
            <img
              className="max-w-[250px] object-contain "
              src="https://www.propertyfinder.ae/static/images/apps/ios-ae-en.png"
              alt="mobile app"
            />
          </div>
        </div>
      </section>

      <section id="section-1-new-projects">
        <Title
          text="Explore new projects in the UAE"
          subText="Discover the latest off-plan properties and be informed."
        />

        <Tabs>
          <Tab label="Dubai">
            <div className="grid grid-cols-2 xl:grid-cols-3  gap-5">
              <div className="">
                <PropertyCards />
              </div>
              <div className="">
                <PropertyCards />
              </div>
              <div className="">
                <PropertyCards />
              </div>
              <div className="">
                <PropertyCards />
              </div>
              <div className="">
                <PropertyCards />
              </div>
              <div className="">
                <PropertyCards />
              </div>
            </div>
          </Tab>
          <Tab label="Abu Dhabi"></Tab>
          <Tab label="Sharjah"></Tab>
          <Tab label="Ras Al Khaimah"></Tab>
        </Tabs>

        <div className="flex-center">
          <Button
            text="See all New Projects"
            classname="text-color-blue p-3 bg-gray-200 rounded-md"
          />
        </div>
      </section>

      <div className="bg-global-stone-25">
        <section id="market">
          <Title
            text="Supercharge your search"
            subText="Dive deep into the UAE’s real estate market with prices, transaction histories and community insights to help you make an educated decision."
          />

          <div>
          </div>

        </section>
      </div>
    </>
  );
};

export default Home;
