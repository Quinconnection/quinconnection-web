import { Target, Layout, Zap, MessageSquare, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { servicesSection } from '@/content/siteContent';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Layout,
  Zap,
  MessageSquare,
  BarChart3,
  Brain,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {servicesSection.title}
          </h2>
          <p className="text-lg text-gray-400">
            {servicesSection.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesSection.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Target;
            
            return (
              <div
                key={service.id}
                className="group relative p-6 md:p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/80 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 group"
          >
            <a href={servicesSection.ctaButton.href}>
              {servicesSection.ctaButton.label}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
