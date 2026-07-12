import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Features from "./components/Features";
import Parallax from "./components/Parallax";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Loaded on-demand instead of bundled into the initial page load
const Watch3D = lazy(() => import("./components/Watch3D"));

function App() {
  return (
    <div className="bg-[#090909] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-[32vh] sm:h-[46vh] md:h-[70vh] w-full bg-[#090909]" />}>
        <Watch3D />
      </Suspense>
      <Featured />
      <Features />
      <Parallax />
      <Story />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;