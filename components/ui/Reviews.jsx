"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./card";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

//required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avtar.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum libero, ipsa quam eveniet quisquam repellat nisi perspiciatis eius aut.",
  },
  {
    avatar: "/reviews/avtar.png",
    name: "Sara Singh",
    job: "Fashion Desinger",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum libero, ipsa quam eveniet quisquam repellat nisi perspiciatis eius aut.",
  },
  {
    avatar: "/reviews/avtar.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum libero, ipsa quam eveniet quisquam repellat nisi perspiciatis eius aut.",
  },
  {
    avatar: "/reviews/avtar.png",
    name: "Harry Tale",
    job: "Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum libero, ipsa quam eveniet quisquam repellat nisi perspiciatis eius aut.",
  },
  {
    avatar: "/reviews/avtar.png",
    name: "Janes",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum libero, ipsa quam eveniet quisquam repellat nisi perspiciatis eius aut.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]">
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-teritary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image  */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />

                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
