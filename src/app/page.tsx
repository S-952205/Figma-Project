import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Recent from "./components/recent";
import Feature from "./components/feature";

export default function Home() {
  return (
      <div>
       <Hero/>
       <Recent/>
       <Feature/>
      </div>
  );
}
