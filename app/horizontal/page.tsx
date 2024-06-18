"use client";
import { useRef, useState } from "react";
import Image from "next/image";
//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//utility
import { cn } from "../lib/helpers";

//data + assests
import { pavuk_putnik } from "../lib/data";
import paperlines from "../../public/assets/paper/paperlines.png";
import topleft from "../../public/assets/paper/topleft.png";
import mrak2 from "../../public/assets/clouds/mrak2.png";
import mrak1 from "../../public/assets/clouds/mrak1.png";
import trava from "../../public/assets/pavuk_putnik/trava.png";
import javor1 from "../../public/assets/leaves/javor1.png";
import javor2 from "../../public/assets/leaves/javor2.png";
import javor3 from "../../public/assets/leaves/javor3.png";
import javor4 from "../../public/assets/leaves/javor4.png";
import pavukimg from "../../public/assets/pavuk_putnik/pavuk.png";
import sarkanimg from "../../public/assets/pavuk_putnik/sarkan.png";
import smallhouse from "../../public/assets/houses/smallhouse.png";
import tallhouse from "../../public/assets/houses/tallhouse.png";
import skies from "../../public/assets/sky/try.png";
import hills from "../../public/assets/green/hills.png";
import hill1 from "../../public/assets/green/hill1.png";
import labelrough from "../../public/assets/paper/labelrough.png";

import {
  archivo_narrow,
  league_spartan,
  libre_baskerville,
  lora,
  six_caps,
  source_sans_3,
} from "../lib/fonts";

//register gsap = text plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
}

export default function Page() {
  const pageContainer = useRef<HTMLElement | any>();
  const sectionContainer = useRef<HTMLElement | any>();
  const poemContainer = useRef<HTMLElement | any>();
  const leavesContainer = useRef<HTMLElement | any>();
  const list = useRef<HTMLElement | any>();
  const pavuk = useRef<HTMLElement | any>();
  const sarkan = useRef<HTMLElement | any>();
  const scrollTimeline = useRef<GSAPTimeline | any>();
  const leavesTimeline = useRef<GSAPTimeline | any>();
  const cloudsTimeline = useRef<GSAPTimeline | any>();

  useGSAP(
    () => {
      const paragraphs = gsap.utils.toArray("li");
      const leaves = gsap.utils.toArray(".leaf");
      const clouds = gsap.utils.toArray(".mrak");

      scrollTimeline.current = gsap.timeline({
        onComplete: () => console.log("completed"),
        onUpdate: () => {
          console.log(Math.floor(scrollTimeline.current.progress() * 100));
          if (Math.floor(scrollTimeline.current.progress() * 100) === 32) {
            gsap.to(sarkan.current, {
              x: pageContainer.current.getBoundingClientRect().width,
              y: -150,
              duration: 20,
              ease: "sine.inOut",
            });
          }
          if (Math.floor(scrollTimeline.current.progress() * 100) === 60) {
            gsap.to(pavuk.current, {
              y: pageContainer.current.getBoundingClientRect().height,
              x: 300,
              rotate: 360,
              duration: 15,
              ease: "sine.inOut",
            });
          }
        },
        scrollTrigger: {
          scroller: poemContainer.current,
          trigger: list.current,
          scrub: true,
          start: "top bottom",
          end: `+=${list.current.getBoundingClientRect().height}`,
          // markers: true,
        },
      });
      leavesTimeline.current = gsap.timeline({});
      cloudsTimeline.current = gsap.timeline({});

      paragraphs.forEach((paragraph, i) =>
        scrollTimeline.current.from(paragraph, {
          opacity: 0,
        }),
      );
      leavesTimeline.current.to(
        ".leaf",
        {
          y: `${pageContainer.current.getBoundingClientRect().height}px`,
          duration: 15,
          stagger: {
            grid: "auto",
            from: "random",
            amount: 10,
            repeat: -1,
          },
        },
        "<",
      );
      cloudsTimeline.current.to(
        ".mrak",
        {
          x: `-${pageContainer.current.getBoundingClientRect().width}px`,
          duration: 55,
          stagger: {
            grid: "auto",
            from: "random",
            amount: 40,
            repeat: -1,
          },
        },
        "<",
      );
    },
    { scope: pageContainer.current },
  );

  return (
    <main
      ref={pageContainer}
      className={cn(
        "relative flex h-full w-full flex-nowrap overflow-hidden overscroll-none",
        `${libre_baskerville.className}`,
      )}
    >
      <section
        className={cn(
          "section relative isolate z-20 flex h-full min-h-screen w-full gap-10 overflow-hidden overscroll-none sm:w-[500px]",
        )}
        ref={sectionContainer}
      >
        <Image
          src={topleft}
          alt="vector"
          aria-hidden
          className="absolute left-0 top-0 z-10 w-full sm:w-[500px]"
        />

        <div
          ref={leavesContainer}
          className="pointer-events-none absolute z-0 h-full w-full"
        >
          <Image
            src={pavukimg}
            alt="pavuk"
            aria-hidden
            className="pointer-events-none absolute left-[200px] top-0 -z-10 w-[120px] -translate-y-full"
            ref={pavuk}
          />
          <Image
            src={javor1}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[10px] top-0 aspect-square w-[20px] rotate-90"
          />
          <Image
            src={javor2}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[85px] top-10 aspect-square w-[25px] rotate-180"
          />
          <Image
            src={javor3}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[120px] top-20 aspect-square w-[20px]"
          />
          <Image
            src={javor1}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[140px] top-0 aspect-square w-[20px] rotate-90"
          />
          <Image
            src={javor2}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[185px] top-20 aspect-square w-[30px] rotate-180"
          />
          <Image
            src={javor3}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[200px] top-10 aspect-square w-[20px]"
          />
          <Image
            src={javor2}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[280px] top-10 aspect-square w-[30px] rotate-180"
          />
          <Image
            src={javor3}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[310px] top-20 aspect-square w-[40px]"
          />

          <Image
            src={javor2}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[320px] top-0 aspect-square w-[20px] rotate-180"
          />
          <Image
            src={javor1}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[400px] top-20 aspect-square w-[20px] rotate-90"
          />
          <Image
            src={javor1}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[440px] top-0 aspect-square w-[25px] rotate-90"
          />
          <Image
            src={javor1}
            alt="leaf"
            aria-hidden
            className="leaf absolute left-[480px] top-10 z-10 aspect-square w-[20px] rotate-90"
          />
        </div>
        <div className="absolute -top-4 left-2 isolate z-10 mr-8 mt-8 w-[300px] sm:left-10 sm:top-0 sm:w-[500px]">
          <Image
            src={labelrough}
            alt="paper"
            aria-hidden
            className="absolute inset-0 w-[300px]"
          />
          <h2
            className={cn(
              "absolute left-[80px] top-4 text-3xl italic leading-none tracking-tighter",
              `${lora.className}`,
            )}
          >
            {pavuk_putnik.heading}
          </h2>
        </div>
        <div className="absolute -z-10 h-full w-full sm:w-[500px]">
          <div className="absolute -bottom-[120px] h-[500px] w-full sm:h-[calc(100%-120px)] sm:w-[500px]">
            {/* <Image
              src={rippedlines}
              alt="paper"
              aria-hidden
              className="absolute top-0 h-full w-full object-cover sm:w-[500px]"
            /> */}
            {/* <Image
              src={paperlines}
              alt="paper"
              aria-hidden
              className="absolute left-1/2 top-0 h-full w-[350px] -translate-x-1/2 sm:left-[50px] sm:w-[400px] sm:translate-x-0"
            />
            <div
              className="pointer-events-none absolute h-full w-full bg-gradient-to-t from-black/30 to-transparent sm:w-[500px]"
              aria-hidden={true}
            ></div>
            <div
              className="pointer-events-none absolute h-full w-full bg-gradient-to-t from-black/60 to-transparent sm:w-[500px]"
              aria-hidden={true}
            ></div> */}
          </div>
          <div className="absolute -bottom-[120px] isolate h-[500px] w-full -rotate-1 flex-col sm:h-[calc(100%-120px)] sm:w-[500px]">
            <div
              className="scroller-none relative left-1/2 top-[68px] z-10 h-[230px] w-[350px] max-w-lg -translate-x-1/2 self-center overflow-auto sm:left-36 sm:translate-x-0"
              ref={poemContainer}
            >
              <ul
                ref={list}
                className="ml-16 mt-12 flex flex-col gap-7 sm:ml-0 sm:gap-[30px]"
              >
                {pavuk_putnik.poem.map((block) => (
                  <li key={block.id}>
                    <p>
                      {block.lines.map((line, i) => (
                        <span
                          key={i}
                          className="line block text-xl leading-[1.8] sm:text-2xl sm:leading-[1.58]"
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={paperlines}
              alt="paper"
              aria-hidden
              className="absolute left-1/2 top-0 h-full w-[350px] -translate-x-1/2 sm:left-[50px] sm:w-[460px] sm:translate-x-0"
            />
            <div
              className="pointer-events-none absolute h-full w-full bg-gradient-to-t from-black/30 to-transparent sm:left-[50px] sm:w-[455px]"
              aria-hidden={true}
            ></div>
            <div
              className="pointer-events-none absolute h-full w-full bg-gradient-to-t from-black/60 to-transparent sm:left-[50px] sm:w-[455px]"
              aria-hidden={true}
            ></div>
          </div>
        </div>
      </section>
      <div className="relative z-0 flex h-full flex-1">
        {/* <div className="relative">
          <Image
            src={rippedlines}
            alt="paper"
            aria-hidden
            className="w-[300px] object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={rippedlines}
            alt="paper"
            aria-hidden
            className="w-[300px] object-cover"
          />
        </div> */}
      </div>
      <Image
        src={trava}
        alt="trava"
        aria-hidden
        className="fixed bottom-[-20px] left-[0px] z-40 w-[600px] scale-x-[-1]"
      />
      <Image
        src={trava}
        alt="trava"
        aria-hidden
        className="fixed bottom-[-20px] left-[580px] z-40 w-[600px]"
      />
      <Image
        src={trava}
        alt="trava"
        aria-hidden
        className="fixed bottom-[-20px] left-[1180px] z-40 w-[600px] scale-x-[-1]"
      />
      <div className="pointer-events-none absolute inset-0 isolate z-10">
        <Image
          src={sarkanimg}
          alt="sarkan"
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 -z-10 w-[140px] -translate-x-full"
          ref={sarkan}
        />

        <Image
          src={smallhouse}
          alt="smallhouse"
          aria-hidden
          className="fixed bottom-[30px] right-[165px] z-10 max-h-screen w-[170px]"
        />
        <Image
          src={smallhouse}
          alt="smallhouse"
          aria-hidden
          className="fixed bottom-[30px] right-[300px] z-30 max-h-screen w-[200px]"
        />
        <Image
          src={tallhouse}
          alt="tallhouse"
          aria-hidden
          className="fixed bottom-[-20px] right-[0px] z-10 max-h-screen w-[120px]"
        />
        <Image
          src={hills}
          alt="hills"
          aria-hidden
          className="absolute bottom-[0px] right-[490px] z-10 w-[400px]"
        />
        <Image
          src={hill1}
          alt="hill1"
          aria-hidden
          className="absolute bottom-[0px] right-[650px] z-10 w-[400px]"
        />
        <Image
          src={hill1}
          alt="hill1"
          aria-hidden
          className="absolute bottom-[0px] right-[950px] z-10 w-[400px] scale-x-[-1]"
        />
        <Image
          src={hill1}
          alt="hill1"
          aria-hidden
          className="absolute bottom-[20px] right-[80px] z-0 w-[200px] scale-x-[-1]"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[0px] absolute right-0 top-[20px] z-10 w-28 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[100px] absolute right-0 top-[15px] z-10 w-32 translate-x-full"
        />
        <Image
          src={mrak1}
          alt="mrak"
          aria-hidden
          className="mrak //right-[240px] absolute right-0 top-[50px] z-0 w-24 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[300px] absolute right-0 top-[20px] z-10 w-24 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[500px] absolute right-0 top-[40px] z-10 w-20 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[560px] absolute right-0 top-[40px] z-10 w-16 translate-x-full"
        />
        <Image
          src={mrak1}
          alt="mrak"
          aria-hidden
          className="mrak //right-[686px] absolute right-0 top-[30px] z-0 w-16 translate-x-full"
        />
        <Image
          src={mrak1}
          alt="mrak"
          aria-hidden
          className="mrak //right-[620px] absolute right-0 top-[20px] z-0 w-12 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[720px] absolute right-0 top-[20px] z-0 w-12 translate-x-full"
        />
        <Image
          src={mrak2}
          alt="mrak"
          aria-hidden
          className="mrak //right-[890px] absolute right-0 top-[10px] z-0 w-20 translate-x-full"
        />
      </div>
      <Image
        src={skies}
        alt="skies"
        aria-hidden
        className="absolute right-[0px] top-[0px] z-0 object-cover"
      />
      {/* </div> */}
    </main>
  );
}
