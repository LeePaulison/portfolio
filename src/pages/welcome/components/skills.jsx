// component
import { Skill } from "./skill";
// data
import skills from "../../../assets/data/skills.json";

export function Skills() {
  return (
    <div className='flex flex-row justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap py-16 px-8'>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
}
