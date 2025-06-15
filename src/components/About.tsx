import { GraduationCap, Heart, Target, Sparkles, Code2, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get To Know Me
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
              About Me
            </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about leveraging technology to solve real-world problems in
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> agriculture</span> and
              <span className="font-semibold text-blue-600 dark:text-blue-400"> food systems</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  I'm <span className="font-bold text-blue-600 dark:text-blue-400">Unuakpa Naomi</span>, a backend engineer with a strong interest in
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> cloud computing</span> and building scalable
                  web solutions. With a BSc in Biology from Federal University Otuoke and hands-on experience in software
                  development, I've worked on projects ranging from fintech systems to logistics platforms.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      Cloud Engineering Aspirations
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I'm actively expanding my cloud engineering skills, focusing on deploying backend applications to
                    <span className="font-semibold text-orange-600 dark:text-orange-400"> AWS</span>.
                    I'm learning how to use EC2, S3, and RDS for scalable hosting, and exploring Infrastructure as Code (IaC)
                    with <span className="font-semibold text-purple-600 dark:text-purple-400">Terraform</span>. I'm also gaining experience in automating deployments using CI/CD pipelines to deliver
                    faster, more reliable updates to users.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold">
                Java Developer
              </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                Spring Boot
              </span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                Agritech
              </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                Microservices
              </span>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Education
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">BSc Biology</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Federal University Otuoke</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Training
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">ALX Virtual Assistant Training</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Chisom Nwokwu Tech Scholarship Fund</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Passion
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">Revolutionizing agriculture through technology</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Building sustainable food systems</p>
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