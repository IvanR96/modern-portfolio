import { ExternalLink, Github, GithubIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "The Webdev Blog",
        description: "A real world example using JS, Node.js, EJS and Bootstrap",
        image: "/projects/project1.png",
        tags: ["Javascript", "Node.js", "EJS", "Bootstrap CSS"],
        demoUrl: "https://blog-app-vlj7.onrender.com/",
        githubUrl: "https://github.com/IvanR96/blog-app",
    },
    {
        id: 2,
        title: "Rapid Movers",
        description: "A beautiful simple page for a moving company",
        image: "/projects/project2.png",
        tags: ["Javascript", "Bootstrap CSS"],
        demoUrl: "https://ivanr96.github.io/bootstrap-components/",
        githubUrl: "https://github.com/IvanR96/bootstrap-components",
    },
    {
        id: 3,
        title: "Sparkmatch",
        description: "Simple user friendly social connection website focusing on simplicity",
        image: "/projects/project3.png",
        tags: ["Javascript", "Bootstrap CSS"],
        demoUrl: "https://ivanr96.github.io/tindog/",
        githubUrl: "https://github.com/IvanR96/tindog",
    },
]

export const ProjectsSection = () =>{
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl mb-4 md:text-4xl font-bold text-center">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some recent projects showing scenarios where simplicity and functionality are 
                shown to showcase what I could make in the real world as a developer
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-44 overflow-hidden">
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github /></a>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
    );
};