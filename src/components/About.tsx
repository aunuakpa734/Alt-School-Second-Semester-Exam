
import { GraduationCap, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about leveraging technology to solve real-world problems in agriculture and food systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Unuakpa Naomi, a passionate Java backend developer with a growing portfolio of real-world applications in Spring Boot, RESTful APIs, and microservices architecture.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I hold a BSc in Biology from Federal University Otuoke and have transitioned into tech through intensive programs like ALX Virtual Assistant Training and the Chisom Nwokwu Tech Scholarship Fund (Backend Engineering Track).
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Java Developer</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agritech</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Microservices</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground text-sm">BSc Biology, Federal University Otuoke</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Training</h3>
                    <p className="text-muted-foreground text-sm">ALX Virtual Assistant Training</p>
                    <p className="text-muted-foreground text-sm">Chisom Nwokwu Tech Scholarship Fund</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Passion</h3>
                    <p className="text-muted-foreground text-sm">Revolutionizing agriculture through technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
