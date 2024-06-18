"use client";
import trnava from "../../public/images/trnava.jpg";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { cn } from "../lib/helpers";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, TextPlugin);
}

type Option = {
  id: number;
  title: string;
  image: StaticImageData;
};

const options = [
  {
    id: 1,
    title: "This is a title",
    image: trnava,
  },
  {
    id: 2,
    title: "This is a title",
    image: trnava,
  },
  {
    id: 3,
    title: "This is a title",
    image: trnava,
  },
  {
    id: 4,
    title: "This is a title",
    image: trnava,
  },
];

function Column(props: Option) {
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };
  useGSAP(
    () => {
      //   tl.current = gsap.timeline({ onComplete: () => setIsLoading(false) });
      //   titles.forEach((title, i) =>
      //     tl.current.to(word.current, {
      //       duration: i === titles.length - 1 ? 2 : 1,
      //       text: i === titles.length - 1 ? titles[0] : titles[i + 1],
      //       ease: "none",
      //     }),
      //   );
      //   tl.current.to(container.current, {
      //     opacity: 0,
      //     duration: 2,
      //   });
    },
    { scope: container.current },
  );

  return (
    <div className="group relative h-full w-full cursor-pointer [perspective:400px]">
      <div className="relative isolate flex h-full w-full flex-col items-center justify-around overflow-hidden border-r border-r-black bg-stone-300 ease-in">
        <div className="clip-none group-hover:clip-full absolute inset-0 -z-10 h-full w-full scale-125 overflow-hidden opacity-0 transition-[clip-path,transform] duration-1000 group-hover:top-0 group-hover:scale-100 group-hover:opacity-100">
          <Image
            src={trnava}
            alt={props.title}
            className="absolute inset-0 h-full w-full object-cover"
            placeholder="blur"
            onLoad={() =>
              console.log(`image ${props.id} has finished loading.`)
            }
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
            aria-hidden={true}
          ></div>
          <div
            className="pointer-events-none absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"
            aria-hidden={true}
          ></div>
        </div>
        <p className="text-center text-3xl font-bold capitalize leading-[0.9] group-hover:text-white">
          {props.title}
        </p>
        <p className="text-center text-9xl font-bold capitalize leading-[0.9] text-red-500">
          {props.id}
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative flex h-full w-full">
      <div className="fixed left-0 top-0 z-10 w-full">
        <div className="flex w-full items-center justify-between px-4 py-2 text-black">
          <span className="text-2xl">Logo</span>
          <span className="text-2xl">This is name</span>
          <span className="text-2xl">menu</span>
        </div>
      </div>
      {options.map((option) => (
        <Column key={option.id} {...option} />
      ))}
    </div>
  );
}
