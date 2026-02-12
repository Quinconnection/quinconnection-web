import { Lightbulb, Target, TrendingUp } from 'lucide-react';
import { aboutSection } from '@/content/siteContent';

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {aboutSection.title}
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              {aboutSection.description}
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              {aboutSection.mission}
            </p>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6">
            {aboutSection.values.map((value, index) => {
              const icons = [Lightbulb, Target, TrendingUp];
              const IconComponent = icons[index] || Lightbulb;
              
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gray-900/50 border border-gray-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pt-2">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
