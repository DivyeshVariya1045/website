import { Inter } from "next/font/google";
import About from "@/componet/About";
import PeopleSay from "@/componet/PeopleSay";
import Header from "@/componet/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <Header/>
      <About />

      <PeopleSay />
    </>
  );
}
