import { Building2, ShoppingBag, Briefcase, Rocket } from 'lucide-react';
import { solutionsSection } from '@/content/siteContent';

const iconMap: Record<string, React.ElementType> = {
  "Empresas de servicios": Building2,
  "Empresas comerciales": ShoppingBag,
  "Consultorías y profesionales": Briefcase,
  "Empresas en crecimiento": Rocket,
};

export function SolutionsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {solutionsSection.title}
          </h2>
          <p className="text-lg text-gray-400">
            {solutionsSection.subtitle}
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutionsSection.solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.title] || Building2;
            
            return (
              <div
                key={index}
                className="group flex gap-5 p-6 md:p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/50"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-emerald-400" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
