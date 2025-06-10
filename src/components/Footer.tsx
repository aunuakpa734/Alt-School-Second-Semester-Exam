
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to discuss your next project or explore opportunities in backend development and agritech innovation
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg">Unuakpa Naomi</h3>
              <p className="text-muted-foreground">Aspiring Backend Engineer | Agritech Innovator</p>
            </div>
            
            <div className="text-center md:text-right text-muted-foreground">
              <p>&copy; 2024 Unuakpa Naomi. All rights reserved.</p>
              <p className="text-sm">Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
