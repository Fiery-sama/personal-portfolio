import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container w-full p-12 mx-auto text-center">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold">Hi, I&apos;m</h3>
        <h1 className="text-8xl font-black p-6">Suhail Khan</h1>
        <h4 className="text-4xl px-6">
          I am a <span className="text-red-600 underline">Full-Stack Developer</span>
        </h4>
      </div>
      <div className="container w-full mx-auto text-center justify-center items-center p-8">
        <Link
          href="/docs/suhail_khan_resume.pdf"
          download={"Suhail-Khan-CV.pdf"}
          className="bg-red-600 text-white px-6 py-3 rounded-3xl hover:bg-red-700 font-bold text-lg hover:shadow-lg hover:shadow-red-500/20 transition-shadow duration-300"
        >
          Download CV
        </Link>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
