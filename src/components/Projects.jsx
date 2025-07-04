import { RevealOnScroll } from "./RevealOnScroll"


export const Projects = () => {
    return <section id="projects" className="min-h-screen items-center justify-center py-20 flex">

    <RevealOnScroll>
        <div className="max-w-5rxl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                Featured Projects
            </h2>
            
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white.10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        Password Generator
                    </h3>
                    <p className="text-gray-400 mb-4">Built a secure pg using React.</p>
                    <div>
                        {["React", "Node.js", "TailwindCSS"].map((tech,key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Projects :-</a>

                    </div>
                </div>


                <div className="p-6 rounded-xl border border-white.10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        To Do List
                    </h3>
                    <p className="text-gray-400 mb-4">Built a secure pg using React.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "TailwindCSS"].map((tech,key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Projects :-</a>

                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white.10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        Chatbot
                    </h3>
                    <p className="text-gray-400 mb-4">A responsive chatbot built using React and styled using Tailwind CSS, featuring a clean UI for real-time user-bot interaction..</p>
                    <div>
                        {["React", "Node.js", "TailwindCSS"].map((tech,key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Projects :-</a>

                    </div>
                </div>


            </div>

        </div>
        </RevealOnScroll>
    </section>
}