import type { Locale } from '../i18n/translations'

// Helper type for multilingual strings
type L10n = Record<Locale, string>

export const personalInfo = {
  name: 'Haron Moreira',
  email: 'haron.cm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/haron-moreira/',
  github: 'https://github.com/haron-moreira',
  location: 'São Paulo, Brazil',
}

export const coreStack = [
  'Node.js', 'TypeScript', 'NestJS', 'AWS', 'Python',
  'React', 'Next.js', 'Docker', 'MySQL', 'Redis',
]

// ─── Skills ───

export interface SkillCategory {
  title: L10n
  icon: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: { en: 'Backend & Architecture', pt: 'Backend & Arquitetura', es: 'Backend & Arquitectura' },
    icon: 'server',
    items: [
      'Node.js', 'TypeScript', 'NestJS', 'Express',
      'PHP', 'Python',
      'Clean Architecture', 'SOLID', 'DDD', 'Clean Code',
      'Microservices', 'REST APIs', 'WebSockets',
      'JWT Auth (httpOnly cookies)',
      'Jest', 'Supertest', 'Swagger',
    ],
  },
  {
    title: { en: 'Databases & Persistence', pt: 'Bancos de Dados & Persistência', es: 'Bases de Datos & Persistencia' },
    icon: 'database',
    items: [
      'MySQL / MariaDB', 'AWS RDS',
      'DynamoDB', 'MongoDB',
      'Redis / Valkey',
      'Query Tuning & Indexing',
      'Connection Pooling & Caching',
      'Event-driven Sync (SQS + DB)',
    ],
  },
  {
    title: { en: 'Cloud & DevOps (AWS)', pt: 'Cloud & DevOps (AWS)', es: 'Cloud & DevOps (AWS)' },
    icon: 'cloud',
    items: [
      'ECS Fargate', 'EC2', 'API Gateway', 'ALB',
      'Lambda (Node.js & Python)',
      'S3', 'CloudFront', 'Route53', 'ACM', 'WAF',
      'SQS', 'RabbitMQ', 'CloudWatch', 'AWS X-Ray',
      'Docker', 'CI/CD',
      'Prometheus', 'Grafana', 'Zabbix',
    ],
  },
  {
    title: { en: 'Telecom (BSS/OSS)', pt: 'Telecom (BSS/OSS)', es: 'Telecom (BSS/OSS)' },
    icon: 'radio',
    items: [
      'SIM/eSIM Activation Flows',
      'Number Portability (Port-in/Port-out)',
      'Subscriber Lifecycle Management',
      'Billing, Recharge & Consumption Rules',
      'MVNO Multi-brand Architecture',
      'HLR Provisioning & Integration',
      'Scalable Telecom Architecture',
      'War Room / Crisis Resolution',
      'Data Pipelines & NOC Reporting',
      'High-availability Systems',
    ],
  },
  {
    title: { en: 'Frontend', pt: 'Frontend', es: 'Frontend' },
    icon: 'layout',
    items: [
      'React', 'Next.js', 'React Native',
      'TypeScript', 'TailwindCSS', 'HTML5 / CSS3',
      'SSR / SSG / ISR',
      'Responsive & Mobile First',
      'REST API Integration',
      'JWT + Secure Cookies Auth',
      'Vite', 'Webpack',
    ],
  },
]

// ─── Experience ───

export interface ExperienceItem {
  role: L10n
  company: string
  period: string
  location: string
  description: L10n
  highlights: L10n[]
}

export const experiences: ExperienceItem[] = [
  {
    role: {
      en: 'Full Stack Software Engineer',
      pt: 'Engenheiro de Software Full Stack',
      es: 'Ingeniero de Software Full Stack',
    },
    company: 'Surf',
    period: 'Apr 2022 – Present',
    location: 'São Paulo, Brasil',
    description: {
      en: 'Leading architecture decisions and building microservices for a major telecom MVNO operation.',
      pt: 'Liderando decisões arquiteturais e construindo microsserviços para uma grande operação de MVNO em telecom.',
      es: 'Liderando decisiones arquitectónicas y construyendo microservicios para una gran operación MVNO de telecomunicaciones.',
    },
    highlights: [
      {
        en: 'Led architecture decisions and drove the migration of a legacy monolith into a distributed microservices ecosystem using NestJS, AWS ECS Fargate, and SQS event-driven communication',
        pt: 'Liderei decisões de arquitetura e conduzi a migração de um monolito legado para um ecossistema distribuído de microsserviços usando NestJS, AWS ECS Fargate e comunicação orientada a eventos com SQS',
        es: 'Lideré decisiones de arquitectura y conduje la migración de un monolito legado a un ecosistema distribuido de microservicios usando NestJS, AWS ECS Fargate y comunicación orientada a eventos con SQS',
      },
      {
        en: 'Built and maintained the Customer Manager service — a core microservice handling subscriber lifecycle, customer data, account management, and multi-brand support for MVNO operations',
        pt: 'Construí e mantive o serviço Customer Manager — microsserviço central responsável pelo ciclo de vida de assinantes, dados de clientes, gestão de contas e suporte multi-marca para operações MVNO',
        es: 'Construí y mantuve el servicio Customer Manager — microservicio central responsable del ciclo de vida de suscriptores, datos de clientes, gestión de cuentas y soporte multi-marca para operaciones MVNO',
      },
      {
        en: 'Developed a complete BSS (Business Support System) integrating SIM/eSIM activation, portability (port-in/port-out), billing, recharge flows, and subscriber state machines across multiple AWS services',
        pt: 'Desenvolvi um BSS (Business Support System) completo integrando ativação SIM/eSIM, portabilidade (port-in/port-out), billing, fluxos de recarga e máquinas de estado de assinantes em múltiplos serviços AWS',
        es: 'Desarrollé un BSS (Business Support System) completo integrando activación SIM/eSIM, portabilidad (port-in/port-out), facturación, flujos de recarga y máquinas de estado de suscriptores en múltiples servicios AWS',
      },
      {
        en: 'Integrated payment gateways (Stripe, PayPal) and built recharge/e-commerce platforms with Next.js, handling secure transaction flows and webhook processing',
        pt: 'Integrei gateways de pagamento (Stripe, PayPal) e construí plataformas de recarga/e-commerce com Next.js, lidando com fluxos seguros de transação e processamento de webhooks',
        es: 'Integré pasarelas de pago (Stripe, PayPal) y construí plataformas de recarga/e-commerce con Next.js, manejando flujos seguros de transacción y procesamiento de webhooks',
      },
      {
        en: 'Designed and optimized relational databases (MySQL/RDS) with advanced query tuning, index optimization, connection pooling, and Redis caching strategies reducing response times significantly',
        pt: 'Projetei e otimizei bancos de dados relacionais (MySQL/RDS) com tuning avançado de queries, otimização de índices, connection pooling e estratégias de cache com Redis, reduzindo tempos de resposta significativamente',
        es: 'Diseñé y optimicé bases de datos relacionales (MySQL/RDS) con tuning avanzado de queries, optimización de índices, connection pooling y estrategias de cache con Redis, reduciendo tiempos de respuesta significativamente',
      },
      {
        en: 'Implemented full observability stack with CloudWatch, Grafana, Zabbix, and AWS X-Ray distributed tracing across the entire microservices mesh',
        pt: 'Implementei stack completa de observabilidade com CloudWatch, Grafana, Zabbix e tracing distribuído AWS X-Ray em toda a malha de microsserviços',
        es: 'Implementé stack completa de observabilidad con CloudWatch, Grafana, Zabbix y tracing distribuido AWS X-Ray en toda la malla de microservicios',
      },
      {
        en: 'Built CRM systems, internal tools, and white-label products using Node.js, Next.js, and Python, serving multiple telecom brands from a single platform',
        pt: 'Construí sistemas CRM, ferramentas internas e produtos white-label usando Node.js, Next.js e Python, atendendo múltiplas marcas de telecom a partir de uma única plataforma',
        es: 'Construí sistemas CRM, herramientas internas y productos white-label usando Node.js, Next.js y Python, atendiendo múltiples marcas de telecom desde una única plataforma',
      },
    ],
  },
  {
    role: {
      en: 'Implementation Analyst',
      pt: 'Analista de Implantação',
      es: 'Analista de Implementación',
    },
    company: 'Surf',
    period: 'Jun 2021 – Apr 2022',
    location: 'São Paulo, Brasil',
    description: {
      en: 'Coordinating onboarding of new telecom brands, managing API integrations and change management processes.',
      pt: 'Coordenando onboarding de novas marcas de telecom, gerenciando integrações de API e processos de gestão de mudanças.',
      es: 'Coordinando onboarding de nuevas marcas de telecomunicaciones, gestionando integraciones de API y procesos de gestión de cambios.',
    },
    highlights: [
      {
        en: 'Led meetings with clients, vendors, and internal teams for onboarding new brands',
        pt: 'Conduzi reuniões com clientes, fornecedores e equipes internas para onboarding de novas marcas',
        es: 'Lideré reuniones con clientes, proveedores y equipos internos para onboarding de nuevas marcas',
      },
      {
        en: 'Analyzed and defined API integrations with partners and clients',
        pt: 'Analisei e defini integrações de API com parceiros e clientes',
        es: 'Analicé y definí integraciones de API con socios y clientes',
      },
      {
        en: 'Managed ICCID number ranges for SIM card production and control',
        pt: 'Gerenciei ranges de ICCIDs para produção e controle de SIM cards',
        es: 'Gestioné rangos de ICCID para producción y control de tarjetas SIM',
      },
      {
        en: 'Oversaw Change Management (GMUD) processes with NOC teams and vendors',
        pt: 'Supervisionei processos de Gestão de Mudanças (GMUD) com equipes NOC e fornecedores',
        es: 'Supervisé procesos de Gestión de Cambios (GMUD) con equipos NOC y proveedores',
      },
      {
        en: 'Conducted validation and certification of projects ensuring quality standards',
        pt: 'Conduzi validação e certificação de projetos garantindo padrões de qualidade',
        es: 'Realicé validación y certificación de proyectos asegurando estándares de calidad',
      },
    ],
  },
  {
    role: {
      en: 'Network Operations Center (NOC) Assistant',
      pt: 'Assistente de NOC (Centro de Operações de Rede)',
      es: 'Asistente de NOC (Centro de Operaciones de Red)',
    },
    company: 'Surf',
    period: 'Nov 2020 – Jun 2021',
    location: 'São Paulo, Brasil',
    description: {
      en: 'Monitoring network and telecom equipment, Data Center operations, and delivering performance reports.',
      pt: 'Monitorando equipamentos de rede e telecom, operações de Data Center e entregando relatórios de performance.',
      es: 'Monitoreando equipos de red y telecomunicaciones, operaciones de Data Center y entregando informes de rendimiento.',
    },
    highlights: [
      {
        en: 'Performed analysis and diagnostics on network and telecom equipment (JMG, MPU, SIU)',
        pt: 'Realizei análise e diagnóstico em equipamentos de rede e telecom (JMG, MPU, SIU)',
        es: 'Realicé análisis y diagnóstico en equipos de red y telecomunicaciones (JMG, MPU, SIU)',
      },
      {
        en: 'Monitored Data Center operations ensuring optimal performance',
        pt: 'Monitorei operações do Data Center garantindo performance ideal',
        es: 'Monitoreé operaciones del Data Center asegurando rendimiento óptimo',
      },
      {
        en: 'Prepared weekly reports for senior management on network performance',
        pt: 'Preparei relatórios semanais para a gestão sobre performance de rede',
        es: 'Preparé informes semanales para la gerencia sobre rendimiento de red',
      },
      {
        en: 'Utilized SSH to access CDR visualization tools for in-depth network analysis',
        pt: 'Utilizei SSH para acessar ferramentas de visualização de CDR para análise aprofundada de rede',
        es: 'Utilicé SSH para acceder a herramientas de visualización de CDR para análisis profundo de red',
      },
    ],
  },
  {
    role: {
      en: 'Technical Support Intern',
      pt: 'Estagiário de Suporte Técnico',
      es: 'Pasante de Soporte Técnico',
    },
    company: 'Surf',
    period: 'Oct 2019 – Nov 2020',
    location: 'São Paulo, Brasil',
    description: {
      en: 'IT support, hardware/software maintenance, network administration, and infrastructure management.',
      pt: 'Suporte de TI, manutenção de hardware/software, administração de rede e gestão de infraestrutura.',
      es: 'Soporte de TI, mantenimiento de hardware/software, administración de red y gestión de infraestructura.',
    },
    highlights: [
      {
        en: 'Performed preventive and corrective maintenance on workstations and IT equipment',
        pt: 'Realizei manutenção preventiva e corretiva em estações de trabalho e equipamentos de TI',
        es: 'Realicé mantenimiento preventivo y correctivo en estaciones de trabajo y equipos de TI',
      },
      {
        en: 'Managed internal network infrastructure and configured IP addressing (static/DHCP)',
        pt: 'Gerenciei infraestrutura de rede interna e configurei endereçamento IP (estático/DHCP)',
        es: 'Gestioné infraestructura de red interna y configuré direccionamiento IP (estático/DHCP)',
      },
      {
        en: 'Set up Ubiquiti antennas and wireless network optimization',
        pt: 'Configurei antenas Ubiquiti e otimização de rede wireless',
        es: 'Configuré antenas Ubiquiti y optimización de red inalámbrica',
      },
    ],
  },
  {
    role: {
      en: 'Co-Founder',
      pt: 'Co-Fundador',
      es: 'Co-Fundador',
    },
    company: 'Look Code',
    period: 'Jan 2024 – Present',
    location: 'Brazil',
    description: {
      en: 'Co-founded a tech company delivering custom software solutions, web applications, and consulting services for small and mid-sized businesses.',
      pt: 'Co-fundei uma empresa de tecnologia entregando soluções de software sob medida, aplicações web e serviços de consultoria para pequenas e médias empresas.',
      es: 'Co-fundé una empresa de tecnología entregando soluciones de software a medida, aplicaciones web y servicios de consultoría para pequeñas y medianas empresas.',
    },
    highlights: [
      {
        en: 'Developing full-stack web applications and APIs for clients using NestJS, Next.js, and AWS',
        pt: 'Desenvolvendo aplicações web full-stack e APIs para clientes usando NestJS, Next.js e AWS',
        es: 'Desarrollando aplicaciones web full-stack y APIs para clientes usando NestJS, Next.js y AWS',
      },
      {
        en: 'Providing technical consulting on cloud architecture, DevOps practices, and system modernization',
        pt: 'Prestando consultoria técnica em arquitetura cloud, práticas DevOps e modernização de sistemas',
        es: 'Brindando consultoría técnica en arquitectura cloud, prácticas DevOps y modernización de sistemas',
      },
    ],
  },
]

// ─── Education ───

export interface EducationItem {
  degree: L10n
  institution: string
  period: string
}

export const education: EducationItem[] = [
  {
    degree: {
      en: 'MBA in Software Engineering',
      pt: 'MBA em Engenharia de Software',
      es: 'MBA en Ingeniería de Software',
    },
    institution: 'Impacta Tecnologia',
    period: '2025 – 2025',
  },
  {
    degree: {
      en: 'MBA in Full-Stack Development',
      pt: 'MBA em Desenvolvimento Full-Stack',
      es: 'MBA en Desarrollo Full-Stack',
    },
    institution: 'Uniamérica',
    period: '2024 – 2024',
  },
  {
    degree: {
      en: 'Associate Degree in Systems Analysis and Development',
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas',
    },
    institution: 'Impacta Tecnologia',
    period: '2021 – 2023',
  },
  {
    degree: {
      en: 'Associate Degree in Systems Analysis and Development',
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas',
    },
    institution: 'Fatec Carapicuíba',
    period: '2019 – 2021',
  },
  {
    degree: {
      en: 'IT Technician',
      pt: 'Técnico em Informática',
      es: 'Técnico en Informática',
    },
    institution: 'Etec Uirapuru',
    period: '2016 – 2018',
  },
]

// ─── Certifications ───

export const certifications: string[] = [
  'NestJS',
  'PHP: Arrays, Strings, Functions & Web',
  'PHP Strings: Operations & Regex',
  'JavaScript: Arrays',
  'PHP I/O: Working with files and streams',
]

// ─── Projects ───

export interface ProjectItem {
  title: string
  description: L10n
  techs: string[]
  link?: string
  isPrivate?: boolean
}

export const projects: ProjectItem[] = [
  {
    title: 'Telecom BSS Platform',
    isPrivate: true,
    description: {
      en: 'Complete Business Support System powering MVNO operations — SIM/eSIM activation, portability (port-in/port-out), billing, recharge, subscriber lifecycle management, customer account management, and payment gateway integrations. Serves multiple telecom brands from a single multi-tenant platform.',
      pt: 'Sistema BSS completo para operações MVNO — ativação SIM/eSIM, portabilidade (port-in/port-out), billing, recarga, gestão do ciclo de vida de assinantes, gestão de contas de clientes e integrações com gateways de pagamento. Atende múltiplas marcas de telecom a partir de uma plataforma multi-tenant.',
      es: 'Sistema BSS completo para operaciones MVNO — activación SIM/eSIM, portabilidad (port-in/port-out), facturación, recarga, gestión del ciclo de vida de suscriptores, gestión de cuentas de clientes e integraciones con pasarelas de pago. Atiende múltiples marcas de telecom desde una plataforma multi-tenant.',
    },
    techs: ['Node.js', 'NestJS', 'TypeScript', 'AWS ECS', 'MySQL', 'Redis', 'SQS', 'Stripe', 'Clean Architecture'],
  },
  {
    title: 'Smart CRM',
    isPrivate: true,
    description: {
      en: 'Internal CRM platform for telecom operations — real-time dashboards with ECharts/Recharts, CloudWatch log integration, QR code generation, CSV reporting, and customer management. Built with Next.js and direct MySQL/RDS connection for high-performance queries.',
      pt: 'Plataforma CRM interna para operações de telecom — dashboards em tempo real com ECharts/Recharts, integração com logs do CloudWatch, geração de QR codes, relatórios CSV e gestão de clientes. Construído com Next.js e conexão direta MySQL/RDS para queries de alta performance.',
      es: 'Plataforma CRM interna para operaciones de telecom — dashboards en tiempo real con ECharts/Recharts, integración con logs de CloudWatch, generación de QR codes, reportes CSV y gestión de clientes. Construido con Next.js y conexión directa MySQL/RDS para queries de alto rendimiento.',
    },
    techs: ['Next.js', 'React', 'TypeScript', 'MySQL', 'AWS CloudWatch', 'ECharts', 'Recharts', 'TailwindCSS'],
  },
  {
    title: 'Observability Stack',
    isPrivate: true,
    description: {
      en: 'Full monitoring and observability solution with distributed tracing across the entire microservices mesh, custom metrics collection, centralized logging, and alerting dashboards for NOC/N3 operational teams.',
      pt: 'Solução completa de monitoramento e observabilidade com tracing distribuído em toda a malha de microsserviços, coleta de métricas customizadas, logging centralizado e dashboards de alertas para equipes operacionais NOC/N3.',
      es: 'Solución completa de monitoreo y observabilidad con tracing distribuido en toda la malla de microservicios, colección de métricas personalizadas, logging centralizado y dashboards de alertas para equipos operacionales NOC/N3.',
    },
    techs: ['Prometheus', 'Grafana', 'AWS X-Ray', 'CloudWatch', 'Zabbix'],
  },
  {
    title: 'E-commerce Platform',
    isPrivate: true,
    description: {
      en: 'Multi-brand e-commerce platform for telecom products — plan purchasing, SIM activation, Stripe/Braintree payment processing, device detection for responsive UX, and animated product showcases with React Spring.',
      pt: 'Plataforma e-commerce multi-marca para produtos de telecom — compra de planos, ativação de SIM, processamento de pagamentos Stripe/Braintree, detecção de dispositivo para UX responsiva e vitrines animadas com React Spring.',
      es: 'Plataforma e-commerce multi-marca para productos de telecom — compra de planes, activación de SIM, procesamiento de pagos Stripe/Braintree, detección de dispositivo para UX responsiva y vitrinas animadas con React Spring.',
    },
    techs: ['Next.js', 'React', 'Stripe', 'Braintree', 'TailwindCSS', 'React Spring'],
  },
  {
    title: 'Tá Na Agenda',
    description: {
      en: 'SaaS scheduling platform for beauty professionals — appointment booking, customer management, financial dashboards with Recharts, PWA support, Redis caching, rate limiting, Prometheus metrics, and MinIO file storage. Built as a full product with NestJS + Prisma backend and Next.js frontend.',
      pt: 'Plataforma SaaS de agendamento para profissionais de beleza — agendamento de horários, gestão de clientes, dashboards financeiros com Recharts, suporte PWA, cache Redis, rate limiting, métricas Prometheus e armazenamento de arquivos com MinIO. Construído como produto completo com backend NestJS + Prisma e frontend Next.js.',
      es: 'Plataforma SaaS de agendamiento para profesionales de belleza — reserva de citas, gestión de clientes, dashboards financieros con Recharts, soporte PWA, cache Redis, rate limiting, métricas Prometheus y almacenamiento de archivos con MinIO. Construido como producto completo con backend NestJS + Prisma y frontend Next.js.',
    },
    techs: ['NestJS', 'Prisma', 'Next.js', 'Redis', 'MinIO', 'Prometheus', 'Zustand', 'Zod', 'PWA'],
    link: 'https://ta-na-agenda.com',
  },
  {
    title: 'Gestor Cadastral',
    description: {
      en: 'Full-stack registration management system with web and mobile (React Native) interfaces. Features complete CRUD operations, authentication, and responsive design.',
      pt: 'Sistema de gestão cadastral full-stack com interfaces web e mobile (React Native). Inclui operações CRUD completas, autenticação e design responsivo.',
      es: 'Sistema de gestión catastral full-stack con interfaces web y mobile (React Native). Incluye operaciones CRUD completas, autenticación y diseño responsivo.',
    },
    techs: ['TypeScript', 'React Native', 'Node.js', 'NestJS'],
    link: 'https://github.com/haron-moreira/gestor-cadastral',
  },
  {
    title: 'Oportuniza',
    description: {
      en: 'Academic project — a job opportunities platform connecting candidates and companies. Built with Next.js 15, React 19, TailwindCSS v4, and encrypted data handling with CryptoJS. Features toast notifications, modern UI, and responsive design.',
      pt: 'Projeto acadêmico — plataforma de oportunidades de emprego conectando candidatos e empresas. Construído com Next.js 15, React 19, TailwindCSS v4 e manipulação de dados criptografados com CryptoJS. Inclui notificações toast, UI moderna e design responsivo.',
      es: 'Proyecto académico — plataforma de oportunidades de empleo conectando candidatos y empresas. Construido con Next.js 15, React 19, TailwindCSS v4 y manejo de datos encriptados con CryptoJS. Incluye notificaciones toast, UI moderna y diseño responsivo.',
    },
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS v4', 'CryptoJS'],
    link: 'https://oportuniza-frontend-zeta.vercel.app',
  },
  {
    title: 'Flask SMS API',
    description: {
      en: 'REST API built with Python and Flask for SMS dispatch, demonstrating multi-language backend skills and integration with external messaging providers.',
      pt: 'API REST construída com Python e Flask para envio de SMS, demonstrando habilidades backend multi-linguagem e integração com provedores de mensageria externos.',
      es: 'API REST construida con Python y Flask para envío de SMS, demostrando habilidades backend multi-lenguaje e integración con proveedores de mensajería externos.',
    },
    techs: ['Python', 'Flask', 'REST API', 'SMS Integration'],
    link: 'https://github.com/haron-moreira/api_flask_sms',
  },
  {
    title: 'ITSM — Znuny (OTRS) & osTicket',
    isPrivate: true,
    description: {
      en: 'Implementation and administration of ITSM platforms for IT service management and ticket control. Deployed Znuny (OTRS fork) and osTicket in production environments with custom workflows, SLA policies, queue routing, and integration with monitoring tools for automated incident creation.',
      pt: 'Implementação e administração de plataformas ITSM para gestão de serviços de TI e controle de chamados. Deploy de Znuny (fork do OTRS) e osTicket em ambientes de produção com workflows customizados, políticas de SLA, roteamento de filas e integração com ferramentas de monitoramento para criação automática de incidentes.',
      es: 'Implementación y administración de plataformas ITSM para gestión de servicios de TI y control de tickets. Deploy de Znuny (fork de OTRS) y osTicket en ambientes de producción con workflows personalizados, políticas de SLA, enrutamiento de colas e integración con herramientas de monitoreo para creación automática de incidentes.',
    },
    techs: ['Znuny (OTRS)', 'osTicket', 'ITSM', 'ITIL', 'SLA Management', 'Linux'],
  },
]

// ─── Strengths ───

export interface StrengthItem {
  text: L10n
}

export const strengths: StrengthItem[] = [
  {
    text: {
      en: 'Full-cycle ownership: backend → DB → infra → observability → frontend',
      pt: 'Ownership full-cycle: backend → DB → infra → observabilidade → frontend',
      es: 'Ownership full-cycle: backend → DB → infra → observabilidad → frontend',
    },
  },
  {
    text: {
      en: 'Building high-availability telecom systems at scale',
      pt: 'Construção de sistemas de telecom de alta disponibilidade em escala',
      es: 'Construcción de sistemas de telecomunicaciones de alta disponibilidad a escala',
    },
  },
  {
    text: {
      en: 'Technical leadership and mentoring for developers',
      pt: 'Liderança técnica e mentoria para desenvolvedores',
      es: 'Liderazgo técnico y mentoría para desarrolladores',
    },
  },
  {
    text: {
      en: 'Architectural decision-making for distributed systems',
      pt: 'Tomada de decisões arquiteturais para sistemas distribuídos',
      es: 'Toma de decisiones arquitectónicas para sistemas distribuidos',
    },
  },
  {
    text: {
      en: 'End-to-end debugging across microservices, queues, caches, and APIs',
      pt: 'Debugging end-to-end em microsserviços, filas, caches e APIs',
      es: 'Debugging end-to-end en microservicios, colas, caches y APIs',
    },
  },
  {
    text: {
      en: 'Product mindset with focus on scalability and maintainability',
      pt: 'Mentalidade de produto com foco em escalabilidade e manutenibilidade',
      es: 'Mentalidad de producto con enfoque en escalabilidad y mantenibilidad',
    },
  },
]
