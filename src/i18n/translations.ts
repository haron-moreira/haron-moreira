export type Locale = 'pt' | 'en' | 'es'

export const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

const en: Record<string, string> = {
  // Navbar
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  // Hero / About
  'hero.greeting': "Hello, I'm",
  'hero.title': 'Senior Software Engineer',
  'hero.subtitle': 'Cloud & Telecom (BSS/OSS)',
  'hero.summary': 'Software Engineer with strong backend expertise in Node.js, NestJS, and microservices architecture. Currently leading a team on a global telecom platform serving the US market — managing the full customer lifecycle, payment processing (Stripe/Braintree), number portability, SIM/eSIM activation, and async operations across 26+ message queues. Focused on high-availability systems, event-driven architecture, and scalable API design for mission-critical MVNO operations.',
  'hero.cta.contact': 'Get in Touch',
  'hero.cta.projects': 'View Projects',
  'hero.location': 'São Paulo, Brazil',
  'hero.experience.years': '+6',
  'hero.experience.label': 'Years of Experience',
  'hero.commits.label': 'Public Commits',
  'hero.repos.label': 'Repositories',
  'hero.certs.label': 'Certifications & MBAs',
  'hero.availability': 'Available for new challenges',

  // What I Bring
  'bring.title': 'What I Bring to the Table',
  'bring.subtitle': 'More than code — mindset, ownership, and impact.',
  'bring.1.title': 'Ownership Mindset',
  'bring.1.desc': 'I don\'t just complete tasks — I own problems end-to-end. From investigation to production deploy, I take full responsibility for delivering results that truly move the needle.',
  'bring.2.title': 'Architectural Vision',
  'bring.2.desc': 'I drive technical decisions with clarity, always connecting architecture to business impact. Every system I design is built to scale, evolve, and be understood by the next engineer.',
  'bring.3.title': 'Quality from Day One',
  'bring.3.desc': 'Clean code isn\'t an afterthought — it\'s my starting point. I build services that are testable, maintainable, and production-ready from the very first commit.',
  'bring.4.title': 'Delivery Under Pressure',
  'bring.4.desc': 'I thrive in high-stakes environments where speed and quality must coexist. Balancing technical excellence with pragmatic delivery is what I do best.',

  // Strengths
  'strengths.title': 'Professional Strengths',

  // Tech highlights on hero
  'hero.tech.title': 'Core Stack',

  // Skills page
  'skills.title': 'Technical Skills',
  'skills.subtitle': 'Technologies and tools I work with daily.',
  'skills.categories': 'categories',
  'skills.technologies': 'technologies',

  // Experience page
  'experience.title': 'Experience',
  'experience.subtitle': 'My professional journey.',

  // Projects page
  'projects.title': 'Projects',
  'projects.subtitle': 'Key projects I\'ve built and contributed to.',
  'projects.view': 'View Project',
  'projects.private': 'Private',

  // Education page
  'education.title': 'Education',
  'education.subtitle': 'Academic background & qualifications.',
  'education.institutions': 'institutions',

  // Contact page
  'contact.title': 'Contact',
  'contact.subtitle': "Let's connect! Feel free to reach out.",
  'contact.email': 'Email',
  'contact.linkedin': 'LinkedIn',
  'contact.github': 'GitHub',
  'contact.phone': 'Phone',
  'contact.lookcode.subtitle': 'Custom software, consulting & tech solutions.',

  // Footer
  'footer.rights': 'All rights reserved.',
}

const pt: Record<string, string> = {
  'nav.about': 'Sobre',
  'nav.skills': 'Habilidades',
  'nav.experience': 'Experiência',
  'nav.projects': 'Projetos',
  'nav.education': 'Formação',
  'nav.contact': 'Contato',

  'hero.greeting': 'Olá, eu sou',
  'hero.title': 'Engenheiro de Software Sênior',
  'hero.subtitle': 'Cloud & Telecom (BSS/OSS)',
  'hero.summary': 'Engenheiro de Software com forte atuação em backend, especializado em Node.js, NestJS e arquitetura de microsserviços. Atualmente lidero um time em uma plataforma global de telecom voltada para o mercado dos EUA — gerenciando todo o ciclo de vida do cliente, processamento de pagamentos (Stripe/Braintree), portabilidade numérica, ativação SIM/eSIM e operações assíncronas em mais de 26 filas de mensageria. Foco em sistemas de alta disponibilidade, arquitetura orientada a eventos e design de APIs escaláveis para operações MVNO de missão crítica.',
  'hero.cta.contact': 'Entre em Contato',
  'hero.cta.projects': 'Ver Projetos',
  'hero.location': 'São Paulo, Brasil',
  'hero.experience.years': '+6',
  'hero.experience.label': 'Anos de Experiência',
  'hero.commits.label': 'Commits Públicos',
  'hero.repos.label': 'Repositórios',
  'hero.certs.label': 'Certificações & MBAs',
  'hero.availability': 'Disponível para novos desafios',

  'bring.title': 'O que eu entrego',
  'bring.subtitle': 'Mais do que código — mentalidade, ownership e impacto.',
  'bring.1.title': 'Mentalidade de Dono',
  'bring.1.desc': 'Não apenas completo tarefas — eu assumo problemas de ponta a ponta. Da investigação ao deploy em produção, tomo responsabilidade total por entregar resultados que realmente fazem a diferença.',
  'bring.2.title': 'Visão Arquitetural',
  'bring.2.desc': 'Conduzo decisões técnicas com clareza, sempre conectando arquitetura ao impacto no negócio. Cada sistema que projeto é construído para escalar, evoluir e ser compreendido pelo próximo engenheiro.',
  'bring.3.title': 'Qualidade desde o Início',
  'bring.3.desc': 'Código limpo não é um detalhe — é meu ponto de partida. Construo serviços testáveis, manuteníveis e prontos para produção desde o primeiro commit.',
  'bring.4.title': 'Entrega sob Pressão',
  'bring.4.desc': 'Prospero em ambientes de alta exigência onde velocidade e qualidade precisam coexistir. Equilibrar excelência técnica com entrega pragmática é o que faço de melhor.',

  'strengths.title': 'Diferenciais Profissionais',

  'hero.tech.title': 'Stack Principal',

  'skills.title': 'Habilidades Técnicas',
  'skills.subtitle': 'Tecnologias e ferramentas que utilizo no dia a dia.',
  'skills.categories': 'categorias',
  'skills.technologies': 'tecnologias',

  'experience.title': 'Experiência',
  'experience.subtitle': 'Minha trajetória profissional.',

  'projects.title': 'Projetos',
  'projects.subtitle': 'Principais projetos que construí e contribuí.',
  'projects.view': 'Ver Projeto',
  'projects.private': 'Privado',

  'education.title': 'Formação',
  'education.subtitle': 'Formação acadêmica e qualificações.',
  'education.institutions': 'instituições',

  'contact.title': 'Contato',
  'contact.subtitle': 'Vamos conectar! Fique à vontade para entrar em contato.',
  'contact.email': 'Email',
  'contact.linkedin': 'LinkedIn',
  'contact.github': 'GitHub',
  'contact.phone': 'Telefone',
  'contact.lookcode.subtitle': 'Software sob medida, consultoria & soluções em tecnologia.',

  'footer.rights': 'Todos os direitos reservados.',
}

const es: Record<string, string> = {
  'nav.about': 'Sobre mí',
  'nav.skills': 'Habilidades',
  'nav.experience': 'Experiencia',
  'nav.projects': 'Proyectos',
  'nav.education': 'Formación',
  'nav.contact': 'Contacto',

  'hero.greeting': 'Hola, soy',
  'hero.title': 'Ingeniero de Software Senior',
  'hero.subtitle': 'Cloud & Telecom (BSS/OSS)',
  'hero.summary': 'Ingeniero de Software con amplia experiencia en backend, especializado en Node.js, NestJS y arquitectura de microservicios. Actualmente lidero un equipo en una plataforma global de telecomunicaciones enfocada en el mercado de EE.UU. — gestionando todo el ciclo de vida del cliente, procesamiento de pagos (Stripe/Braintree), portabilidad numérica, activación SIM/eSIM y operaciones asíncronas en más de 26 colas de mensajería. Enfocado en sistemas de alta disponibilidad, arquitectura orientada a eventos y diseño de APIs escalables para operaciones MVNO de misión crítica.',
  'hero.cta.contact': 'Contactar',
  'hero.cta.projects': 'Ver Proyectos',
  'hero.location': 'São Paulo, Brasil',
  'hero.experience.years': '+6',
  'hero.experience.label': 'Años de Experiencia',
  'hero.commits.label': 'Commits Públicos',
  'hero.repos.label': 'Repositorios',
  'hero.certs.label': 'Certificaciones & MBAs',
  'hero.availability': 'Disponible para nuevos desafíos',

  'bring.title': 'Lo que aporto',
  'bring.subtitle': 'Más que código — mentalidad, ownership e impacto.',
  'bring.1.title': 'Mentalidad de Dueño',
  'bring.1.desc': 'No solo completo tareas — asumo problemas de punta a punta. Desde la investigación hasta el deploy en producción, tomo responsabilidad total por entregar resultados que realmente marcan la diferencia.',
  'bring.2.title': 'Visión Arquitectónica',
  'bring.2.desc': 'Conduzco decisiones técnicas con claridad, siempre conectando la arquitectura al impacto del negocio. Cada sistema que diseño está construido para escalar, evolucionar y ser comprendido por el siguiente ingeniero.',
  'bring.3.title': 'Calidad desde el Inicio',
  'bring.3.desc': 'El código limpio no es un detalle — es mi punto de partida. Construyo servicios testeables, mantenibles y listos para producción desde el primer commit.',
  'bring.4.title': 'Entrega bajo Presión',
  'bring.4.desc': 'Prospero en ambientes de alta exigencia donde velocidad y calidad deben coexistir. Equilibrar excelencia técnica con entrega pragmática es lo que mejor hago.',

  'strengths.title': 'Fortalezas Profesionales',

  'hero.tech.title': 'Stack Principal',

  'skills.title': 'Habilidades Técnicas',
  'skills.subtitle': 'Tecnologías y herramientas que utilizo a diario.',
  'skills.categories': 'categorías',
  'skills.technologies': 'tecnologías',

  'experience.title': 'Experiencia',
  'experience.subtitle': 'Mi trayectoria profesional.',

  'projects.title': 'Proyectos',
  'projects.subtitle': 'Principales proyectos que construí y contribuí.',
  'projects.view': 'Ver Proyecto',
  'projects.private': 'Privado',

  'education.title': 'Formación',
  'education.subtitle': 'Formación académica y cualificaciones.',
  'education.institutions': 'instituciones',

  'contact.title': 'Contacto',
  'contact.subtitle': '¡Conectémonos! No dudes en contactarme.',
  'contact.email': 'Email',
  'contact.linkedin': 'LinkedIn',
  'contact.github': 'GitHub',
  'contact.phone': 'Teléfono',
  'contact.lookcode.subtitle': 'Software a medida, consultoría & soluciones tecnológicas.',

  'footer.rights': 'Todos los derechos reservados.',
}

export const translations: Record<string, Record<string, string>> = { en, pt, es }
