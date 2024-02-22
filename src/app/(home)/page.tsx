import { Slider } from "./components/slider";
import { SectionChoice } from "@/components/section-choice";
import { SectionAbout } from "@/components/section-about";
import { SectionGallery } from "@/components/section-gallery";
import { SectionDoubts } from "@/components/section-doubts";
import { SectionForm } from "@/components/section-form";

export default function Home() {
  return (
    <>
      <Slider />
      <SectionChoice />
      <SectionAbout />
      <SectionGallery />
      <SectionDoubts />
      <SectionForm />
    </>
  );
}
