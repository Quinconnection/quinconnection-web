import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ctaSection } from '@/content/siteContent';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {ctaSection.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-10">
            {ctaSection.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-10 py-7 text-lg group glow-green"
          >
            <a href={ctaSection.button.href} target="_blank" rel="noopener noreferrer">
              {ctaSection.button.label}
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
