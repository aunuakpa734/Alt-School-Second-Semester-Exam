import { ArrowRight, Code, Sprout, Download, Sparkles, Cloud, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Agritech Innovator & Cloud Enthusiast
            </span>
              <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
            </div>

            {/* Enhanced Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Unuakpa Naomi
            </span>
              <br />
              <span className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              Backend Engineer | Cloud & Agritech Enthusiast
            </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Building the future of food distribution in Africa through
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> smart logistics</span> and
              <span className="font-semibold text-blue-600 dark:text-blue-400"> digital innovation</span>
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" asChild>
              <a href="#projects">
                <Code className="w-5 h-5 mr-3" />
                View Projects
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-6 text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:-translate-y-1 transition-all duration-300" asChild>
              <a href="/resume.pdf" download="Naomi-Resume.pdf">
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Backend Projects</div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Java</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Primary Language</div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">BSc</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Biology Graduate</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;