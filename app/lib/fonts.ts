import {
  Courier_Prime,
  Italiana,
  PT_Mono,
  Lora,
  Six_Caps,
  Archivo_Narrow,
  Source_Sans_3,
  Nixie_One,
  Coustard,
  Alfa_Slab_One,
  Libre_Baskerville,
  League_Spartan,
} from "next/font/google";
export const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const italianna = Italiana({
  subsets: ["latin"],
  weight: ["400"],
});
export const pt_mono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

// PAIRING  #1
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

// PAIRING  #2
export const six_caps = Six_Caps({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
export const archivo_narrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});
export const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// PAIRING  #3
export const alfa_slab_one = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const coustard = Coustard({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const nixie_one = Nixie_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

//PAIRING #4
export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});
