import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Who } from "./components/who";

export const Welcome = () => {
  return (
    <div className='overflow-y-auto'>
      <Hero />
      <Skills />
      <Projects />
      <Who />
    </div>
  );
};
