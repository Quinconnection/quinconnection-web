import { Check } from 'lucide-react';
import { solutionSection } from '@/content/siteContent';

export function SolutionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-emerald-500 text-sm font-medium uppercase tracking-wider">
              La Solución
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
            {solutionSection.title}
          </h2>

          {/* Solution items grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {solutionSection.items.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/80"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
