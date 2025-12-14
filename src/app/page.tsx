import FeaturedProjects from "$dev/contents/home/FeaturedProjects";
import Hero from "$dev/contents/home/Hero";
import MiniIntro from "$dev/contents/home/MiniIntro";
import NowLearning from "$dev/contents/home/NowLearning";
import Skills from "$dev/contents/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <MiniIntro />
      <Skills />
      <FeaturedProjects />
      <NowLearning />
    </>
  );
}
