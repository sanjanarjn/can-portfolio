import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProjectDetail from "./ProjectDetail";

import pantryPalImage from "../images/pantry-pal.png";
import coRideImage from "../images/co-ride.png";
import walletWizImage from "../images/wallet-wiz.jpeg"

import "./portfolio.css";

function SwipeAccordion() {
  const pantryPalSubheading =
    "Simple chrome extension which simplifies your weekly meal planning and groceries! ";
  const pantryPalDescription =
    "PantryPal is a straightforward meal planning and grocery list app designed for simplicity. It helps you organize your weekly meals and shopping lists.";

  const coRideSubHeading =
    "CoRide empowers users to post and find rides, facilitating easy travel connections.";
  const coRideDescription =
    "Create a ride or search for a match, making every journey more sustainable and social. Perfect for commuters and travelers seeking shared experiences.";

  const walletWizSubHeading = "Simplify your financial management with a user-friendly interface for tracking expenses."
  const walletWizDescription = "Keep tabs on your spending with quick entries and comprehensive list of categories. Ideal for anyone looking to gain insight into their financial habits and make informed budgeting decisions."
  return (
    <div class="ease-in-out h-full w-11/12 mx-14 mb-16 rounded-3xl p-8">
      <div className="mb-8">
      <p class="p-6 font-arvo text-5xl">Project Highlights...</p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="items-center"
      >
        <SwiperSlide>
          <ProjectDetail
            title="Wallet Wiz"
            image={walletWizImage}
            subheading={walletWizSubHeading}
            description={walletWizDescription}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetail
            title="Pantry Pal"
            image={pantryPalImage}
            subheading={pantryPalSubheading}
            description={pantryPalDescription}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetail
            title="Co-Ride"
            image={coRideImage}
            subheading={coRideSubHeading}
            description={coRideDescription}
          />
        </SwiperSlide>
        
       
      </Swiper>
    </div>
  );
}

export default SwipeAccordion;
