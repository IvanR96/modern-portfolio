import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About  <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Problem Solving Developer</h3>

                    <p className="text-muted-foreground">
                        I'm a self-taught developer, my learning comes from building—experimenting, breaking things, fixing them, and improving with every project. 
                        I love the challenge of figuring out how something works and pushing myself to create solutions that are simple, scalable, and useful.
                        Right now, I’m focused on sharpening my skills, building practical applications, and growing into a developer who creates software that actually helps people.

                    </p>

                    <p className="text-muted-foreground">
                        Whether I’m designing a smooth UI or building the logic behind it, I focus on writing code that solves problems and makes people’s lives easier. 
                        I believe the best software should look good, feel great to use, and solve real needs.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="/Ivan_Rios_Resume.pdf" download="Ivan_Rios_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors  duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Code className="h-6 w-6 text-primary"/> 
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive websites with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <User className="h-6 w-6 text-primary"/> 
                            </div>

                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                <p className="text-muted-foreground">Designing simple and clean user experiences making websites can be easy to navigate.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Briefcase className="h-6 w-6 text-primary"/> 
                            </div>

                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">Leading projects from start to finish by using agile methodologies.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    );
};