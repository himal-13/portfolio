import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsGithub } from "react-icons/bs"
import { FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
    const[projects]= useState([
        {image:'/images/social-app.png',title:'Social Media app',github:'https://github.com/himal-13/linkdin-clone',website:'https://linkdin-clone-nine.vercel.app',
            details:'A Fullstack social media app in React,Firebase. Users can add, edit, delete, like , comment, save posts. Users can also follow, unfollow other users and many more.'},
        {image:'/images/movie-app.png',title:'Movie app',github:'https://github.com/himal-13/movies-app',website:'https://movie-app-pi-lemon.vercel.app/',
          details:'A Movie app to search any movies,genres, add to and remove from favorites,rate & reviews, watch history and many more.',},
          {image:'/images/code-editor.png',title:'Code editor',github:"https://github.com/himal-13/code-editor",website:"https://code-editor-ebon-theta.vercel.app/",
            details:'Full stack code editor with auth, database etc. Where users can contribute to same project.'},
        {image:'/images/quiz-game.png',title:"Quiz Game", github:'https://github.com/himal-13/quiz-game-web',website:'https://quiz-game-web.vercel.app/',
          details:'A Quiz game where user can play in different levels, and compare scores. Each level is more difficult than previous.'},
        {image:'/images/daily-posts.png',title:'Daily Posts',github:"https://github.com/himal-13/daily-posts/tree/main/daily-posts",website:"https://daily-posts-eight.vercel.app/",
            details:'A Social media app without backend logic. Users can post, edit, delete, like and follow other.'},

    ])
    return (
        <main className="py-[5vh] w-full flex flex-col justify-center items-center gap-[5vh] bg-gray-100 mb-[5vh]" id="projects">
            <h1 className="text-5xl border-b-8 border-purple-600 rotate-[-10deg] md:my-[10vh] mb-[10vh] sm:mb-[5vh]">Projects</h1>
            <div className=" gap-6 max-w-[70vw] mx-auto sm:scale-100 scale-[1.2] sm:m-0 my-[10vh]">
                        {projects.map((proj,index)=>(
                            <div className="flex flex-col sm:flex-row gap-4 items-center my-[5vh] border-[1px] border-gray-400 rounded-md p-4" key={index}>
                                <div className="">
                                <h3 className="sm:hidden text-3xl text-center text-gray-900 font-bold">{proj.title}</h3>
                                <Image alt="" src={`${proj.image}`} height={900} width={1000} className=""/>
                                {/* <h4 className="md:text-3xl sm:text-xl text-sm flex sm:flex-row flex-col items-center justify-between py-2 mx-2"><span>{proj.title}</span><span className="flex gap-3 text-purple-900"><Link href={`${proj.github}`} target="_blank"><BsGithub /></Link><Link href={`${proj.website}`} target="_blank"><FaExternalLinkAlt /></Link></span></h4>
                                //  */}
                                </div>
                                <div className="px-2">
                                    <h3 className="hidden sm:block text-3xl text-center text-gray-900 font-bold">{proj.title}</h3>
                                    <p className=" text-xs sm:text-sm sm:px-4 text-gray-600">{proj.details}</p>
                                    <div className="flex gap-2 justify-center">
                                        <Link href={proj.github} className=" text-2xl p-2 rounded-md  hover:text-gray-600" target="_blank"><BsGithub/></Link >
                                        <Link href={proj.website} className=" text-2xl p-2 rounded-md  hover:text-gray-600" target="_blank"><FaExternalLinkAlt /></Link >
                                    </div>
                                </div>
                            </div>
                        ))}

            </div>
        </main>
    )
}

export default Projects
