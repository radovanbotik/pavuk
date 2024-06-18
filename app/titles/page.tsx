"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { cn } from "../lib/helpers";
import { pt_mono } from "../lib/fonts";

import trnava from "../../public/images/trnava.jpg";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, TextPlugin);
}

const titles = [
  { title: "Trnava", image: trnava },
  { title: "Zvonárik Tadeáš", image: trnava },
  { title: "Igricova pieseň", image: trnava },
  { title: "Sestra Izabela", image: trnava },
  { title: "Janičiar", image: trnava },
  { title: "Majster Jakub", image: trnava },
  { title: "Ondrej a Ráchel", image: trnava },
  { title: "Anntónio Spazzo", image: trnava },
  { title: "Mlynárová dcéra", image: trnava },
  { title: "Sambucusov dom", image: trnava },
  { title: "Katovo šťastie", image: trnava },
  { title: "Sedem koscov", image: trnava },
  { title: "Požiar", image: trnava },
  { title: "Pekárová láska", image: trnava },
  { title: "Hlas zvonu", image: trnava },
];

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  const colors = [
    "bg-stone-100",
    "bg-stone-200",
    "bg-stone-300",
    "bg-stone-400",
    "bg-stone-500",
    "bg-stone-600",
    "bg-stone-700",
    "bg-stone-800",
    "bg-stone-900",
  ];

  //   useGSAP(
  //     () => {
  //       tl.current = gsap.timeline({ onComplete: () => setIsLoading(false) });
  //       // .pause();
  //       titles.forEach((title, i) =>
  //         tl.current.to(word.current, {
  //           duration: i === titles.length - 1 ? 2 : 1,
  //           text: i === titles.length - 1 ? titles[0] : titles[i + 1],
  //           ease: "none",
  //         }),
  //       );
  //       tl.current.to(container.current, {
  //         opacity: 0,
  //         duration: 2,
  //       });
  //     },
  //     { scope: container.current },
  //   );

  return (
    <>
      <div ref={container} className={cn("", `${pt_mono.className}`)}>
        <p>
          {titles.map((title, i) => (
            <div key={i} className="inline">
              <span>{title.title}</span>
              <span>, </span>
              <Image
                src={trnava}
                width={trnava.width}
                height={trnava.height}
                alt={title.title}
                className="absolute"
              />
            </div>
          ))}
        </p>
      </div>
    </>
  );
}
