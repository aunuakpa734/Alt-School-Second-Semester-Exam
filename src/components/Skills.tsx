import { Database, Server, Code, MessageSquare, GitBranch, Settings, Sparkles, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Database & ORM",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-500/20",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "JPA/Hibernate", level: 80 },
        { name: "JDBC", level: 78 }
      ]
    },
    {
      title: "Message Queues",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "Apache Kafka", level: 75 },
        { name: "RabbitMQ", level: 70 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 90 },
        { name: "AWS", level: 70 },
        { name: "Azure", level: 70 },
        { name: "Google Cloud", level: 70 }
      ]
    }
  ];

  const workMethodologies = [
    {
      name: "Agile Development",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      name: "Remote Collaboration",
      icon: <GitBranch className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      name: "Test-Driven Development",
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-pink-50/20 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
              Skills & Tools
            </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building
              <span className="font-semibold text-blue-600 dark:text-blue-400"> robust</span>,
              <span className="font-semibold text-purple-600 dark:text-purple-400"> scalable</span> backend solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
                <Card key={index} className={`border-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <span className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div
                                  className={`bg-gradient-to-r ${category.gradient} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                                  style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </CardContent>
                </Card>
            ))}
          </div>

          <Card className="border-0 bg-gradient-to-br from-slate-100/80 via-blue-50/50 to-indigo-50/30 dark:from-slate-800/80 dark:via-slate-700/50 dark:to-indigo-900/20 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 dark:from-white dark:to-indigo-300 bg-clip-text text-transparent flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Work Methodologies
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {workMethodologies.map((method, index) => (
                    <div key={index} className={`flex items-center gap-4 p-6 bg-gradient-to-br ${method.bgGradient} rounded-2xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                      <div className={`p-3 bg-gradient-to-r ${method.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {method.name}
                  </span>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
  );
};

export default Skills;