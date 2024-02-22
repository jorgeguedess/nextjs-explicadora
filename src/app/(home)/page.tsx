import { SectionChoice } from "@/components/section-choice";
import { Slider } from "./components/slider";
import { SectionAbout } from "@/components/section-about";
import { SectionGallery } from "@/components/section-gallery";

export default function Home() {
  return (
    <>
      <Slider />
      <SectionChoice />
      <SectionAbout />
      <SectionGallery />
    </>
  );
}
