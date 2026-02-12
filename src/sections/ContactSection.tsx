import { Mail, Instagram, Clock, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactSection } from '@/content/siteContent';

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-emerald-500 text-sm font-medium uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {contactSection.title}
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              {contactSection.description}
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-300">{contactSection.info.email}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-300">{contactSection.info.instagram}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-300">{contactSection.info.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Right content - Calendly CTA */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-emerald-400" />
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">
              Agenda tu reunión
            </h3>
            
            <p className="text-gray-400 mb-8">
              Selecciona el mejor horario para ti. La reunión dura aproximadamente 30 minutos y es completamente gratuita.
            </p>
            
            <Button
              asChild
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 group"
            >
              <a href={contactSection.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Ver disponibilidad
                <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
