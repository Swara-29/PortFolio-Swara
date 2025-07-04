
import { RevealOnScroll } from "./RevealOnScroll"
export const Home = () => {
    return <section 
    id="home"
    className="min-h-screen flex items-center justify-center relative">

    <RevealOnScroll>
    <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600  bg-clip-text text-transparent leading-right">
            Hi, I'm Swara
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a passionate frontend developer with a strong focus on building clean, responsive, and user-friendly interfaces.
            I specialize in translating design into interactive, accessible, and performant web experiences using technologies 
            like HTML, CSS, JavaScript, React, and Tailwind CSS.I love turning ideas into digital products and thrive on bringing 
            intuitive user experiences to life. Whether it’s a sleek landing page, a dynamic web app, or a pixel-perfect component, 
            I’m always up for the challenge.

            </p>

            <div className="flex justify-center space-x-4 ">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,230,246,0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border-blue-50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,230,246,0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>



            </div>
    </div>
    </RevealOnScroll>

    </section>
}