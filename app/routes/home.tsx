import type { Route } from "./+types/home";
import Header from "~/Components/Header";
import Classes from "~/Components/Classes";
import About from "~/Components/About";
import Testimonials from "~/Components/Testimonials";
import Contact from "~/Components/Contact";
import Footer from "~/Components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <Header />
    <Classes />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
}