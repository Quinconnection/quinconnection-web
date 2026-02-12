import { Instagram } from 'lucide-react';
import { footer } from '@/content/siteContent';

export function Footer() {
  return (
    <footer className="relative border-t border-gray-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      
      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src={footer.logo}
              alt="QuinConnection"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              {footer.description}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
