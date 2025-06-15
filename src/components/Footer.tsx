import { Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="py-16 px-4 relative overflow-hidden">
        {/* Background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-emerald-900/10 dark:to-blue-900/10"></div>
        <div className="absolute inset-0 border-t border-emerald-200/30 dark:border-emerald-800/30"></div>

        {/* Floating background elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
            </div>

            {/* Enhanced heading with gradient */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-700 to-blue-700 dark:from-white dark:via-emerald-300 dark:to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to discuss your next project or explore opportunities in
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> backend development</span> and
              <span className="font-semibold text-blue-600 dark:text-blue-400"> agritech innovation</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:naomieloor@gmail.com" className="group bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg inline-flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                Email Me
              </a>

              <a href="https://linkedin.com/in/naomi-unuakpa" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg inline-flex items-center">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </a>

              <a href="https://github.com/Naomiel" target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-500/30 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 py-4 text-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm inline-flex items-center">
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </a>
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="border-t border-emerald-200/30 dark:border-emerald-800/30 pt-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Unuakpa Naomi
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  Aspiring Cloud Engineer |
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> Agritech Innovator</span>
                </p>
              </div>

              <div className="text-center md:text-right text-slate-600 dark:text-slate-300">
                <p className="font-medium">&copy; 2025 Unuakpa Naomi. All rights reserved.</p>
                <p className="text-sm">
                  Built with
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> React</span>,
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400"> TypeScript</span> &
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> Tailwind CSS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;