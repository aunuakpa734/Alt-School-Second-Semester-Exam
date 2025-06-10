
import { Database, Server, Code, MessageSquare, GitBranch, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
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
      skills: [
        { name: "Apache Kafka", level: 75 },
        { name: "RabbitMQ", level: 70 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 90 }
      ]
    }
  ];

  const workMethodologies = [
    { name: "Agile Development", icon: <Code className="w-5 h-5" /> },
    { name: "Remote Collaboration", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Test-Driven Development", icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Work Methodologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {workMethodologies.map((method, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {method.icon}
                  </div>
                  <span className="font-medium">{method.name}</span>
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
