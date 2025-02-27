import { useState } from "react";
import { DiCss3,  DiHtml5, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRemix, SiTypescript } from "react-icons/si";

const Skills =()=>{
    const[skillsItems]= useState([
        { icon: <DiHtml5 />,text:'HTML'},{ icon: <DiCss3/>,text:'CSS'},{ icon: <RiJavascriptFill/>,text:'JavaScript'},{ icon: <DiReact/>,text:'React'},
        { icon: <RiNextjsFill/>,text:'Next JS'},{ icon: <RiTailwindCssFill/>,text:'Tailwind CSS'},{ icon: <SiTypescript/>,text:'TypeScript'},{icon:<IoLogoFirebase />,text:"Firebase"},{ icon: <SiRemix/>,text:'Remix JS'},

    ])
    return(
        <main className="h-[60vh]  md:h-[100vh] bg-gray-200 w-full flex flex-col justify-center gap-[5vh] items-center" id="skills">
            <h1 className="text-5xl border-b-8 border-purple-600 rotate-[-10deg] ">Skills</h1>
            <div >
                <section className="text-gray-600 md:text-9xl text-6xl grid grid-cols-3 gap-6 all-skills mx-6 cursor-none">
                    {skillsItems.map((skill,index)=>(
                        <div className="hover:text-purple-700 flex flex-col justify-center items-center transition-all hover:skew-x-6" key={index}>
                            {skill.icon}
                            <h4 className="md:text-3xl text-xl text-black font-bold">{skill.text}</h4>
                        </div>
                    ))}
                    
                </section>
            </div>

        </main>
    )
}

export default Skills;
