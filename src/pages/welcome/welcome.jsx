import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

export const Welcome = () => {
  return (
    <div className='overflow-y-auto'>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};
