import { Clock, FolderGit2, Users, Database, TrendingUp } from 'lucide-react';
import { benefitsSection } from '@/content/siteContent';

const iconMap: Record<string, React.ElementType> = {
  "Menos trabajo manual": Clock,
  "Procesos organizados": FolderGit2,
  "Más clientes calificados": Users,
  "Información centralizada": Database,
  "Decisiones basadas en datos": TrendingUp,
};

export function BenefitsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-transparent to-emerald-950/10" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {benefitsSection.title}
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsSection.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.title] || TrendingUp;
            
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/50"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                  <IconComponent className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
