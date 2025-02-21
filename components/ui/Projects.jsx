const Projects = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-16 text-center mx-auto">
          My Latest Work
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 bg-white dark:bg-accent">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-x-4">
                  <Link 
                    href={project.link} 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href={project.github} 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 