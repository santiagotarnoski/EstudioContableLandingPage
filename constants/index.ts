// Configuración del estudio contable
export const SITE_CONFIG = {
  name: 'Estudio Contable Profesional',
  shortName: 'ECP',
  tagline: 'Soluciones contables claras para hacer crecer tu negocio',
  email: 'contacto@estudiocontable.com',
  phone: '+54 3765 24-6043',
  whatsapp: '543765246043', // Sin + ni espacios
  address: 'Av. Corrientes 1234, CABA, Buenos Aires, Argentina',
  workingHours: 'Lunes a Viernes: 9:00 - 18:00',
}

// Servicios principales
export const SERVICES = [
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General y Balances',
    shortDescription: 'Mantenemos tus registros contables al día y generamos balances precisos.',
    description: 'Ofrecemos servicios completos de contabilidad general para empresas de todos los tamaños. Mantenemos tus registros contables actualizados, generamos balances mensuales y anuales, y te proporcionamos reportes financieros claros y precisos para la toma de decisiones.',
    icon: 'BarChart3',
    image: '/images/services/contabilidad.jpg',
    benefits: [
      'Registros contables actualizados',
      'Balances mensuales y anuales',
      'Reportes financieros detallados',
      'Cumplimiento normativo garantizado',
    ],
    idealFor: ['PyMEs', 'Empresas medianas', 'Emprendimientos en crecimiento'],
  },
  {
    id: 'liquidacion-impuestos',
    title: 'Liquidación de Impuestos y Sueldos',
    shortDescription: 'Gestionamos todos tus impuestos y liquidaciones de sueldos de forma eficiente.',
    description: 'Nos encargamos de la liquidación mensual de impuestos (IVA, Ganancias, Bienes Personales) y de la gestión completa de sueldos y jornales. Calculamos cargas sociales, realizamos los depósitos correspondientes y te mantenemos al día con todas las obligaciones fiscales.',
    icon: 'Calculator',
    image: '/images/services/impuestos.jpg',
    benefits: [
      'Liquidación mensual de impuestos',
      'Cálculo de cargas sociales',
      'Depósitos automáticos',
      'Asesoramiento en optimización fiscal',
    ],
    idealFor: ['Empresas con empleados', 'Comercios', 'Servicios profesionales'],
  },
  {
    id: 'asesoramiento-pymes',
    title: 'Asesoramiento para PyMEs y Emprendedores',
    shortDescription: 'Acompañamos a emprendedores y pequeñas empresas en su crecimiento.',
    description: 'Brindamos asesoramiento contable y fiscal especializado para PyMEs y emprendedores. Te ayudamos a estructurar tu negocio desde el inicio, optimizar tu carga impositiva, y tomar decisiones financieras informadas para hacer crecer tu empresa de manera sostenible.',
    icon: 'TrendingUp',
    image: '/images/services/pymes.jpg',
    benefits: [
      'Estructuración inicial del negocio',
      'Optimización de carga impositiva',
      'Planificación financiera',
      'Asesoramiento personalizado',
    ],
    idealFor: ['Emprendedores', 'Startups', 'PyMEs', 'Monotributistas'],
  },
  {
    id: 'planificacion-fiscal',
    title: 'Planificación Fiscal',
    shortDescription: 'Estrategias legales para optimizar tu situación fiscal y ahorrar impuestos.',
    description: 'Desarrollamos estrategias de planificación fiscal personalizadas para minimizar tu carga impositiva de manera legal y eficiente. Analizamos tu situación particular, identificamos oportunidades de optimización y te guiamos en la implementación de las mejores estrategias fiscales.',
    icon: 'Target',
    image: '/images/services/planificacion.jpg',
    benefits: [
      'Análisis de situación fiscal',
      'Estrategias de optimización legal',
      'Reducción de carga impositiva',
      'Cumplimiento normativo',
    ],
    idealFor: ['Empresas establecidas', 'Profesionales independientes', 'Inversores'],
  },
]

// Paquetes de servicios
export const SERVICE_PACKAGES = [
  {
    name: 'Básico',
    price: 'Consultar',
    description: 'Ideal para emprendedores y monotributistas',
    features: [
      'Inscripción en AFIP',
      'Liquidación mensual de monotributo',
      'Asesoramiento básico por email',
      'Presentación de DDJJ anuales',
    ],
    popular: false,
  },
  {
    name: 'Profesional',
    price: 'Consultar',
    description: 'Perfecto para PyMEs y comercios',
    features: [
      'Contabilidad mensual completa',
      'Liquidación de impuestos (IVA, Ganancias)',
      'Liquidación de sueldos y cargas sociales',
      'Balances mensuales',
      'Asesoramiento telefónico y por email',
      'Reuniones trimestrales',
    ],
    popular: true,
  },
  {
    name: 'Full',
    price: 'Consultar',
    description: 'Solución integral para empresas',
    features: [
      'Todo lo incluido en Profesional',
      'Planificación fiscal estratégica',
      'Auditorías y revisiones contables',
      'Reportes gerenciales personalizados',
      'Asesoramiento prioritario',
      'Reuniones mensuales',
      'Soporte dedicado',
    ],
    popular: false,
  },
]

// Por qué elegirnos
export const WHY_CHOOSE_US = [
  {
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años de trayectoria asesorando empresas de todos los tamaños en Argentina.',
    icon: 'Award',
  },
  {
    title: 'Confianza y Transparencia',
    description: 'Trabajamos con total transparencia, sin costos ocultos y con comunicación clara en cada paso.',
    icon: 'Shield',
  },
  {
    title: 'Tecnología Moderna',
    description: 'Utilizamos las últimas herramientas digitales para agilizar procesos y mantenerte informado en tiempo real.',
    icon: 'Laptop',
  },
  {
    title: 'Atención Personalizada',
    description: 'Cada cliente es único. Ofrecemos soluciones adaptadas a las necesidades específicas de tu negocio.',
    icon: 'Users',
  },
]

// Proceso de trabajo
export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Diagnóstico Inicial',
    description: 'Analizamos tu situación contable y fiscal actual para identificar necesidades y oportunidades.',
  },
  {
    step: 2,
    title: 'Plan de Acción Contable',
    description: 'Desarrollamos un plan personalizado con objetivos claros y cronograma de trabajo.',
  },
  {
    step: 3,
    title: 'Acompañamiento y Seguimiento',
    description: 'Te acompañamos mes a mes, manteniendo tus registros al día y optimizando tu gestión fiscal.',
  },
]

// Testimonios
export const TESTIMONIALS = [
  {
    name: 'María González',
    business: 'Comercio de Indumentaria',
    text: 'Desde que trabajo con ellos, mi contabilidad está al día y puedo enfocarme en hacer crecer mi negocio. Son muy profesionales y siempre están disponibles para resolver mis dudas.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    business: 'Servicios de Consultoría',
    text: 'Excelente servicio. Me ayudaron a optimizar mi carga impositiva y ahora ahorro significativamente en impuestos. La atención es personalizada y muy profesional.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    business: 'Emprendimiento Digital',
    text: 'Como emprendedora, necesitaba alguien que me guiara desde el inicio. Ellos me ayudaron a estructurar mi negocio correctamente y ahora todo está en orden.',
    rating: 5,
  },
  {
    name: 'Roberto Fernández',
    business: 'Distribuidora Mayorista',
    text: 'Llevamos 5 años trabajando juntos y nunca tuvimos un problema. Su equipo es eficiente, confiable y siempre cumplen con los plazos. Totalmente recomendado.',
    rating: 5,
  },
]

// FAQs
export const FAQS = [
  {
    question: '¿Cuáles son sus honorarios?',
    answer: 'Nuestros honorarios varían según el tipo de servicio y la complejidad de cada caso. Ofrecemos paquetes mensuales para servicios recurrentes y honorarios por proyecto para consultorías específicas. Contactanos para una cotización personalizada sin compromiso.',
  },
  {
    question: '¿Trabajan de forma online o presencial?',
    answer: 'Trabajamos de forma híbrida. Realizamos la mayoría de los procesos de forma online para mayor eficiencia, pero también ofrecemos reuniones presenciales cuando sea necesario. Utilizamos plataformas seguras para el intercambio de documentación.',
  },
  {
    question: '¿Qué documentación necesito para comenzar?',
    answer: 'Para comenzar, necesitamos la documentación básica de tu empresa (constitución, CUIT, alta en AFIP), comprobantes de los últimos meses, y cualquier documentación contable previa. Te enviaremos una lista detallada según tu caso particular.',
  },
  {
    question: '¿Cuánto tiempo lleva procesar mi contabilidad mensual?',
    answer: 'Normalmente, procesamos la contabilidad mensual dentro de los primeros 10 días hábiles del mes siguiente. Para clientes con paquetes prioritarios, el plazo se reduce a 5 días hábiles.',
  },
  {
    question: '¿Ofrecen servicios para monotributistas?',
    answer: 'Sí, ofrecemos servicios especializados para monotributistas, incluyendo inscripción, recategorización, liquidación mensual y asesoramiento para optimizar tu categoría según tus ingresos.',
  },
  {
    question: '¿Qué pasa si tengo una urgencia o consulta fuera de horario?',
    answer: 'Ofrecemos un servicio de consultas urgentes para clientes con paquetes Profesional y Full. Para consultas generales, respondemos dentro de 24 horas hábiles. También tenemos un canal de WhatsApp para comunicación rápida.',
  },
]

// Equipo
export const TEAM = [
  {
    name: 'Dr. Juan Pérez',
    role: 'Contador Público - Socio Fundador',
    bio: 'Más de 20 años de experiencia en asesoramiento contable y fiscal. Especializado en PyMEs y planificación fiscal.',
    image: '/team/juan-perez.jpg',
  },
  {
    name: 'Lic. María García',
    role: 'Contadora Pública - Socia',
    bio: 'Especialista en liquidación de sueldos y cargas sociales. Con amplia experiencia en empresas con personal a cargo.',
    image: '/team/maria-garcia.jpg',
  },
  {
    name: 'CPN Carlos López',
    role: 'Contador Público Nacional',
    bio: 'Experto en contabilidad general y balances. Se desempeña en auditorías y revisiones contables para empresas medianas y grandes.',
    image: '/team/carlos-lopez.jpg',
  },
]

// Artículos del blog
export const BLOG_POSTS = [
  {
    id: 'vencimientos-2024',
    title: 'IGJ dispone moratoria para presentación de balances hasta diciembre 2025',
    excerpt: 'La Inspección General de Justicia implementó una moratoria que permite a más de 520.000 entidades privadas regularizar la presentación de balances y documentación contable hasta el 31 de diciembre de 2025.',
    date: '2025-01-15',
    category: 'Impuestos',
    readTime: '4 min',
    externalUrl: 'https://cpcesfe1.org.ar/25187/impositivas-atencion-igj-dispuso-una-moratoria-para-la-presentacion-de-balances-y-documentacion-contable/',
    content: `
      <p>La Inspección General de Justicia (IGJ) ha implementado una medida importante que beneficiará a más de 520.000 entidades privadas en todo el país. Se trata de una moratoria especial para la presentación de balances y documentación contable que se extiende hasta el 31 de diciembre de 2025.</p>
      
      <h2>¿Qué implica esta moratoria?</h2>
      
      <p>Esta disposición de la IGJ permite que las entidades privadas que tengan pendiente la presentación de balances y documentación contable puedan regularizar su situación sin enfrentar sanciones durante el período establecido. Es una oportunidad única para ponerse al día con las obligaciones contables y legales.</p>
      
      <h2>Beneficiarios de la medida</h2>
      
      <p>La moratoria alcanza a más de 520.000 entidades privadas que operan en el territorio argentino, incluyendo sociedades comerciales, asociaciones civiles, fundaciones y otras formas jurídicas que deben cumplir con las obligaciones de presentación ante la IGJ.</p>
      
      <h2>Importancia para las empresas</h2>
      
      <p>Esta medida es especialmente relevante en el contexto actual, ya que muchas empresas han enfrentado dificultades para cumplir con los plazos establecidos debido a diversos factores económicos y administrativos. La moratoria ofrece un respiro necesario para organizar la documentación y cumplir con las obligaciones de manera ordenada.</p>
      
      <h2>Recomendaciones</h2>
      
      <ul>
        <li><strong>No esperes hasta último momento:</strong> Aprovechá este tiempo para organizar toda tu documentación contable</li>
        <li><strong>Consultá con un profesional:</strong> Un contador puede ayudarte a identificar qué documentación necesitás presentar</li>
        <li><strong>Planificá con anticipación:</strong> Aunque la moratoria va hasta diciembre 2025, es mejor cumplir antes</li>
        <li><strong>Mantené tus registros actualizados:</strong> Esto facilitará la presentación cuando corresponda</li>
      </ul>
      
      <h2>¿Necesitás ayuda con la presentación?</h2>
      
      <p>En nuestro estudio contable, te ayudamos a preparar y presentar toda la documentación contable requerida por la IGJ. Nos encargamos de que tu empresa cumpla con todas las obligaciones legales y contables de manera ordenada y en tiempo.</p>
      
      <p><strong>Contactanos</strong> para recibir asesoramiento sobre cómo aprovechar esta moratoria y regularizar tu situación contable.</p>
    `,
  },
  {
    id: 'monotributo-2024',
    title: 'Ualá se suma al pago de impuestos de AFIP: nuevas formas de abonar',
    excerpt: 'La billetera digital Ualá incorporó el pago de impuestos de AFIP, permitiendo abonar monotributo, autónomos y VEPs junto a otras opciones como QR, homebanking y débito automático.',
    date: '2025-01-10',
    category: 'Monotributo',
    readTime: '5 min',
    externalUrl: 'https://www.fiece.org.ar/category/noticias/',
    content: `
      <p>La billetera digital Ualá ha incorporado una nueva funcionalidad que facilita significativamente el pago de impuestos de AFIP. Ahora los usuarios pueden abonar monotributo, autónomos y VEPs (Valores Electrónicos de Pago) directamente desde la aplicación, sumándose a otras opciones de pago ya disponibles.</p>
      
      <h2>Nuevas formas de pago disponibles</h2>
      
      <p>Con esta incorporación, Ualá se suma a las múltiples opciones que ya existían para pagar impuestos de AFIP, incluyendo:</p>
      
      <ul>
        <li><strong>Pago con QR:</strong> Escaneo rápido desde la app</li>
        <li><strong>Homebanking:</strong> Transferencia desde tu banco</li>
        <li><strong>Billeteras digitales:</strong> Mercado Pago, Ualá y otras</li>
        <li><strong>Débito automático:</strong> Para pagos recurrentes</li>
      </ul>
      
      <h2>Beneficios para monotributistas</h2>
      
      <p>Esta nueva opción es especialmente útil para monotributistas que buscan agilizar el pago de sus cuotas mensuales. La integración permite:</p>
      
      <ul>
        <li>Pagar desde cualquier lugar y en cualquier momento</li>
        <li>Evitar filas en bancos o entidades de pago</li>
        <li>Gestionar todos los pagos desde una sola aplicación</li>
        <li>Recibir confirmaciones inmediatas de los pagos</li>
      </ul>
      
      <h2>¿Qué impuestos se pueden pagar?</h2>
      
      <p>La nueva funcionalidad de Ualá permite abonar:</p>
      
      <ul>
        <li><strong>Monotributo:</strong> Cuotas mensuales del régimen simplificado</li>
        <li><strong>Autónomos:</strong> Aportes y contribuciones de trabajadores autónomos</li>
        <li><strong>VEPs:</strong> Valores Electrónicos de Pago para diversos conceptos</li>
        <li>Otros impuestos y obligaciones fiscales</li>
      </ul>
      
      <h2>Importancia de la digitalización</h2>
      
      <p>Esta medida forma parte de un proceso de digitalización más amplio que busca facilitar el cumplimiento de obligaciones fiscales. La incorporación de más opciones de pago digital mejora la experiencia del contribuyente y reduce los tiempos de gestión.</p>
      
      <h2>Recomendaciones</h2>
      
      <ul>
        <li><strong>Verificá los vencimientos:</strong> Aunque tengas más opciones de pago, no olvides las fechas de vencimiento</li>
        <li><strong>Configurá recordatorios:</strong> Usá la app para programar recordatorios de pago</li>
        <li><strong>Guardá los comprobantes:</strong> Descargá y guardá los comprobantes de pago</li>
        <li><strong>Revisá tu situación:</strong> Aprovechá para verificar que estés en la categoría correcta</li>
      </ul>
      
      <h2>¿Necesitás ayuda con tus pagos?</h2>
      
      <p>En nuestro estudio contable, te ayudamos a gestionar todos tus pagos impositivos, te recordamos los vencimientos y te asesoramos sobre la mejor forma de cumplir con tus obligaciones fiscales.</p>
      
      <p><strong>Contactanos</strong> para recibir asesoramiento sobre el pago de tus impuestos y la gestión de tu situación fiscal.</p>
    `,
  },
  {
    id: 'tips-pymes',
    title: 'Empresas fintech de Argentina se quejan por impuestos "asfixiantes"',
    excerpt: 'La Cámara Argentina Fintech expresó su preocupación por la carga impositiva que enfrentan las empresas del sector, argumentando que los impuestos tanto a nivel nacional como provincial obstaculizan el desarrollo y la digitalización de la economía.',
    date: '2025-01-05',
    category: 'PyMEs',
    readTime: '5 min',
    externalUrl: 'https://www.bloomberglinea.com/latinoamerica/argentina/empresas-fintech-de-argentina-se-quejan-por-impuestos-asfixiantes-de-nacion-y-provincias/',
    content: `
      <p>La Cámara Argentina Fintech ha expresado públicamente su preocupación por la carga impositiva que enfrentan las empresas del sector tecnológico y financiero en el país. Según la entidad, los impuestos tanto a nivel nacional como provincial están generando una presión "asfixiante" que obstaculiza el desarrollo y la digitalización de la economía argentina.</p>
      
      <h2>El problema de la doble imposición</h2>
      
      <p>Uno de los principales problemas señalados por las empresas fintech es la acumulación de impuestos a nivel nacional y provincial. Esta doble imposición genera una carga fiscal que puede llegar a ser insostenible para muchas empresas del sector, especialmente para las PyMEs tecnológicas que están en proceso de crecimiento.</p>
      
      <h2>Impacto en el desarrollo del sector</h2>
      
      <p>El sector fintech es clave para la digitalización de la economía argentina. Sin embargo, la alta carga impositiva puede:</p>
      
      <ul>
        <li>Desalentar la inversión en el sector</li>
        <li>Limitar el crecimiento de las empresas existentes</li>
        <li>Reducir la competitividad frente a otros países</li>
        <li>Dificultar la creación de nuevas empresas tecnológicas</li>
      </ul>
      
      <h2>La situación de las PyMEs tecnológicas</h2>
      
      <p>Las pequeñas y medianas empresas del sector tecnológico enfrentan desafíos particulares:</p>
      
      <ul>
        <li><strong>Alta carga fiscal:</strong> Múltiples impuestos nacionales y provinciales</li>
        <li><strong>Complejidad administrativa:</strong> Diferentes jurisdicciones con distintas normativas</li>
        <li><strong>Costos de cumplimiento:</strong> Necesidad de asesoramiento profesional especializado</li>
        <li><strong>Impacto en la rentabilidad:</strong> Los impuestos reducen significativamente los márgenes</li>
      </ul>
      
      <h2>La importancia de la planificación fiscal</h2>
      
      <p>En este contexto, la planificación fiscal se vuelve fundamental para las empresas del sector. Una buena estrategia fiscal puede ayudar a:</p>
      
      <ul>
        <li>Optimizar la estructura impositiva</li>
        <li>Identificar beneficios y exenciones disponibles</li>
        <li>Minimizar la carga fiscal de manera legal</li>
        <li>Mejorar la rentabilidad del negocio</li>
      </ul>
      
      <h2>Recomendaciones para empresas del sector</h2>
      
      <ul>
        <li><strong>Asesoramiento especializado:</strong> Consultá con profesionales que conozcan el sector</li>
        <li><strong>Revisión de estructura:</strong> Evaluá si tu estructura societaria es la más eficiente</li>
        <li><strong>Conocimiento de beneficios:</strong> Investigá regímenes de promoción que puedan aplicarse</li>
        <li><strong>Planificación anticipada:</strong> No esperes a fin de año para pensar en impuestos</li>
      </ul>
      
      <h2>El debate sobre la reforma tributaria</h2>
      
      <p>Esta situación se enmarca en un debate más amplio sobre la necesidad de una reforma tributaria en Argentina. El sector privado, especialmente el tecnológico, está pidiendo una simplificación y reducción de la carga impositiva para fomentar el crecimiento y la inversión.</p>
      
      <h2>¿Cómo podemos ayudarte?</h2>
      
      <p>En nuestro estudio contable, especializamos en asesorar a empresas tecnológicas y fintech. Ofrecemos:</p>
      
      <ul>
        <li>Análisis de carga impositiva específico para tu empresa</li>
        <li>Estrategias de optimización fiscal legal</li>
        <li>Asesoramiento sobre estructura societaria</li>
        <li>Gestión de obligaciones nacionales y provinciales</li>
        <li>Planificación fiscal estratégica</li>
      </ul>
      
      <p><strong>Contactanos</strong> para recibir asesoramiento personalizado sobre cómo optimizar tu situación fiscal y hacer crecer tu empresa en el sector tecnológico.</p>
    `,
  },
  {
    id: 'planificacion-fiscal',
    title: 'Cómo pueden hacer las empresas para ahorrar plata en el pago de impuestos',
    excerpt: 'En un escenario de inflación sostenida y altos costos financieros, es esencial evitar pagar impuestos anticipados en exceso. Te contamos estrategias legales para optimizar tu carga impositiva.',
    date: '2024-12-20',
    category: 'Planificación',
    readTime: '6 min',
    externalUrl: 'https://www.fiece.org.ar/category/noticias/',
    content: `
      <p>En un contexto de inflación sostenida y altos costos financieros, las empresas argentinas enfrentan el desafío de optimizar su flujo de caja y reducir costos innecesarios. Una de las áreas donde se puede lograr un ahorro significativo es en la gestión de impuestos, específicamente evitando pagar impuestos anticipados en exceso.</p>
      
      <h2>El problema de los pagos anticipados excesivos</h2>
      
      <p>Muchas empresas realizan pagos a cuenta de impuestos que superan lo que realmente van a adeudar al final del ejercicio fiscal. Esto genera varios problemas:</p>
      
      <ul>
        <li><strong>Pérdida de liquidez:</strong> El dinero queda "congelado" en pagos anticipados</li>
        <li><strong>Costo de oportunidad:</strong> Ese dinero podría estar generando ingresos o financiando crecimiento</li>
        <li><strong>Dificultad de recuperación:</strong> Aunque se puede recuperar, el proceso puede ser lento</li>
        <li><strong>Impacto en el flujo de caja:</strong> Especialmente crítico en períodos de alta inflación</li>
      </ul>
      
      <h2>Estrategias para optimizar los pagos a cuenta</h2>
      
      <h3>1. Cálculo preciso de pagos a cuenta</h3>
      
      <p>Es fundamental calcular correctamente los pagos a cuenta basándose en proyecciones realistas de resultados. Esto implica:</p>
      
      <ul>
        <li>Analizar los resultados históricos</li>
        <li>Considerar las proyecciones de ingresos y gastos</li>
        <li>Ajustar según la realidad del negocio</li>
        <li>Revisar periódicamente los cálculos</li>
      </ul>
      
      <h3>2. Ajuste de pagos a cuenta durante el año</h3>
      
      <p>Los pagos a cuenta no son inmutables. Podés ajustarlos durante el año si:</p>
      
      <ul>
        <li>Tus resultados reales difieren de las proyecciones</li>
        <li>Hay cambios significativos en tu actividad</li>
        <li>Identificás que estás pagando de más</li>
      </ul>
      
      <h3>3. Optimización del timing de gastos e ingresos</h3>
      
      <p>El momento en que registrás ingresos y gastos puede afectar significativamente tu carga impositiva:</p>
      
      <ul>
        <li><strong>Anticipar gastos deducibles:</strong> Si es posible, adelantá gastos al período fiscal actual</li>
        <li><strong>Planificar inversiones:</strong> Coordiná grandes compras con períodos de mayor rentabilidad</li>
        <li><strong>Gestionar el reconocimiento de ingresos:</strong> Según el método contable utilizado</li>
      </ul>
      
      <h2>Beneficios de una planificación adecuada</h2>
      
      <p>Una buena planificación fiscal puede generar:</p>
      
      <ul>
        <li><strong>Mejor flujo de caja:</strong> Evitás pagar de más y mantener liquidez</li>
        <li><strong>Reducción de costos financieros:</strong> Menos necesidad de financiamiento</li>
        <li><strong>Mayor rentabilidad:</strong> Optimización de la carga impositiva</li>
        <li><strong>Mejor gestión:</strong> Visibilidad clara de las obligaciones fiscales</li>
      </ul>
      
      <h2>Consideraciones importantes</h2>
      
      <ul>
        <li><strong>No subestimar los pagos:</strong> Pagar menos de lo debido puede generar multas e intereses</li>
        <li><strong>Documentación adecuada:</strong> Mantené registros que justifiquen tus cálculos</li>
        <li><strong>Revisión periódica:</strong> Los pagos a cuenta deben revisarse regularmente</li>
        <li><strong>Asesoramiento profesional:</strong> Un contador puede ayudarte a optimizar sin riesgos</li>
      </ul>
      
      <h2>En contexto de alta inflación</h2>
      
      <p>En un escenario inflacionario, la optimización de pagos a cuenta se vuelve aún más crítica:</p>
      
      <ul>
        <li>El dinero pierde valor con el tiempo</li>
        <li>Los costos financieros son altos</li>
        <li>La liquidez es fundamental para operar</li>
        <li>Cada peso cuenta para el crecimiento</li>
      </ul>
      
      <h2>¿Cómo podemos ayudarte?</h2>
      
      <p>En nuestro estudio contable, te ayudamos a:</p>
      
      <ul>
        <li>Calcular pagos a cuenta precisos y optimizados</li>
        <li>Revisar y ajustar tus pagos durante el año</li>
        <li>Planificar el timing de ingresos y gastos</li>
        <li>Optimizar tu flujo de caja fiscal</li>
        <li>Evitar pagos anticipados excesivos</li>
      </ul>
      
      <p><strong>Contactanos</strong> para recibir asesoramiento sobre cómo optimizar tus pagos a cuenta y mejorar el flujo de caja de tu empresa sin comprometer el cumplimiento de tus obligaciones fiscales.</p>
    `,
  },
]

// Valores del estudio
export const VALUES = [
  {
    title: 'Misión',
    description: 'Brindar servicios contables y fiscales de excelencia, acompañando a nuestros clientes en el crecimiento de sus negocios con profesionalismo, transparencia y compromiso.',
  },
  {
    title: 'Visión',
    description: 'Ser el estudio contable de referencia en Argentina, reconocido por la calidad de nuestros servicios, la innovación tecnológica y el compromiso con el éxito de nuestros clientes.',
  },
  {
    title: 'Valores',
    description: 'Profesionalismo, transparencia, confianza, innovación y compromiso con la excelencia en cada servicio que brindamos.',
  },
]

