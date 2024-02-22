import { SectionChoice } from "@/components/section-choice";
import { Slider } from "./components/slider";
import { SectionAbout } from "@/components/section-about";

export default function Home() {
  return (
    <>
      <Slider />
      <SectionChoice />
      <SectionAbout />
    </>
  );
}
