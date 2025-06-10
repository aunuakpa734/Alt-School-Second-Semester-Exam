import { ExternalLink, Github, Truck, Wallet, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "AgroXpress MVP",
      description: "A logistics web service prototype connecting farmers to markets using real-time logistics and digital aggregation. Reducing food waste and empowering smallholder farmers.",
      icon: <Truck className="w-6 h-6" />,
      featured: true,
      tags: ["Spring Boot", "PostgreSQL", "Microservices", "Agritech"],
      status: "MVP Complete"
    },
    {
      title: "Multi-Currency Wallet API",
      description: "For meCash Assessment - A comprehensive wallet system built with Spring Boot, REST APIs, and JWT authentication for secure financial transactions.",
      icon: <Wallet className="w-6 h-6" />,
      tags: ["Spring Boot", "REST API", "JWT", "MySQL"],
      status: "Production Ready"
    },
    {
      title: "Account Notification System",
      description: "Kafka-based SMS/Email alert system that sends real-time notifications for account transactions, ensuring users stay informed about their financial activities.",
      icon: <Bell className="w-6 h-6" />,
      tags: ["Kafka", "RabbitMQ", "Spring Boot", "Microservices"],
      status: "Live System"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in backend development and problem-solving
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
                <Badge variant="outline">🚀 AgroXpress</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                The Future of AgroXpress – Smart Food Distribution for Africa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                AgroXpress is revolutionizing how fresh produce moves from rural farms to urban markets using real-time logistics and digital aggregation. By reducing food waste, empowering smallholder farmers, and improving affordability, AgroXpress aims to make Nigeria's food system smarter, fairer, and more sustainable.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Spring Boot", "PostgreSQL", "Microservices", "Kafka", "Docker", "Agritech"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="group">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline">
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge variant="outline">{project.status}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
