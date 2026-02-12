import { processSection } from '@/content/siteContent';

export function ProcessSection() {
  return (
    <section id="proceso" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {processSection.title}
          </h2>
          <p className="text-lg text-gray-400">
            {processSection.subtitle}
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSection.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < processSection.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px">
                  <div className="w-full h-full bg-gradient-to-r from-emerald-500/50 to-transparent" />
                </div>
              )}

              {/* Step card */}
              <div className="relative">
                {/* Number */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
