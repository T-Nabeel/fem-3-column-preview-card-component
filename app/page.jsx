"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  return (
    useGSAP(() => {
      if (window.innerWidth > 1000) {
        let tl = gsap.timeline();

        tl.from(".card-sedans__bg, .card-suvs__bg, .card-luxury__bg", {
          duration: 0.8,
          width: 0,
          ease: "power4.in",
        });
        tl.to(".card-sedans__bg", {
          duration: 1,
          ease: "power2.out",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        });
        tl.to(
          ".card-luxury__bg",
          {
            duration: 1,
            ease: "power2.out",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          },
          "<"
        );
        tl.from(
          ".card__title, .card__icon",
          {
            yPercent: 50,
            duration: 0.5,
            ease: "power2.out",
            opacity: 0,
            stagger: 0.1,
          },
          "-=1"
        );
        tl.from(
          ".card__desc",
          {
            yPercent: 20,
            duration: 0.6,
            ease: "power2.out",
            opacity: 0,
            stagger: 0.1,
          },
          "<"
        );
        tl.from(".card__btn", {
          yPercent: 20,
          duration: 0.5,
          ease: "power2.out",
          opacity: 0,
          stagger: 0.1,
        });
      }
    }),
    (
      <main>
        {/* Card Sedans */}
        <div className="card card-sedans">
          <span className="card-sedans__bg"></span>
          <div>
            <div className="card__icon">
              <Image src="icon-sedans.svg" width={65} height={40} />
            </div>
            <h2 className="card__title">Sedans</h2>
            <p className="card__desc">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <button className="card__btn">Learn More</button>
        </div>

        {/* Card SUVs */}
        <div className="card card-suvs">
          <span className="card-suvs__bg"></span>
          <div>
            <div className="card__icon">
              <Image src="icon-suvs.svg" width={65} height={40} />
            </div>
            <h2 className="card__title">SUVs</h2>
            <p className="card__desc">
              Take an SUV for its spacious interior, power, and versatility
              Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <button className="card__btn">Learn More</button>
        </div>

        {/* Card Luxury */}
        <div className="card card-luxury">
          <span className="card-luxury__bg"></span>
          <div>
            <div className="card__icon">
              <Image src="icon-luxury.svg" width={65} height={40} />
            </div>
            <h2 className="card__title">Luxury</h2>
            <p className="card__desc">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <button className="card__btn">Learn More</button>
        </div>
        {/*
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>. */}
      </main>
    )
  );
}
