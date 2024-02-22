import { Slider } from "./components/slider";
import { SectionChoice } from "@/components/section-choice";
import { SectionAbout } from "@/components/section-about";
import { SectionGallery } from "@/components/section-gallery";
import { SectionDoubts } from "@/components/section-doubts";

export default function Home() {
  return (
    <>
      <Slider />
      <SectionChoice />
      <SectionAbout />
      <SectionGallery />
      <SectionDoubts />
    </>
  );
}
