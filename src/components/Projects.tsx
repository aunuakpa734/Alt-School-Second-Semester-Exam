import { ExternalLink, Github, Truck, Bell, Sparkles, Rocket, Star, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AgroXpress MVP",
      description: "A logistics web service prototype connecting farmers to markets using real-time logistics and digital aggregation. Reducing food waste and empowering smallholder farmers.",
      icon: <Truck className="w-6 h-6" />,
      featured: true,
      tags: ["Spring Boot", "PostgreSQL", "Microservices", "Agritech"],
      status: "MVP Complete",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      title: "Account Notification System",
      description: "Kafka-based SMS/Email alert system that sends real-time notifications for account transactions, ensuring users stay informed about their financial activities.",
      icon: <Bell className="w-6 h-6" />,
      tags: ["Kafka", "RabbitMQ", "Spring Boot", "Microservices"],
      status: "Live System",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    }
  ];

  return (
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-emerald-900/10 dark:to-blue-900/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-36 h-36 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-bounce" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-700 to-blue-700 dark:from-white dark:via-emerald-300 dark:to-blue-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-world applications showcasing my expertise in
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> backend development</span> and
              <span className="font-semibold text-blue-600 dark:text-blue-400"> problem-solving</span>
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="border-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative rounded-lg shadow-lg">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="pb-6 relative z-10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 px-4 py-2 text-sm font-bold shadow-lg rounded-full inline-flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Featured Project
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 font-semibold px-3 py-1 rounded-full inline-flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      AgroXpress
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent font-bold leading-tight">
                  The Future of AgroXpress – Smart Food Distribution for Africa
                </h3>
              </div>
              <div className="relative z-10 px-6 pb-6">
                <div className="p-6 bg-gradient-to-br from-white/50 to-emerald-50/30 dark:from-slate-800/50 dark:to-emerald-900/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-800/30 backdrop-blur-sm mb-8">
                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg leading-relaxed">
                    AgroXpress is revolutionizing how fresh produce moves from rural farms to urban markets using
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400"> real-time logistics</span> and
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> digital aggregation</span>.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    By reducing food waste, empowering smallholder farmers, and improving affordability, AgroXpress aims to make Nigeria's food system smarter, fairer, and more sustainable.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["Spring Boot", "PostgreSQL", "Microservices", "Kafka", "Docker", "Agritech"].map((tech, index) => (
                      <span key={tech} className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 border-0 px-4 py-2 font-semibold hover:shadow-md transition-shadow duration-300 rounded-full">
                    {tech}
                  </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg inline-flex items-center justify-center">
                    <Github className="w-5 h-5 mr-3" />
                    View Code
                    <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="border-2 border-emerald-500/30 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-6 text-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 rounded-lg bg-transparent">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
                <div key={index} className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">{project.status}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>
                    <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;