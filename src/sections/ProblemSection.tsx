import { AlertTriangle } from 'lucide-react';
import { problemSection } from '@/content/siteContent';

export function ProblemSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
              El Problema
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {problemSection.title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            {problemSection.description}
          </p>

          {/* Highlight box */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-t-2xl" />
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed">
              {problemSection.highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
