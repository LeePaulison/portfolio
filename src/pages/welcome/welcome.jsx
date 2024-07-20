import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Who } from "./components/who";

export const Welcome = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Who />
    </>
  );
};
