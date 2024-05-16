// react
import { useEffect, useState } from "react";
// component
import { Skill } from "./skill";
// data
import skills from "../../../assets/data/skills.json";

export function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 510) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("Skills -> isMobile", isMobile);

  return (
    <div className='flex flex-row justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap py-16 px-8'>
      {isMobile ? (
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-center'>Skills</h1>
          <div className='max-w-[80%]'>
            <p className='text-lg'>Here are some of the technologies I&apos;ve worked with.</p>
            <ul className='self-start list-disc list-inside'>
              {skills.map((skill) => (
                <li key={crypto.randomUUID()}>{skill.technology}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </>
      )}
    </div>
  );
}
