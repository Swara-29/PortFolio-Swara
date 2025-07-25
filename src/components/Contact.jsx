import { RevealOnScroll } from "./RevealOnScroll"


export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
         <RevealOnScroll>
            <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                Get In Touch
            </h2>
            
            <form className="space-y-6">
                <div className="relative">
                    <input type="text" id="name" name="name " required className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50" 
                    placeholder="name..."
                    />
                </div>

                <div className="relative">
                    <input type="email" id="email" name="email " required className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50" 
                    placeholder="mail@gmail.com..."
                    />
                </div>

                <div className="relative">
                    <input type="textarea" id="message" name="message " required rows={5} className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50" 
                    placeholder="your message..."
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba[59,130,246,0.4">
                    Send the Message
                </button>

            </form>
            </div>
         </RevealOnScroll>
    </section>
}