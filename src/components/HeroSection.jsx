import { ArrowBigDownDashIcon, ArrowDown, ArrowDown01, ArrowDownCircle, ArrowDownCircleIcon, ArrowDownNarrowWideIcon } from "lucide-react"

export const HeroSection = () =>{
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-width-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, Im </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ivan </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Rios </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I create web experiences with modern technologies. Focusing on front-end devlopment and back-end development,
                    I create websites that make user experiences easy and helpful solving real world problems with real world coding solutions. 
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>


            </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
            <ArrowDownCircle className=" h-7 w-7 text-primary"/>
        </div>
    </section>
}