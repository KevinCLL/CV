/* ============================================
   K.CARACUEL — Internationalization (i18n)
   Trilingual: Español / Català / English
   ============================================ */

(function () {
    'use strict';

    var translations = {

        /* ============================
           ESPAÑOL
           ============================ */
        es: {
            // Document
            'doc.title': 'Kevin Caracuel Llabrés',

            // Nav
            'nav.perfil': 'Perfil',
            'nav.formacion': 'Formación',
            'nav.experiencia': 'Experiencia',
            'nav.publicaciones': 'Publicaciones',
            'nav.personal': 'Personal',
            'nav.contacto': 'Contacto',

            // Hero
            'hero.tagline': 'Arquitecto de Software \u00B7 Ingeniero \u00B7 Fil\u00F3sofo',

            // Profile
            'profile.title': 'Perfil',
            'profile.text': '<p>De soldado a matem\u00E1tico, de ingeniero a fil\u00F3sofo, de fil\u00F3sofo a arquitecto de software. Mi carrera nunca ha seguido una l\u00EDnea recta, y ese es precisamente el punto.</p><p>Empec\u00E9 con un Grado en Matem\u00E1ticas en Mallorca mientras serv\u00EDa en el Ej\u00E9rcito de Tierra. Luego me traslad\u00E9 a Sevilla para cursar Ingenier\u00EDa Mecatr\u00F3nica, seguida de un M\u00E1ster y un Doctorado en Filosof\u00EDa de la Ciencia, donde pas\u00E9 cuatro a\u00F1os formalizando la consciencia a trav\u00E9s de la topolog\u00EDa y publicando en revistas indexadas con investigadores de la Universidad de Sevilla y la Universitat Pompeu Fabra.</p><p>Desde 2016 construyo software profesionalmente. He liderado squads de frontend en Inditex/Bershka, dise\u00F1ado arquitecturas en Airbus y lanzado productos en startups de los sectores inmobiliario y tur\u00EDstico. Tambi\u00E9n he desarrollado aplicaciones con inteligencia artificial como freelance.</p><p>Soy presidente de la asociaci\u00F3n de videojuegos, juegos de mesa y rol m\u00E1s grande de Mallorca, y actualmente publico un libro que re\u00FAne todo lo que he explorado: matem\u00E1ticas, consciencia y los l\u00EDmites de lo que los sistemas formales pueden capturar.</p><p>Me gustan los problemas dif\u00EDciles, las intersecciones inusuales y los equipos que se preocupan por el oficio.</p>',
            'profile.nacimiento': 'Nacimiento',
            'profile.residencia': 'Residencia',
            'profile.residencia.val': 'Lloseta, Baleares, Espa\u00F1a',
            'profile.estudios': 'Estudios',
            'profile.estudios.val': '2 carreras, 1 m\u00E1ster y 1 doctorado',
            'profile.exp': 'Experiencia',
            'profile.years': 'a\u00F1os',
            'profile.papers': 'Papers',
            'profile.conf': 'Conferencias',
            'profile.escrito': 'Texto escrito',
            'profile.escrito.val': '1 libro + 1 gui\u00F3n en desarrollo',
            'profile.idiomas': 'Idiomas',
            'profile.voluntariado': 'Voluntariado',
            'profile.voluntariado.val': '2 organizaciones',

            // Education
            'edu.title': 'Formaci\u00F3n acad\u00E9mica',
            'edu.iedib': 'Especializaci\u00F3n en Inteligencia Artificial y Big Data',
            'edu.iedib.desc': 'Formaci\u00F3n avanzada en aprendizaje autom\u00E1tico, procesamiento del lenguaje natural, infraestructura de datos a gran escala y despliegue de modelos en entornos de producci\u00F3n.',
            'edu.iedib.center': 'IEDIB \u2014 Institut d\u2019Ensenyaments a Dist\u00E0ncia de les Illes Balears',
            'edu.phd': 'Doctorado en Filosof\u00EDa (investigaci\u00F3n en ciencia cognitiva computacional)',
            'edu.phd.center': 'Universidad de Sevilla (a tiempo parcial)',
            'edu.phd.thesis': 'Tesis: \u00ABMarco topol\u00F3gico para la clasificaci\u00F3n de estados fenomenol\u00F3gicos en sustratos computacionales\u00BB',
            'edu.phd.desc': 'Dept. de Filosof\u00EDa, L\u00F3gica y Filosof\u00EDa de la Ciencia (L\u00EDnea 3). Directora: Elena Vidal-Moreno. Tres art\u00EDculos publicados en revistas indexadas durante el periodo doctoral.',
            'edu.master': 'M\u00E1ster Interuniversitario en L\u00F3gica y Filosof\u00EDa de la Ciencia',
            'edu.master.center': 'Universidad de Sevilla (programa coordinado por USAL, UVa, USC, ULL, UDC, CSIC)',
            'edu.master.thesis': 'TFM: \u00ABInvariantes topol\u00F3gicos de la experiencia fenom\u00E9nica\u00BB',
            'edu.master.desc': 'Investigaci\u00F3n centrada en filosof\u00EDa de la mente y ciencia cognitiva. Este trabajo sent\u00F3 las bases para el primer art\u00EDculo publicado en 2016.',
            'edu.eng': 'Grado en Ingenier\u00EDa Electr\u00F3nica, Rob\u00F3tica y Mecatr\u00F3nica',
            'edu.eng.center': 'Universidad de Sevilla (t\u00EDtulo interuniversitario UMA-US, con convalidaciones del Grado en Matem\u00E1ticas)',
            'edu.eng.thesis': 'TFG: \u00ABRedes neuronales recurrentes aplicadas al control adaptativo de sistemas aut\u00F3nomos\u00BB',
            'edu.eng.desc': 'Formaci\u00F3n en electr\u00F3nica, rob\u00F3tica, sistemas de control y mecatr\u00F3nica aplicada. Completado en dos a\u00F1os acad\u00E9micos gracias a m\u00F3dulos convalidados (c\u00E1lculo, \u00E1lgebra lineal, f\u00EDsica, programaci\u00F3n).',
            'edu.math': 'Grado en Matem\u00E1ticas',
            'edu.math.thesis': 'TFG: \u00ABInvariantes homol\u00F3gicos en espacios de configuraci\u00F3n topol\u00F3gica\u00BB',
            'edu.math.desc': 'Compatible con el servicio militar (RIL Palma 47, julio 2008 - octubre 2010). Enfoque en topolog\u00EDa y \u00E1lgebra. Este grado proporcion\u00F3 los fundamentos formales para la posterior investigaci\u00F3n en topolog\u00EDa aplicada a la filosof\u00EDa de la mente.',
            'edu.math.center': 'Universitat de les Illes Balears',
            'edu.bach': 'Bachillerato Tecnol\u00F3gico',
            'edu.bach.center': 'IES Pau Casesnoves, Mallorca',

            // Experience
            'exp.title': 'Experiencia laboral',
            'exp.airbus.date': 'Mar 2023 - Presente',
            'exp.airbus.loc': 'Madrid, Espa\u00F1a',
            'exp.freelance.date': 'Feb 2024 - Sep 2025',
            'exp.freelance.loc': 'Espa\u00F1a',
            'exp.housfy.date': 'Nov 2019 - Ago 2020',
            'exp.everis1.date': 'Sep 2018 - Nov 2019',
            'exp.everis2.date': 'Sep 2017 - Sep 2018',
            'exp.hundredrooms.date': 'Feb 2016 - Sep 2017',
            'exp.upf.date': 'Sep 2016 - Dic 2020',
            'exp.army.company': 'Ej\u00E9rcito de Tierra, RIL Palma 47',
            'exp.airbus.desc': '<p>Airbus, el mayor fabricante de aeronaves del mundo.</p><p><strong>Responsabilidades:</strong></p><ul><li>Arquitectura de nuevos proyectos</li><li>Organizaci\u00F3n y gesti\u00F3n de equipos Front y Back.</li><li>Creaci\u00F3n de objetivos y prioridades respecto a proyectos.</li><li>Enlace entre negocio y desarrollo</li></ul><p><strong>Implementaciones destacadas:</strong></p><ul><li>Editor de contenido personalizado basado en necesidades de la empresa. F\u00F3rmulas matem\u00E1ticas, requisitos espec\u00EDficos, etc.</li><li>Una aplicaci\u00F3n interna que distribuye usuarios y clientes...</li></ul>',
            'exp.freelance.desc': '<p>Especializado en aplicaciones web con IA e interfaces conversacionales.</p><p><strong>Responsabilidades:</strong></p><ul><li>Dise\u00F1o e implementaci\u00F3n de soluciones web con IA para diversos clientes y proyectos personales</li><li>Desarrollo de chatbots y agentes conversacionales con t\u00E9cnicas modernas de NLP</li><li>Integraci\u00F3n de modelos AI/ML con frameworks frontend para experiencias de usuario mejoradas</li><li>Dise\u00F1o de arquitectura para aplicaciones de IA escalables con capacidades en tiempo real</li><li>Consultor\u00EDa en estrategia de IA e implementaci\u00F3n</li></ul>',
            'exp.bershka.desc': '<p>Inditex, +152K empleados y m\u00E1s de 7.000 tiendas en todo el mundo.</p><p><strong>Responsabilidades:</strong></p><ul><li>Desarrollador senior en el squad de Customer. UX, Navegaci\u00F3n y Generaci\u00F3n de formularios.</li><li>Desarrollador senior en el squad de Checkout. Pagos.</li><li>Squad lead de Discovery. Nuevas funcionalidades.</li><li>Squad lead de CustomLabs. Personalizaci\u00F3n.</li></ul><p><strong>Implementaciones destacadas:</strong></p><ul><li>Un generador de formularios basado en archivos est\u00E1ticos para despliegue en caliente.</li><li>Una navegaci\u00F3n por pila basada en los sistemas de navegaci\u00F3n nativos.</li></ul>',
            'exp.housfy.desc': '<p>Startup, una de las inmobiliarias de mayor crecimiento en Europa.</p><p><strong>Responsabilidades:</strong></p><ul><li>Desarrollo general de frontend y UI/UX.</li><li>Squad lead de las secciones de Housfy Pro.</li><li>Squad lead de las secciones de alquileres.</li></ul><p><strong>Implementaciones destacadas:</strong></p><ul><li>Un sistema basado en componentes para creaci\u00F3n ultrarr\u00E1pida de landings.</li><li>Un minijuego divertido basado en el dinosaurio de Chrome para un spot de marketing.</li></ul><p>Debido a la pandemia y problemas internos, todo el equipo de desarrollo abandon\u00F3 el proyecto.</p>',
            'exp.everis1.desc': '<p>Zurich, la mayor aseguradora de Suiza. La 117.\u00AA empresa p\u00FAblica m\u00E1s grande del mundo.</p><p><strong>Responsabilidades:</strong></p><ul><li>Liderar el nuevo squad de Frontend de un nuevo proyecto.</li><li>Mentor\u00EDa del equipo previamente especializado en Java.</li></ul><p><strong>Implementaciones destacadas:</strong></p><ul><li>Una librer\u00EDa de componentes con playground para usar en todos los proyectos de la empresa.</li><li>Skeleton base para cualquier nueva aplicaci\u00F3n.</li><li>Snippets, automatizaciones, documentaci\u00F3n y otras mejoras de productividad...</li></ul>',
            'exp.everis2.desc': '<p>Air Europa, la tercera aerol\u00EDnea espa\u00F1ola.</p><p><strong>Responsabilidades:</strong></p><ul><li>Liderar la migraci\u00F3n de la arquitectura antigua (JQuery) a una nueva (Vue.js).</li><li>Mentor\u00EDa del equipo previamente centrado en backend.</li><li>Integraci\u00F3n de nuevas metodolog\u00EDas \u00E1giles en la empresa.</li></ul><p>El proyecto fue migrado exitosamente a una nueva arquitectura.</p>',
            'exp.hundredrooms.desc': '<p>Startup, comparador internacional de alojamientos vacacionales.</p><p><strong>Responsabilidades:</strong></p><ul><li>Frontend Junior.</li><li>Supervisi\u00F3n e implementaci\u00F3n del UI/UX.</li><li>Participaci\u00F3n activa en la metodolog\u00EDa \u00E1gil Scrum.</li></ul><p><strong>Implementaciones destacadas:</strong></p><ul><li>Funcionalidad de dibujo sobre mapa para mostrar solo las casas dentro de esos vectores.</li><li>Sistema de A/B testing basado en porcentajes.</li><li>WYSIWYG para publicar posts de blog para el equipo de contenidos.</li></ul><p>La empresa fue adquirida exitosamente por Holidu.</p>',
            'exp.upf.role': 'Investigador asociado',
            'exp.upf.desc': '<p>Cognition and Brain Group, Departamento de Tecnolog\u00EDas de la Informaci\u00F3n y las Comunicaciones (DTIC). Investigaci\u00F3n en formalizaci\u00F3n topol\u00F3gica de la consciencia y ciencia cognitiva computacional. Publicaci\u00F3n de 5 art\u00EDculos en revistas indexadas (2016-2020) sobre invariantes topol\u00F3gicos de la experiencia fenom\u00E9nica, gradientes morales en sustratos no biol\u00F3gicos, isomorfismo causal, ontolog\u00EDa l\u00FAdica y los l\u00EDmites del programa topol\u00F3gico. Colaboraci\u00F3n con investigadores de la Universidad de Sevilla y la UPF.</p>',
            'exp.army.role': 'Soldado de Infanter\u00EDa',
            'exp.army.desc': '<ul><li>Formaci\u00F3n militar b\u00E1sica en CIMOV (Centro de Formaci\u00F3n de Tropa n\u00BA 1), C\u00E1ceres (3 meses).</li><li>Destinado en el Regimiento de Infanter\u00EDa Ligera \u00ABPalma\u00BB 47, Illes Balears.</li><li>Ejercicios de campo en Menorca, Chinchilla (Albacete), San Gregorio (Zaragoza) y Cabrera.</li><li>Misi\u00F3n de paz de 3 meses en Afganist\u00E1n (ISAF).</li><li>Tirador selecto y operador de radio.</li></ul>',

            // Publications
            'pub.title': 'Publicaciones',
            'pub.papers': 'Art\u00EDculos cient\u00EDficos',
            'pub.papers.intro': 'Investigaci\u00F3n centrada en la intersecci\u00F3n entre matem\u00E1ticas, ciencia cognitiva computacional y filosof\u00EDa de la mente. Los trabajos abordan problemas fundamentales sobre la naturaleza de la consciencia, la agencia moral en sistemas artificiales y los l\u00EDmites formales de la transferencia de identidad.',
            'pub.paper1.desc': 'Propone que cada experiencia subjetiva posee una estructura matem\u00E1tica formalizable mediante topolog\u00EDa real: espacios de Hausdorff, grupos de homolog\u00EDa y variedades diferenciables. El marco establece que dos experiencias son fenomenol\u00F3gicamente id\u00E9nticas si y solo si son topol\u00F3gicamente equivalentes (homeomorfas), lo que implica que qualia id\u00E9nticos podr\u00EDan emerger en sustratos radicalmente distintos.',
            'pub.paper2.desc': 'Reemplaza la dicotom\u00EDa cl\u00E1sica \u00ABtiene moral / no tiene moral\u00BB por un campo escalar continuo: cada sistema posee un gradiente de agencia moral, an\u00E1logo a un campo de temperatura. Define operadores diferenciales sobre este campo (divergencia moral, rotacional \u00E9tico) y demuestra que la responsabilidad emerge en puntos donde el gradiente supera un umbral cr\u00EDtico, de forma an\u00E1loga a una transici\u00F3n de fase termodin\u00E1mica.',
            'pub.paper3.desc': 'Formaliza el \u00ABproblema del teletransporte\u00BB con rigor matem\u00E1tico. Utilizando teor\u00EDa de categor\u00EDas, define \u00ABisomorfismo causal\u00BB de manera precisa y demuestra que la independencia de sustrato es condici\u00F3n necesaria pero no suficiente para la transferencia de consciencia: se requiere adem\u00E1s preservar la estructura temporal fina. Un \u00ABteorema de no-clonaci\u00F3n\u00BB para consciencias, an\u00E1logo al de la mec\u00E1nica cu\u00E1ntica.',
            'pub.paper4.desc': 'Defiende que los juegos de mesa son el formato m\u00EDnimo en el que emerge la consciencia estrat\u00E9gica. Conecta la fenomenolog\u00EDa de Husserl con la teor\u00EDa de sistemas din\u00E1micos, definiendo \u00ABespacios de fase l\u00FAdicos\u00BB donde los atractores son las estrategias ganadoras y los puntos de bifurcaci\u00F3n representan los momentos donde la creatividad humana supera al c\u00E1lculo puro.',
            'pub.paper5.desc': 'Ensayo reflexivo que cierra el programa de investigaci\u00F3n topol\u00F3gica. Partiendo de Ciudad Permutaci\u00F3n de Greg Egan, examina los l\u00EDmites inherentes de la formalizaci\u00F3n matem\u00E1tica de la consciencia y confronta las promesas del marco topol\u00F3gico con sus restricciones fundamentales. Constituye expl\u00EDcitamente el \u00FAltimo trabajo acad\u00E9mico del autor, que se\u00F1ala la narrativa especulativa como v\u00EDa para explorar aquello que la formalizaci\u00F3n no alcanza.',
            'pub.scifi': 'Ciencia ficci\u00F3n dura',
            'pub.invariantes.desc': 'Trece relatos de ciencia ficci\u00F3n que exploran lo que permanece cuando todo lo dem\u00E1s ha cambiado. La consciencia despojada de su funci\u00F3n. La identidad reducida a su esqueleto topol\u00F3gico. El tiempo liberado de su direcci\u00F3n. La informaci\u00F3n que sobrevive a la muerte del universo. Cada relato parte de una premisa cient\u00EDfica rigurosa (la m\u00E9trica de Alcubierre, la segunda ley de la termodin\u00E1mica, el polinomio de Jones, la longitud de Planck) y la lleva hasta sus consecuencias m\u00E1s \u00EDntimas. De la escala de Planck a la muerte t\u00E9rmica del cosmos, de la corteza insular de un cerebro humano a una burbuja de distorsi\u00F3n m\u00E9trica, estos relatos trazan un arco que va de lo m\u00E1s \u00EDntimo a lo m\u00E1s vasto.',

            // Conferences
            'conf.title': 'Conferencias',
            'conf.conf1.venue': 'XI Congreso SLMFCE, Sevilla',
            'conf.conf1.talk': '\u00ABInvariantes topol\u00F3gicos como clasificadores de experiencia fenom\u00E9nica: resultados y l\u00EDmites\u00BB',
            'conf.talk': 'Ponencia invitada en la mesa \u00ABFormalismos y consciencia\u00BB.',
            'conf.conf2.talk': '\u00ABMicro-frontends en producci\u00F3n: arquitectura distribuida en Inditex\u00BB',
            'conf.conf2.desc': 'Ponencia sobre la implementaci\u00F3n de micro-frontends en el ecosistema de Bershka/Inditex: patrones de integraci\u00F3n, estrategias de despliegue independiente y lecciones aprendidas en producci\u00F3n a escala.',
            'conf.conf3.talk': '\u00ABDe jQuery a Vue.js: migraci\u00F3n progresiva en entorno enterprise\u00BB',
            'conf.conf3.desc': 'Caso pr\u00E1ctico de la migraci\u00F3n de una plataforma legacy de m\u00E1s de 200.000 l\u00EDneas a un stack moderno con Vue.js en Air Europa, sin interrumpir el servicio ni la velocidad de desarrollo del equipo.',
            'conf.note': 'No tengo previstas m\u00E1s apariciones p\u00FAblicas.',

            // Skills
            'skills.title': 'Competencias',
            'skills.lang': 'Lenguajes y frameworks',
            'skills.arch': 'Arquitectura e infraestructura',
            'skills.testing': 'Estrategias de Testing',
            'skills.perf': 'Optimizaci\u00F3n de Rendimiento',
            'skills.security': 'Seguridad',
            'skills.math': 'Matem\u00E1ticas e investigaci\u00F3n',
            'skills.lead': 'Liderazgo y gesti\u00F3n',
            'skills.idiomas': 'Idiomas',
            'skills.es': 'Espa\u00F1ol (nativo)',
            'skills.ca': 'Catal\u00E1n (nativo)',
            'skills.en': 'Ingl\u00E9s (profesional)',
            'skills.other': 'Otras cualificaciones',
            'skills.marksman': 'Tirador selecto (Ej\u00E9rcito de Tierra)',
            'skills.radio': 'Operador de radio',
            'skills.drive': 'Permiso de conducir B',
            'skills.agile': 'Metodolog\u00EDas \u00C1giles',
            'skills.strategy': 'Planificaci\u00F3n Estrat\u00E9gica',
            'skills.teams': 'Liderazgo de Equipos',
            'skills.product': 'Ciclo de Vida de Producto',
            'skills.mentoring': 'Mentor\u00EDa',
            'skills.topology': 'Topolog\u00EDa Algebraica',
            'skills.categories': 'Teor\u00EDa de Categor\u00EDas',
            'skills.cognitive': 'Ciencia Cognitiva Computacional',
            'skills.mind': 'Filosof\u00EDa de la Mente',

            // Community
            'community.title': 'Actividad social',
            'community.games.role': 'Presidente, Asociaci\u00F3n de Videojuegos, Juegos de Mesa y Rol de Mallorca',
            'community.games.desc': 'La asociaci\u00F3n m\u00E1s grande de Baleares en su categor\u00EDa. M\u00E1s de 200 miembros activos. Torneos, jornadas abiertas y eventos de divulgaci\u00F3n l\u00FAdica.',
            'community.caritas.role': 'Voluntario en centro de d\u00EDa y albergue. C\u00E1ritas Mallorca',
            'community.caritas.desc': 'Jun 2011 - Jun 2012. Servicio de comidas y atenci\u00F3n en centro de d\u00EDa y albergue para personas sin hogar. Asistencia en preparaci\u00F3n de alimentos, servicio y cuidado general.',
            'community.cruz.role': 'Voluntario de acompa\u00F1amiento al final de la vida. Cruz Roja Espa\u00F1ola',
            'community.cruz.desc': 'Oct 2012 - Mar 2013. Acompa\u00F1amiento y apoyo emocional a pacientes paliativos. Visitas regulares ofreciendo compa\u00F1\u00EDa, conversaci\u00F3n y presencia durante su etapa final.',

            // Contact
            'contact.title': 'Contacto',
            'contact.email': 'Email',

            // Footer
            'footer.copy': '\u00A9 2026 Kevin Caracuel Llabr\u00E9s'
        },

        /* ============================
           CATAL\u00C0
           ============================ */
        ca: {
            // Document
            'doc.title': 'Kevin Caracuel Llabr\u00E9s',

            // Nav
            'nav.perfil': 'Perfil',
            'nav.formacion': 'Formaci\u00F3',
            'nav.experiencia': 'Experi\u00E8ncia',
            'nav.publicaciones': 'Publicacions',
            'nav.personal': 'Personal',
            'nav.contacto': 'Contacte',

            // Hero
            'hero.tagline': 'Arquitecte de Software \u00B7 Enginyer \u00B7 Fil\u00F2sof',

            // Profile
            'profile.title': 'Perfil',
            'profile.text': '<p>De soldat a matem\u00E0tic, d\u2019enginyer a fil\u00F2sof, de fil\u00F2sof a arquitecte de software. La meva carrera mai no ha seguit una l\u00EDnia recta, i aquest \u00E9s precisament el punt.</p><p>Vaig comen\u00E7ar amb un Grau en Matem\u00E0tiques a Mallorca mentre servia a l\u2019Ex\u00E8rcit de Terra. Despr\u00E9s em vaig traslladar a Sevilla per cursar Enginyeria Mecatr\u00F2nica, seguida d\u2019un M\u00E0ster i un Doctorat en Filosofia de la Ci\u00E8ncia, on vaig passar quatre anys formalitzant la consci\u00E8ncia a trav\u00E9s de la topologia i publicant en revistes indexades amb investigadors de la Universitat de Sevilla i la Universitat Pompeu Fabra.</p><p>Des de 2016 construeixo software professionalment. He liderat squads de frontend a Inditex/Bershka, dissenyat arquitectures a Airbus i llan\u00E7at productes en startups dels sectors immobiliari i tur\u00EDstic. Tamb\u00E9 he desenvolupat aplicacions amb intel\u00B7lig\u00E8ncia artificial com a freelance.</p><p>S\u00F3c president de l\u2019associaci\u00F3 de videojocs, jocs de taula i rol m\u00E9s gran de Mallorca, i actualment publico un llibre que reuneix tot el que he explorat: matem\u00E0tiques, consci\u00E8ncia i els l\u00EDmits del que els sistemes formals poden capturar.</p><p>M\u2019agraden els problemes dif\u00EDcils, les interseccions inusuals i els equips que es preocupen per l\u2019ofici.</p>',
            'profile.nacimiento': 'Naixement',
            'profile.residencia': 'Resid\u00E8ncia',
            'profile.residencia.val': 'Lloseta, Balears, Espanya',
            'profile.estudios': 'Estudis',
            'profile.estudios.val': '2 carreres, 1 m\u00E0ster i 1 doctorat',
            'profile.exp': 'Experi\u00E8ncia',
            'profile.years': 'anys',
            'profile.papers': 'Papers',
            'profile.conf': 'Confer\u00E8ncies',
            'profile.escrito': 'Text escrit',
            'profile.escrito.val': '1 llibre + 1 gui\u00F3 en desenvolupament',
            'profile.idiomas': 'Idiomes',
            'profile.voluntariado': 'Voluntariat',
            'profile.voluntariado.val': '2 organitzacions',

            // Education
            'edu.title': 'Formaci\u00F3 acad\u00E8mica',
            'edu.iedib': 'Especialitzaci\u00F3 en Intel\u00B7lig\u00E8ncia Artificial i Big Data',
            'edu.iedib.desc': 'Formaci\u00F3 avan\u00E7ada en aprenentatge autom\u00E0tic, processament del llenguatge natural, infraestructura de dades a gran escala i desplegament de models en entorns de producci\u00F3.',
            'edu.iedib.center': 'IEDIB \u2014 Institut d\u2019Ensenyaments a Dist\u00E0ncia de les Illes Balears',
            'edu.phd': 'Doctorat en Filosofia (investigaci\u00F3 en ci\u00E8ncia cognitiva computacional)',
            'edu.phd.center': 'Universitat de Sevilla (a temps parcial)',
            'edu.phd.thesis': 'Tesi: \u00ABMarc topol\u00F2gic per a la classificaci\u00F3 d\u2019estats fenomenol\u00F2gics en substrats computacionals\u00BB',
            'edu.phd.desc': 'Dept. de Filosofia, L\u00F2gica i Filosofia de la Ci\u00E8ncia (L\u00EDnia 3). Directora: Elena Vidal-Moreno. Tres articles publicats en revistes indexades durant el per\u00EDode doctoral.',
            'edu.master': 'M\u00E0ster Interuniversitari en L\u00F2gica i Filosofia de la Ci\u00E8ncia',
            'edu.master.center': 'Universitat de Sevilla (programa coordinat per USAL, UVa, USC, ULL, UDC, CSIC)',
            'edu.master.thesis': 'TFM: \u00ABInvariants topol\u00F2gics de l\u2019experi\u00E8ncia fenom\u00E8nica\u00BB',
            'edu.master.desc': 'Investigaci\u00F3 centrada en filosofia de la ment i ci\u00E8ncia cognitiva. Aquest treball va posar les bases per al primer article publicat el 2016.',
            'edu.eng': 'Grau en Enginyeria Electr\u00F2nica, Rob\u00F2tica i Mecatr\u00F2nica',
            'edu.eng.center': 'Universitat de Sevilla (t\u00EDtol interuniversitari UMA-US, amb convalidacions del Grau en Matem\u00E0tiques)',
            'edu.eng.thesis': 'TFG: \u00ABXarxes neuronals recurrents aplicades al control adaptatiu de sistemes aut\u00F2noms\u00BB',
            'edu.eng.desc': 'Formaci\u00F3 en electr\u00F2nica, rob\u00F2tica, sistemes de control i mecatr\u00F2nica aplicada. Completat en dos anys acad\u00E8mics gr\u00E0cies a m\u00F2duls convalidats (c\u00E0lcul, \u00E0lgebra lineal, f\u00EDsica, programaci\u00F3).',
            'edu.math': 'Grau en Matem\u00E0tiques',
            'edu.math.thesis': 'TFG: \u00ABInvariants homol\u00F2gics en espais de configuraci\u00F3 topol\u00F2gica\u00BB',
            'edu.math.desc': 'Compatible amb el servei militar (RIL Palma 47, juliol 2008 - octubre 2010). Enfocament en topologia i \u00E0lgebra. Aquest grau va proporcionar els fonaments formals per a la posterior investigaci\u00F3 en topologia aplicada a la filosofia de la ment.',
            'edu.math.center': 'Universitat de les Illes Balears',
            'edu.bach': 'Batxillerat Tecnol\u00F2gic',
            'edu.bach.center': 'IES Pau Casesnoves, Mallorca',

            // Experience
            'exp.title': 'Experi\u00E8ncia laboral',
            'exp.airbus.date': 'Mar\u00E7 2023 - Actualitat',
            'exp.airbus.loc': 'Madrid, Espanya',
            'exp.freelance.date': 'Feb 2024 - Set 2025',
            'exp.freelance.loc': 'Espanya',
            'exp.housfy.date': 'Nov 2019 - Ag 2020',
            'exp.everis1.date': 'Set 2018 - Nov 2019',
            'exp.everis2.date': 'Set 2017 - Set 2018',
            'exp.hundredrooms.date': 'Feb 2016 - Set 2017',
            'exp.upf.date': 'Set 2016 - Des 2020',
            'exp.army.company': 'Ex\u00E8rcit de Terra, RIL Palma 47',
            'exp.airbus.desc': '<p>Airbus, el major fabricant d\u2019aeronaus del m\u00F3n.</p><p><strong>Responsabilitats:</strong></p><ul><li>Arquitectura de nous projectes</li><li>Organitzaci\u00F3 i gesti\u00F3 d\u2019equips Front i Back.</li><li>Creaci\u00F3 d\u2019objectius i prioritats respecte a projectes.</li><li>Enlla\u00E7 entre negoci i desenvolupament</li></ul><p><strong>Implementacions destacades:</strong></p><ul><li>Editor de contingut personalitzat basat en necessitats de l\u2019empresa. F\u00F3rmules matem\u00E0tiques, requisits espec\u00EDfics, etc.</li><li>Una aplicaci\u00F3 interna que distribueix usuaris i clients...</li></ul>',
            'exp.freelance.desc': '<p>Especialitzat en aplicacions web amb IA i interf\u00EDcies conversacionals.</p><p><strong>Responsabilitats:</strong></p><ul><li>Disseny i implementaci\u00F3 de solucions web amb IA per a diversos clients i projectes personals</li><li>Desenvolupament de chatbots i agents conversacionals amb t\u00E8cniques modernes de NLP</li><li>Integraci\u00F3 de models AI/ML amb frameworks frontend per a experi\u00E8ncies d\u2019usuari millorades</li><li>Disseny d\u2019arquitectura per a aplicacions d\u2019IA escalables amb capacitats en temps real</li><li>Consultoria en estrat\u00E8gia d\u2019IA i implementaci\u00F3</li></ul>',
            'exp.bershka.desc': '<p>Inditex, +152K empleats i m\u00E9s de 7.000 botigues arreu del m\u00F3n.</p><p><strong>Responsabilitats:</strong></p><ul><li>Desenvolupador senior al squad de Customer. UX, Navegaci\u00F3 i Generaci\u00F3 de formularis.</li><li>Desenvolupador senior al squad de Checkout. Pagaments.</li><li>Squad lead de Discovery. Noves funcionalitats.</li><li>Squad lead de CustomLabs. Personalitzaci\u00F3.</li></ul><p><strong>Implementacions destacades:</strong></p><ul><li>Un generador de formularis basat en fitxers est\u00E0tics per a desplegament en calent.</li><li>Una navegaci\u00F3 per pila basada en els sistemes de navegaci\u00F3 natius.</li></ul>',
            'exp.housfy.desc': '<p>Startup, una de les immobili\u00E0ries de major creixement a Europa.</p><p><strong>Responsabilitats:</strong></p><ul><li>Desenvolupament general de frontend i UI/UX.</li><li>Squad lead de les seccions de Housfy Pro.</li><li>Squad lead de les seccions de lloguers.</li></ul><p><strong>Implementacions destacades:</strong></p><ul><li>Un sistema basat en components per a creaci\u00F3 ultrar\u00E0pida de landings.</li><li>Un minijoc divertit basat en el dinosaure de Chrome per a un spot de m\u00E0rqueting.</li></ul><p>A causa de la pand\u00E8mia i problemes interns, tot l\u2019equip de desenvolupament va abandonar el projecte.</p>',
            'exp.everis1.desc': '<p>Zurich, la major asseguradora de Su\u00EFssa. La 117a empresa p\u00FAblica m\u00E9s gran del m\u00F3n.</p><p><strong>Responsabilitats:</strong></p><ul><li>Liderar el nou squad de Frontend d\u2019un nou projecte.</li><li>Mentoria de l\u2019equip pr\u00E8viament especialitzat en Java.</li></ul><p><strong>Implementacions destacades:</strong></p><ul><li>Una llibreria de components amb playground per usar en tots els projectes de l\u2019empresa.</li><li>Skeleton base per a qualsevol nova aplicaci\u00F3.</li><li>Snippets, automatitzacions, documentaci\u00F3 i altres millores de productivitat...</li></ul>',
            'exp.everis2.desc': '<p>Air Europa, la tercera aerol\u00EDnia espanyola.</p><p><strong>Responsabilitats:</strong></p><ul><li>Liderar la migraci\u00F3 de l\u2019arquitectura antiga (JQuery) a una nova (Vue.js).</li><li>Mentoria de l\u2019equip pr\u00E8viament centrat en backend.</li><li>Integraci\u00F3 de noves metodologies \u00E0gils a l\u2019empresa.</li></ul><p>El projecte va ser migrat amb \u00E8xit a una nova arquitectura.</p>',
            'exp.hundredrooms.desc': '<p>Startup, comparador internacional d\u2019allotjaments vacancionals.</p><p><strong>Responsabilitats:</strong></p><ul><li>Frontend Junior.</li><li>Supervisi\u00F3 i implementaci\u00F3 del UI/UX.</li><li>Participaci\u00F3 activa en la metodologia \u00E0gil Scrum.</li></ul><p><strong>Implementacions destacades:</strong></p><ul><li>Funcionalitat de dibuix sobre mapa per mostrar nom\u00E9s les cases dins d\u2019aquells vectors.</li><li>Sistema d\u2019A/B testing basat en percentatges.</li><li>WYSIWYG per publicar posts de blog per a l\u2019equip de continguts.</li></ul><p>L\u2019empresa va ser adquirida amb \u00E8xit per Holidu.</p>',
            'exp.upf.role': 'Investigador associat',
            'exp.upf.desc': '<p>Cognition and Brain Group, Departament de Tecnologies de la Informaci\u00F3 i les Comunicacions (DTIC). Investigaci\u00F3 en formalitzaci\u00F3 topol\u00F2gica de la consci\u00E8ncia i ci\u00E8ncia cognitiva computacional. Publicaci\u00F3 de 5 articles en revistes indexades (2016-2020) sobre invariants topol\u00F2gics de l\u2019experi\u00E8ncia fenom\u00E8nica, gradients morals en substrats no biol\u00F2gics, isomorfisme causal, ontologia l\u00FAdica i els l\u00EDmits del programa topol\u00F2gic. Col\u00B7laboraci\u00F3 amb investigadors de la Universitat de Sevilla i la UPF.</p>',
            'exp.army.role': 'Soldat d\u2019Infanteria',
            'exp.army.desc': '<ul><li>Formaci\u00F3 militar b\u00E0sica al CIMOV (Centro de Formaci\u00F3n de Tropa n\u00BA 1), C\u00E0ceres (3 mesos).</li><li>Destinat al Regiment d\u2019Infanteria Lleugera \u00ABPalma\u00BB 47, Illes Balears.</li><li>Exercicis de camp a Menorca, Chinchilla (Albacete), San Gregorio (Saragossa) i Cabrera.</li><li>Missi\u00F3 de pau de 3 mesos a l\u2019Afganistan (ISAF).</li><li>Tirador selecte i operador de r\u00E0dio.</li></ul>',

            // Publications
            'pub.title': 'Publicacions',
            'pub.papers': 'Articles cient\u00EDfics',
            'pub.papers.intro': 'Investigaci\u00F3 centrada en la intersecci\u00F3 entre matem\u00E0tiques, ci\u00E8ncia cognitiva computacional i filosofia de la ment. Els treballs aborden problemes fonamentals sobre la natura de la consci\u00E8ncia, l\u2019ag\u00E8ncia moral en sistemes artificials i els l\u00EDmits formals de la transfer\u00E8ncia d\u2019identitat.',
            'pub.paper1.desc': 'Proposa que cada experi\u00E8ncia subjectiva posseeix una estructura matem\u00E0tica formalitzable mitjan\u00E7ant topologia real: espais de Hausdorff, grups d\u2019homologia i varietats diferenciables. El marc estableix que dues experi\u00E8ncies s\u00F3n fenomenol\u00F2gicament id\u00E8ntiques si i nom\u00E9s si s\u00F3n topol\u00F2gicament equivalents (homeomorfes), la qual cosa implica que qualia id\u00E8ntics podrien emergir en substrats radicalment diferents.',
            'pub.paper2.desc': 'Substitueix la dicotomia cl\u00E0ssica \u00ABt\u00E9 moral / no t\u00E9 moral\u00BB per un camp escalar continu: cada sistema posseeix un gradient d\u2019ag\u00E8ncia moral, an\u00E0leg a un camp de temperatura. Defineix operadors diferencials sobre aquest camp (diverg\u00E8ncia moral, rotacional \u00E8tic) i demostra que la responsabilitat emergeix en punts on el gradient supera un llindar cr\u00EDtic, de manera an\u00E0loga a una transici\u00F3 de fase termodin\u00E0mica.',
            'pub.paper3.desc': 'Formalitza el \u00ABproblema del teletransport\u00BB amb rigor matem\u00E0tic. Utilitzant teoria de categories, defineix \u00ABisomorfisme causal\u00BB de manera precisa i demostra que la independ\u00E8ncia de substrat \u00E9s condici\u00F3 necess\u00E0ria per\u00F2 no suficient per a la transfer\u00E8ncia de consci\u00E8ncia: cal a m\u00E9s preservar l\u2019estructura temporal fina. Un \u00ABteorema de no-clonaci\u00F3\u00BB per a consci\u00E8ncies, an\u00E0leg al de la mec\u00E0nica qu\u00E0ntica.',
            'pub.paper4.desc': 'Defensa que els jocs de taula s\u00F3n el format m\u00EDnim en qu\u00E8 emergeix la consci\u00E8ncia estrat\u00E8gica. Connecta la fenomenologia de Husserl amb la teoria de sistemes din\u00E0mics, definint \u00ABespacios de fase l\u00FAdics\u00BB on els atractors s\u00F3n les estrat\u00E8gies guanyadores i els punts de bifurcaci\u00F3 representen els moments on la creativitat humana supera el c\u00E0lcul pur.',
            'pub.paper5.desc': 'Assaig reflexiu que tanca el programa d\u2019investigaci\u00F3 topol\u00F2gica. Partint de Ciutat Permutaci\u00F3 de Greg Egan, examina els l\u00EDmits inherents de la formalitzaci\u00F3 matem\u00E0tica de la consci\u00E8ncia i confronta les promeses del marc topol\u00F2gic amb les seves restriccions fonamentals. Constitueix expl\u00EDcitament el darrer treball acad\u00E8mic de l\u2019autor, que assenyala la narrativa especulativa com a via per explorar all\u00F2 que la formalitzaci\u00F3 no assoleix.',
            'pub.scifi': 'Ci\u00E8ncia ficci\u00F3 dura',
            'pub.invariantes.desc': 'Tretze relats de ci\u00E8ncia ficci\u00F3 que exploren el que roman quan tot la resta ha canviat. La consci\u00E8ncia despullada de la seva funci\u00F3. La identitat redu\u00EFda al seu esquelet topol\u00F2gic. El temps alliberat de la seva direcci\u00F3. La informaci\u00F3 que sobreviu a la mort de l\u2019univers. Cada relat parteix d\u2019una premissa cient\u00EDfica rigorosa (la m\u00E8trica d\u2019Alcubierre, la segona llei de la termodin\u00E0mica, el polinomi de Jones, la longitud de Planck) i la porta fins a les seves conseq\u00FC\u00E8ncies m\u00E9s \u00EDntimes. De l\u2019escala de Planck a la mort t\u00E8rmica del cosmos, de l\u2019esc\u00F2r\u00E7a insular d\u2019un cervell hum\u00E0 a una bombolla de distorsi\u00F3 m\u00E8trica, aquests relats tracen un arc que va del m\u00E9s \u00EDntim al m\u00E9s vast.',

            // Conferences
            'conf.title': 'Confer\u00E8ncies',
            'conf.conf1.venue': 'XI Congr\u00E9s SLMFCE, Sevilla',
            'conf.conf1.talk': '\u00ABInvariants topol\u00F2gics com a classificadors d\u2019experi\u00E8ncia fenom\u00E8nica: resultats i l\u00EDmits\u00BB',
            'conf.talk': 'Pon\u00E8ncia convidada a la taula \u00ABFormalismes i consci\u00E8ncia\u00BB.',
            'conf.conf2.talk': '\u00ABMicro-frontends en producci\u00F3: arquitectura distribu\u00EFda a Inditex\u00BB',
            'conf.conf2.desc': 'Pon\u00E8ncia sobre la implementaci\u00F3 de micro-frontends a l\u2019ecosistema de Bershka/Inditex: patrons d\u2019integraci\u00F3, estrat\u00E8gies de desplegament independent i lli\u00E7ons apreses en producci\u00F3 a escala.',
            'conf.conf3.talk': '\u00ABDe jQuery a Vue.js: migraci\u00F3 progressiva en entorn enterprise\u00BB',
            'conf.conf3.desc': 'Cas pr\u00E0ctic de la migraci\u00F3 d\u2019una plataforma legacy de m\u00E9s de 200.000 l\u00EDnies a un stack modern amb Vue.js a Air Europa, sense interrompre el servei ni la velocitat de desenvolupament de l\u2019equip.',
            'conf.note': 'No tinc previstes m\u00E9s aparicions p\u00FAbliques.',

            // Skills
            'skills.title': 'Compet\u00E8ncies',
            'skills.lang': 'Llenguatges i frameworks',
            'skills.arch': 'Arquitectura i infraestructura',
            'skills.testing': 'Estrat\u00E8gies de Testing',
            'skills.perf': 'Optimitzaci\u00F3 de Rendiment',
            'skills.security': 'Seguretat',
            'skills.math': 'Matem\u00E0tiques i investigaci\u00F3',
            'skills.lead': 'Lideratge i gesti\u00F3',
            'skills.idiomas': 'Idiomes',
            'skills.es': 'Castell\u00E0 (natiu)',
            'skills.ca': 'Catal\u00E0 (natiu)',
            'skills.en': 'Angl\u00E8s (professional)',
            'skills.other': 'Altres qualificacions',
            'skills.marksman': 'Tirador selecte (Ex\u00E8rcit de Terra)',
            'skills.radio': 'Operador de r\u00E0dio',
            'skills.drive': 'Perm\u00EDs de conduir B',
            'skills.agile': 'Metodologies \u00C0gils',
            'skills.strategy': 'Planificaci\u00F3 Estrat\u00E8gica',
            'skills.teams': 'Lideratge d\u2019Equips',
            'skills.product': 'Cicle de Vida de Producte',
            'skills.mentoring': 'Mentoria',
            'skills.topology': 'Topologia Algebraica',
            'skills.categories': 'Teoria de Categories',
            'skills.cognitive': 'Ci\u00E8ncia Cognitiva Computacional',
            'skills.mind': 'Filosofia de la Ment',

            // Community
            'community.title': 'Activitat social',
            'community.games.role': 'President, Associaci\u00F3 de Videojocs, Jocs de Taula i Rol de Mallorca',
            'community.games.desc': 'L\u2019associaci\u00F3 m\u00E9s gran de Balears en la seva categoria. M\u00E9s de 200 membres actius. Tornejos, jornades obertes i esdeveniments de divulgaci\u00F3 l\u00FAdica.',
            'community.caritas.role': 'Voluntari en centre de dia i alberg. C\u00E0ritas Mallorca',
            'community.caritas.desc': 'Jun 2011 - Jun 2012. Servei de menjars i atenci\u00F3 en centre de dia i alberg per a persones sense llar. Assist\u00E8ncia en preparaci\u00F3 d\u2019aliments, servei i cura general.',
            'community.cruz.role': 'Voluntari d\u2019acompanyament al final de la vida. Creu Roja Espanyola',
            'community.cruz.desc': 'Oct 2012 - Mar\u00E7 2013. Acompanyament i suport emocional a pacients pal\u00B7liatius. Visites regulars oferint companyia, conversa i pres\u00E8ncia durant la seva etapa final.',

            // Contact
            'contact.title': 'Contacte',
            'contact.email': 'Correu electr\u00F2nic',

            // Footer
            'footer.copy': '\u00A9 2026 Kevin Caracuel Llabr\u00E9s'
        },

        /* ============================
           ENGLISH
           ============================ */
        en: {
            // Document
            'doc.title': 'Kevin Caracuel Llabr\u00E9s',

            // Nav
            'nav.perfil': 'Profile',
            'nav.formacion': 'Education',
            'nav.experiencia': 'Experience',
            'nav.publicaciones': 'Publications',
            'nav.personal': 'Personal',
            'nav.contacto': 'Contact',

            // Hero
            'hero.tagline': 'Software Architect \u00B7 Engineer \u00B7 Philosopher',

            // Profile
            'profile.title': 'Profile',
            'profile.text': '<p>From soldier to mathematician to engineer to philosopher to software architect. My career has never followed a straight line, and that\u2019s the point.</p><p>I started with a Mathematics degree in Mallorca while serving in the Spanish Army. Then I moved to Sevilla for Mechatronics Engineering followed by a Master\u2019s and a PhD in Philosophy of Science, where I spent four years formalising consciousness through topology and publishing in peer-reviewed journals with researchers from Universidad de Sevilla and Universitat Pompeu Fabra.</p><p>Since 2016 I\u2019ve been building software professionally. I\u2019ve led frontend squads at Inditex/Bershka, architected systems at Airbus, and shipped products for startups across real estate and travel. I\u2019ve also developed AI-powered applications as a freelance.</p><p>I\u2019m president of Mallorca\u2019s largest video, board and role-playing games association, and I\u2019m currently publishing a book that brings together everything I\u2019ve explored: mathematics, consciousness and the boundaries of what formal systems can capture.</p><p>I like hard problems, unusual intersections and teams that care about craft.</p>',
            'profile.nacimiento': 'Born',
            'profile.residencia': 'Residence',
            'profile.residencia.val': 'Lloseta, Balearic Islands, Spain',
            'profile.estudios': 'Education',
            'profile.estudios.val': '2 degrees, 1 master\u2019s and 1 PhD',
            'profile.exp': 'Experience',
            'profile.years': 'years',
            'profile.papers': 'Papers',
            'profile.conf': 'Conferences',
            'profile.escrito': 'Written work',
            'profile.escrito.val': '1 book + 1 screenplay in development',
            'profile.idiomas': 'Languages',
            'profile.voluntariado': 'Volunteering',
            'profile.voluntariado.val': '2 organisations',

            // Education
            'edu.title': 'Academic education',
            'edu.iedib': 'Specialisation in Artificial Intelligence and Big Data',
            'edu.iedib.desc': 'Advanced training in machine learning, natural language processing, large-scale data infrastructure and model deployment in production environments.',
            'edu.iedib.center': 'IEDIB \u2014 Institut d\u2019Ensenyaments a Dist\u00E0ncia de les Illes Balears',
            'edu.phd': 'PhD in Philosophy (research in computational cognitive science)',
            'edu.phd.center': 'University of Seville (part-time)',
            'edu.phd.thesis': 'Thesis: "Topological framework for the classification of phenomenological states in computational substrates"',
            'edu.phd.desc': 'Dept. of Philosophy, Logic and Philosophy of Science (Line 3). Supervisor: Elena Vidal-Moreno. Three peer-reviewed articles published during the doctoral period.',
            'edu.master': 'Inter-University Master\u2019s in Logic and Philosophy of Science',
            'edu.master.center': 'University of Seville (programme coordinated by USAL, UVa, USC, ULL, UDC, CSIC)',
            'edu.master.thesis': 'Master\u2019s thesis: "Topological invariants of phenomenal experience"',
            'edu.master.desc': 'Research focus on philosophy of mind and cognitive science. This work laid the foundation for the first peer-reviewed article published in 2016.',
            'edu.eng': 'Bachelor\u2019s Degree in Electronic, Robotic and Mechatronic Engineering',
            'edu.eng.center': 'University of Seville (inter-university degree UMA-US, with credits transferred from the Mathematics degree)',
            'edu.eng.thesis': 'Final project: "Recurrent neural networks applied to adaptive control of autonomous systems"',
            'edu.eng.desc': 'Training in electronics, robotics, control systems and applied mechatronics. Completed in two academic years thanks to validated core modules (calculus, linear algebra, physics, programming).',
            'edu.math': 'Bachelor\u2019s Degree in Mathematics',
            'edu.math.thesis': 'Final project: "Homological invariants in topological configuration spaces"',
            'edu.math.desc': 'Concurrent with military service (RIL Palma 47, July 2008 - October 2010). Focus on topology and algebra. This degree provided the formal foundations for later research in topology applied to philosophy of mind.',
            'edu.math.center': 'University of the Balearic Islands',
            'edu.bach': 'Technology Baccalaureate',
            'edu.bach.center': 'IES Pau Casesnoves, Mallorca',

            // Experience
            'exp.title': 'Work experience',
            'exp.airbus.date': 'Mar 2023 - Present',
            'exp.airbus.loc': 'Madrid, Spain',
            'exp.freelance.date': 'Feb 2024 - Sep 2025',
            'exp.freelance.loc': 'Spain',
            'exp.housfy.date': 'Nov 2019 - Aug 2020',
            'exp.everis1.date': 'Sep 2018 - Nov 2019',
            'exp.everis2.date': 'Sep 2017 - Sep 2018',
            'exp.hundredrooms.date': 'Feb 2016 - Sep 2017',
            'exp.upf.date': 'Sep 2016 - Dec 2020',
            'exp.army.company': 'Spanish Army, RIL Palma 47',
            'exp.airbus.desc': '<p>Airbus, leading aircraft manufacturer in the world.</p><p><strong>Responsibilities:</strong></p><ul><li>Architecture of new projects</li><li>Organization and management of Front and Back teams.</li><li>Creation of objectives and priorities regarding projects.</li><li>Handshake between business and development</li></ul><p><strong>Cool implementations:</strong></p><ul><li>Custom content editor based on company needs. Mathematical formulas, specific requirements, etc.</li><li>An internal application that distributes users and clients...</li></ul>',
            'exp.freelance.desc': '<p>Specializing in AI-powered web applications and conversational interfaces.</p><p><strong>Responsibilities:</strong></p><ul><li>Design and implementation of AI-driven web solutions for various clients and personal projects</li><li>Development of chatbots and conversational agents using modern NLP techniques</li><li>Integration of AI/ML models with frontend frameworks for enhanced user experiences</li><li>Architecture design for scalable AI applications with real-time capabilities</li><li>Consultation on AI strategy and implementation</li></ul>',
            'exp.bershka.desc': '<p>Inditex, +152K employees and operates more than 7K stores around the world.</p><p><strong>Responsibilities:</strong></p><ul><li>Senior developer on the Customer squad. UX, Navigation and Forms generation.</li><li>Senior developer on the Checkout squad. Payments.</li><li>Squad lead of Discovery. New features.</li><li>Squad lead of CustomLabs. Personalization.</li></ul><p><strong>Cool implementations:</strong></p><ul><li>A form generator based on static files for hot deploying.</li><li>A stack navigation based on the native navigator systems.</li></ul>',
            'exp.housfy.desc': '<p>Startup, One of the top fastest growing real estate companies in Europe.</p><p><strong>Responsibilities:</strong></p><ul><li>Develop the overall frontend and UI/UX.</li><li>Squad lead of Housfy Pro sections.</li><li>Squad lead of rentals sections.</li></ul><p><strong>Cool implementations:</strong></p><ul><li>A component based system for super fast landings implementation.</li><li>A funny minigame based on the Chrome dinousaur for a marketing spot.</li></ul><p>Due to the pandemic and internal issues, the entire development team left the project.</p>',
            'exp.everis1.desc': '<p>Zurich, Switzerland\u2019s largest insurer. World\u2019s 117th largest public company.</p><p><strong>Responsibilities:</strong></p><ul><li>Lead the new Frontend squad of a new project.</li><li>Mentoring of the team that was previously specialized in Java.</li></ul><p><strong>Cool implementations:</strong></p><ul><li>A components library with their playground to use in all projects of the company.</li><li>Skeleton to use as base for any new aplications.</li><li>Snippets, automatizations, documentation and other quality of life features for new...</li></ul>',
            'exp.everis2.desc': '<p>Air Europa, the third-largest Spanish airline.</p><p><strong>Responsibilities:</strong></p><ul><li>Lead the migration of the old architecture (JQuery) to a new one (Vue.js).</li><li>Mentoring of the team that was previously full focused on the backend.</li><li>Integrati\u00F3n of new agile metodologies in the company.</li></ul><p>The project was successfully migrated to a new architecture.</p>',
            'exp.hundredrooms.desc': '<p>Startup, International holiday accommodation comparator.</p><p><strong>Responsibilities:</strong></p><ul><li>Junior Frontend.</li><li>Supervision & implementation of the UI/UX.</li><li>Active participation in the agile Scrum metodology.</li></ul><p><strong>Cool implementations:</strong></p><ul><li>Functionality to draw on a map and show only the houses inside those vectors.</li><li>A/B testing system based on percentages.</li><li>WYSIWYG to make blog posts so the content team could use.</li></ul><p>The company was successfully acquired by Holidu.</p>',
            'exp.upf.role': 'Associate Researcher',
            'exp.upf.desc': '<p>Cognition and Brain Group, Department of Information and Communication Technologies (DTIC). Research on topological formalisation of consciousness and computational cognitive science. Published 5 peer-reviewed articles (2016\u20132020) on topological invariants of phenomenal experience, moral gradients in non-biological substrates, causal isomorphism, ludic ontology and the limits of the topological programme. Collaboration with researchers from Universidad de Sevilla and UPF.</p>',
            'exp.army.role': 'Infantry Soldier',
            'exp.army.desc': '<ul><li>Basic military training at CIMOV (Centro de Formaci\u00F3n de Tropa n\u00BA 1), C\u00E1ceres (3 months).</li><li>Assigned to Regimiento de Infanter\u00EDa Ligera "Palma" 47, Illes Balears.</li><li>Field exercises in Menorca, Chinchilla (Albacete), San Gregorio (Zaragoza) and Cabrera.</li><li>Deployed on a 3-month peace mission in Afghanistan (ISAF).</li><li>Qualified as designated marksman (tirador selecto) and radio operator.</li></ul>',

            // Publications
            'pub.title': 'Publications',
            'pub.papers': 'Scientific articles',
            'pub.papers.intro': 'Research focused on the intersection between mathematics, computational cognitive science and philosophy of mind. The works address fundamental problems about the nature of consciousness, moral agency in artificial systems and the formal limits of identity transfer.',
            'pub.paper1.desc': 'Proposes that every subjective experience has a mathematical structure formalisable through real topology: Hausdorff spaces, homology groups and differentiable manifolds. The framework establishes that two experiences are phenomenologically identical if and only if they are topologically equivalent (homeomorphic), implying that identical qualia could emerge in radically different substrates.',
            'pub.paper2.desc': 'Replaces the classical dichotomy "has morality / does not have morality" with a continuous scalar field: every system possesses a moral agency gradient, analogous to a temperature field. Defines differential operators on this field (moral divergence, ethical curl) and demonstrates that responsibility emerges at points where the gradient exceeds a critical threshold, analogous to a thermodynamic phase transition.',
            'pub.paper3.desc': 'Formalises the "teleportation problem" with mathematical rigour. Using category theory, it precisely defines "causal isomorphism" and demonstrates that substrate independence is a necessary but not sufficient condition for the transfer of consciousness: the fine-grained temporal structure must also be preserved. A "no-cloning theorem" for consciousnesses, analogous to the one in quantum mechanics.',
            'pub.paper4.desc': 'Argues that board games are the minimal format in which strategic consciousness emerges. Connects Husserl\u2019s phenomenology with dynamical systems theory, defining "ludic phase spaces" where the attractors are the winning strategies and the bifurcation points represent the moments where human creativity surpasses pure computation.',
            'pub.paper5.desc': 'A reflective essay that closes the topological research programme. Starting from Greg Egan\u2019s Permutation City, it examines the inherent limits of the mathematical formalisation of consciousness and confronts the promises of the topological framework with its fundamental restrictions. It explicitly constitutes the author\u2019s final academic work, pointing to speculative narrative as a path to explore what formalisation cannot reach.',
            'pub.scifi': 'Hard science fiction',
            'pub.invariantes.desc': 'Thirteen science fiction stories exploring what remains when everything else has changed. Consciousness stripped of its function. Identity reduced to its topological skeleton. Time freed from its direction. Information that survives the death of the universe. Each story starts from a rigorous scientific premise (the Alcubierre metric, the second law of thermodynamics, the Jones polynomial, the Planck length) and takes it to its most intimate consequences. From the Planck scale to the heat death of the cosmos, from the insular cortex of a human brain to a metric distortion bubble, these stories trace an arc from the most intimate to the most vast.',

            // Conferences
            'conf.title': 'Conferences',
            'conf.conf1.venue': 'XI Congress SLMFCE, Seville',
            'conf.conf1.talk': '"Topological invariants as classifiers of phenomenal experience: results and limits"',
            'conf.talk': 'Invited talk at the panel "Formalisms and consciousness".',
            'conf.conf2.talk': '"Micro-frontends in production: distributed architecture at Inditex"',
            'conf.conf2.desc': 'Talk on the implementation of micro-frontends in the Bershka/Inditex ecosystem: integration patterns, independent deployment strategies and lessons learned in production at scale.',
            'conf.conf3.talk': '"From jQuery to Vue.js: progressive migration in an enterprise environment"',
            'conf.conf3.desc': 'Case study of the migration of a legacy platform with over 200,000 lines to a modern stack with Vue.js at Air Europa, without disrupting the service or the team\u2019s development velocity.',
            'conf.note': 'I do not have any further public appearances planned.',

            // Skills
            'skills.title': 'Skills',
            'skills.lang': 'Languages and frameworks',
            'skills.arch': 'Architecture and infrastructure',
            'skills.testing': 'Testing Strategies',
            'skills.perf': 'Performance Optimization',
            'skills.security': 'Security',
            'skills.math': 'Mathematics and research',
            'skills.lead': 'Leadership and management',
            'skills.idiomas': 'Languages',
            'skills.es': 'Spanish (native)',
            'skills.ca': 'Catalan (native)',
            'skills.en': 'English (professional)',
            'skills.other': 'Other qualifications',
            'skills.marksman': 'Designated marksman (Spanish Army)',
            'skills.radio': 'Radio operator',
            'skills.drive': 'Driving licence B',
            'skills.agile': 'Agile Methodologies',
            'skills.strategy': 'Strategic Planning',
            'skills.teams': 'Team Leadership',
            'skills.product': 'Product Lifecycle',
            'skills.mentoring': 'Mentoring',
            'skills.topology': 'Algebraic Topology',
            'skills.categories': 'Category Theory',
            'skills.cognitive': 'Computational Cognitive Science',
            'skills.mind': 'Philosophy of Mind',

            // Community
            'community.title': 'Community involvement',
            'community.games.role': 'President, Video, Board Games and Roleplaying Association of Mallorca',
            'community.games.desc': 'The largest association of its kind in the Balearic Islands. Over 200 active members. Tournaments, open days and gaming outreach events.',
            'community.caritas.role': 'Day centre and shelter volunteer. C\u00E1ritas Mallorca',
            'community.caritas.desc': 'Jun 2011 - Jun 2012. Meal service and care at a day centre and shelter for homeless people. Assistance with food preparation, service and general care.',
            'community.cruz.role': 'End-of-life companionship volunteer. Spanish Red Cross',
            'community.cruz.desc': 'Oct 2012 - Mar 2013. Companionship and emotional support for palliative patients. Regular visits offering company, conversation and presence during their final stage.',

            // Contact
            'contact.title': 'Contact',
            'contact.email': 'Email',

            // Footer
            'footer.copy': '\u00A9 2026 Kevin Caracuel Llabr\u00E9s'
        }
    };

    /* ============================================
       setLang — Apply translations to the DOM
       ============================================ */
    function setLang(lang) {
        // Fallback to Spanish if the requested language does not exist
        if (!translations[lang]) {
            lang = 'es';
        }

        var dict = translations[lang];

        // Update all elements with data-i18n (textContent)
        var textEls = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < textEls.length; i++) {
            var key = textEls[i].getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                textEls[i].textContent = dict[key];
            }
        }

        // Update all elements with data-i18n-html (innerHTML)
        var htmlEls = document.querySelectorAll('[data-i18n-html]');
        for (var j = 0; j < htmlEls.length; j++) {
            var htmlKey = htmlEls[j].getAttribute('data-i18n-html');
            if (dict[htmlKey] !== undefined) {
                htmlEls[j].innerHTML = dict[htmlKey];
            }
        }

        // Update <html lang> attribute
        document.documentElement.setAttribute('lang', lang);

        // Update document title
        if (dict['doc.title']) {
            document.title = dict['doc.title'];
        }

        // Save preference to localStorage
        try {
            localStorage.setItem('lang', lang);
        } catch (e) {
            // localStorage may be unavailable (private browsing, etc.)
        }

        // Update active state on language switcher buttons
        var langBtns = document.querySelectorAll('[data-lang]');
        for (var k = 0; k < langBtns.length; k++) {
            if (langBtns[k].getAttribute('data-lang') === lang) {
                langBtns[k].classList.add('active');
            } else {
                langBtns[k].classList.remove('active');
            }
        }
    }

    /* ============================================
       Initialisation on DOMContentLoaded
       ============================================ */
    function getInitialLang() {
        // 1. Check URL parameter ?lang=
        var urlParams = new URLSearchParams(window.location.search);
        var urlLang = urlParams.get('lang');
        if (urlLang && translations[urlLang]) {
            return urlLang;
        }

        // 2. Check localStorage
        try {
            var storedLang = localStorage.getItem('lang');
            if (storedLang && translations[storedLang]) {
                return storedLang;
            }
        } catch (e) {
            // localStorage may be unavailable
        }

        // 3. Default to Spanish
        return 'es';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var lang = getInitialLang();
        setLang(lang);

        // Bind click events on language switcher buttons
        var langBtns = document.querySelectorAll('[data-lang]');
        for (var i = 0; i < langBtns.length; i++) {
            langBtns[i].addEventListener('click', function (e) {
                e.preventDefault();
                setLang(this.getAttribute('data-lang'));
            });
        }
    });

    // Expose API globally
    window.i18n = {
        setLang: setLang,
        translations: translations
    };

})();
