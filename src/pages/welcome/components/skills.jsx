// component
import { Skill } from "./skill";
// data
import skills from "../../../assets/data/skills.json";

export function Skills() {
  console.log(skills);

  return (
    <div className='flex flex-row justify-center items-center flex-wrap py-16 px-8'>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
}
