
import { ArrowRight, Code, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/50 rounded-full px-4 py-2 mb-6">
            <Sprout className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Agritech Innovator</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">Unuakpa Naomi</span>
            <br />
            <span className="text-muted-foreground">Aspiring Backend Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building the future of food distribution in Africa through smart logistics and digital innovation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            <Code className="w-4 h-4 mr-2" />
            View Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Backend Projects</div>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-primary mb-2">Java</div>
            <div className="text-muted-foreground">Primary Language</div>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-primary mb-2">BSc</div>
            <div className="text-muted-foreground">Biology Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
