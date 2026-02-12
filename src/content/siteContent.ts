// ============================================
// QUINCONNECTION - CONTENIDO EDITABLE
// ============================================
// Edita este archivo para cambiar textos, enlaces e información
// No necesitas saber código, solo modifica el texto entre comillas

export const siteConfig = {
  // Información general
  brandName: "QuinConnection",
  tagline: "Strategy & Intelligent Systems",
  description: "Diseñamos sistemas digitales inteligentes que automatizan marketing, ventas y operaciones para empresas que quieren crecer con estructura y tecnología.",
  
  // URLs y enlaces
  links: {
    calendly: "https://cal.com/sara-quinchia-x4tpcj",
    instagram: "https://www.instagram.com/quinconnection.co",
    email: "contacto@quinconnection.com",
    domain: "https://quinconnection.com"
  },
  
  // SEO
  seo: {
    title: "QuinConnection | Automatización + IA para Empresas",
    description: "Diseñamos sistemas inteligentes que automatizan marketing, ventas y operaciones para que tu empresa crezca con menos esfuerzo operativo.",
    keywords: "automatización, inteligencia artificial, marketing digital, sistemas empresariales, Notion, chatbots, IA"
  }
};

// ============================================
// NAVEGACIÓN
// ============================================
export const navigation = {
  logo: "/images/logo-full.png",
  logoIcon: "/images/logo-icon.png",
  links: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo Trabajamos", href: "#proceso" },
    { label: "Contacto", href: "#contacto" }
  ],
  ctaButton: {
    label: "Agendar diagnóstico",
    href: "https://cal.com/sara-quinchia-x4tpcj"
  }
};

// ============================================
// SECCIÓN HERO
// ============================================
export const heroSection = {
  badge: "Estrategia + Tecnología + Resultados",
  title: "Automatización + IA para empresas",
  subtitle: "Diseñamos sistemas inteligentes que automatizan marketing, ventas y operaciones para que tu empresa crezca con menos esfuerzo operativo.",
  primaryButton: {
    label: "Agendar diagnóstico",
    href: "https://cal.com/sara-quinchia-x4tpcj"
  },
  secondaryButton: {
    label: "Ver servicios",
    href: "#servicios"
  }
};

// ============================================
// SECCIÓN PROBLEMA
// ============================================
export const problemSection = {
  title: "Muchas empresas crecen, pero sus procesos no.",
  description: "Equipos saturados, tareas repetitivas, información dispersa y decisiones sin datos claros. La tecnología existe, pero no está conectada.",
  highlight: "QuinConnection diseña sistemas que conectan estrategia, automatización e inteligencia artificial para que el negocio funcione de forma ordenada y escalable."
};

// ============================================
// SECCIÓN SOLUCIÓN
// ============================================
export const solutionSection = {
  title: "Lo que hacemos",
  items: [
    "Automatizamos procesos operativos y comerciales",
    "Creamos sistemas inteligentes de captación de clientes",
    "Diseñamos asistentes IA para atención y operación",
    "Centralizamos la información del negocio",
    "Convertimos datos en decisiones claras"
  ]
};

// ============================================
// SECCIÓN SERVICIOS
// ============================================
export const servicesSection = {
  title: "Nuestros Servicios",
  subtitle: "Soluciones integrales para transformar tu empresa",
  ctaButton: {
    label: "Ver todos los servicios",
    href: "#servicios"
  },
  services: [
    {
      id: 1,
      title: "Estrategia & Estudio de Mercado",
      description: "Analizamos el mercado, la competencia y las oportunidades digitales para definir qué debe construir la empresa antes de invertir en marketing o tecnología.",
      features: [
        "Investigación de mercado",
        "Análisis de competencia",
        "Identificación de oportunidades",
        "Definición de oferta y posicionamiento",
        "Presentaciones estratégicas"
      ],
      icon: "Target"
    },
    {
      id: 2,
      title: "Sistemas Operativos Empresariales",
      description: "Diseñamos sistemas internos que organizan la operación del negocio usando Notion y herramientas digitales.",
      features: [
        "Notion personalizado",
        "Gestión de proyectos",
        "CRM interno",
        "Dashboards ejecutivos",
        "Centralización de procesos"
      ],
      icon: "Layout"
    },
    {
      id: 3,
      title: "Automatización & IA para Marketing y Ventas",
      description: "Automatizamos la captación, seguimiento y conversión de clientes con herramientas inteligentes.",
      features: [
        "Automatización de emails",
        "Seguimientos automáticos",
        "Generación de contenido con IA",
        "Investigación automática de prospectos",
        "Integración con CRM"
      ],
      icon: "Zap"
    },
    {
      id: 4,
      title: "Chatbots & Asistentes Inteligentes",
      description: "Asistentes IA que atienden clientes y apoyan equipos internos 24/7.",
      features: [
        "Chatbots web",
        "Bots de WhatsApp Business",
        "Asistentes internos",
        "IA entrenada con documentos empresariales"
      ],
      icon: "MessageSquare"
    },
    {
      id: 5,
      title: "Inteligencia de Datos & Reportes",
      description: "Convertimos datos en información útil para tomar decisiones estratégicas.",
      features: [
        "Reportes automáticos",
        "Dashboards en tiempo real",
        "Análisis de ventas y marketing",
        "Informes automáticos con IA"
      ],
      icon: "BarChart3"
    },
    {
      id: 6,
      title: "Sistemas IA Personalizados",
      description: "Desarrollo de soluciones inteligentes adaptadas específicamente a tu negocio.",
      features: [
        "Agentes IA personalizados",
        "Automatizaciones avanzadas",
        "Integraciones mediante APIs",
        "Sistemas operativos inteligentes"
      ],
      icon: "Brain"
    }
  ]
};

// ============================================
// SECCIÓN PROCESO (CÓMO TRABAJAMOS)
// ============================================
export const processSection = {
  title: "Cómo Trabajamos",
  subtitle: "Un proceso probado para transformar tu empresa",
  steps: [
    {
      number: "01",
      title: "Diagnóstico estratégico",
      description: "Analizamos procesos, objetivos y oportunidades para entender tu situación actual."
    },
    {
      number: "02",
      title: "Diseño del sistema",
      description: "Definimos la estructura tecnológica y operativa adaptada a tus necesidades."
    },
    {
      number: "03",
      title: "Implementación",
      description: "Construimos automatizaciones y sistemas inteligentes paso a paso."
    },
    {
      number: "04",
      title: "Optimización continua",
      description: "Mejoramos el sistema según resultados y evolución de tu negocio."
    }
  ]
};

// ============================================
// SECCIÓN BENEFICIOS
// ============================================
export const benefitsSection = {
  title: "Beneficios de trabajar con nosotros",
  benefits: [
    {
      title: "Menos trabajo manual",
      description: "Elimina tareas repetitivas y enfócate en lo que realmente importa."
    },
    {
      title: "Procesos organizados",
      description: "Tu equipo trabaja con claridad y estructura definida."
    },
    {
      title: "Más clientes calificados",
      description: "Sistemas de captación que atraen a tu cliente ideal."
    },
    {
      title: "Información centralizada",
      description: "Todo en un solo lugar, accesible para tu equipo."
    },
    {
      title: "Decisiones basadas en datos",
      description: "Reportes claros que guían tus decisiones estratégicas."
    }
  ]
};

// ============================================
// SECCIÓN SOLUCIONES POR EMPRESA
// ============================================
export const solutionsSection = {
  title: "Soluciones por tipo de empresa",
  subtitle: "Adaptamos nuestros servicios a las necesidades específicas de cada negocio",
  solutions: [
    {
      title: "Empresas de servicios",
      description: "Automatización de procesos de atención al cliente, gestión de proyectos y seguimiento de oportunidades."
    },
    {
      title: "Empresas comerciales",
      description: "Sistemas de inventario, automatización de ventas y análisis de datos de clientes."
    },
    {
      title: "Consultorías y profesionales",
      description: "Organización de clientes, automatización de propuestas y gestión de proyectos."
    },
    {
      title: "Empresas en crecimiento",
      description: "Estructura digital que escala con tu negocio sin perder control."
    }
  ]
};

// ============================================
// SECCIÓN SOBRE NOSOTROS
// ============================================
export const aboutSection = {
  title: "Sobre QuinConnection",
  description: "QuinConnection nace con el objetivo de ayudar a empresas a crecer mediante sistemas, no mediante esfuerzo manual.",
  mission: "Combinamos estrategia empresarial, automatización e inteligencia artificial para crear negocios más organizados, eficientes y escalables.",
  values: [
    "No vendemos herramientas. Diseñamos sistemas que funcionan.",
    "Cada solución es personalizada para tu negocio.",
    "Medimos resultados y optimizamos continuamente."
  ]
};

// ============================================
// SECCIÓN CTA FINAL
// ============================================
export const ctaSection = {
  title: "Convierte tu empresa en un sistema inteligente.",
  subtitle: "Agenda una reunión gratuita y descubre cómo podemos ayudarte.",
  button: {
    label: "Agendar diagnóstico estratégico",
    href: "https://cal.com/sara-quinchia-x4tpcj"
  }
};

// ============================================
// SECCIÓN CONTACTO
// ============================================
export const contactSection = {
  title: "Hablemos de tu empresa",
  description: "Agenda una reunión para analizar cómo automatizar y estructurar tu negocio.",
  calendlyUrl: "https://cal.com/sara-quinchia-x4tpcj",
  info: {
    email: "contacto@quinconnection.com",
    instagram: "@quinconnection.co",
    responseTime: "Respondemos en menos de 24 horas"
  }
};

// ============================================
// FOOTER
// ============================================
export const footer = {
  logo: "/images/logo-light.png",
  description: "Diseñamos sistemas digitales inteligentes que automatizan marketing, ventas y operaciones.",
  columns: [
    {
      title: "Servicios",
      links: [
        { label: "Estrategia Digital", href: "#servicios" },
        { label: "Sistemas Empresariales", href: "#servicios" },
        { label: "Automatización & IA", href: "#servicios" },
        { label: "Chatbots", href: "#servicios" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Cómo Trabajamos", href: "#proceso" },
        { label: "Sobre Nosotros", href: "#about" },
        { label: "Contacto", href: "#contacto" }
      ]
    }
  ],
  social: {
    instagram: "https://www.instagram.com/quinconnection.co"
  },
  copyright: "© 2026 QuinConnection. Todos los derechos reservados."
};
