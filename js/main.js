window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('ResizeObserver loop')) { e.stopImmediatePropagation(); e.preventDefault(); }
  });

  // ─── Mobile navigation ───
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const closeMobileMenu = () => {
    primaryNav.classList.remove('is-open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-label', 'Abrir menú');
  };
  mobileMenuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !primaryNav.classList.contains('is-open');
    primaryNav.classList.toggle('is-open', willOpen);
    mobileMenuToggle.setAttribute('aria-expanded', String(willOpen));
    mobileMenuToggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
  document.addEventListener('click', (event) => {
    if (primaryNav.classList.contains('is-open') && !event.target.closest('nav.top')) closeMobileMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMobileMenu();
  });

  // ─── Blog library ───
  const blogArticles = [
    {
      slug: 'un-cono-y-una-banana-split',
      category: 'Productividad',
      title: 'Lo que un cono de helado y una banana split enseñan sobre productividad',
      excerpt: 'La demanda no llega con la misma complejidad. Separar lo simple de lo complejo puede liberar capacidad, reducir esperas y mejorar la promesa de servicio.',
      lead: 'Cuando todos los casos recorren el mismo camino, la complejidad de unos pocos termina definiendo el tiempo de respuesta de todos.',
      source: 'https://www.rewire.com.co/blog/un-cono-y-una-banana-split',
      sections: [
        ['No toda la demanda es igual', 'Un cono y una banana split comparten ingredientes, pero no requieren el mismo esfuerzo. En una operación ocurre lo mismo: solicitudes simples y complejas suelen entrar a una sola fila, aunque demanden habilidades, controles y tiempos muy distintos.'],
        ['Segmentar para crear flujo', 'Clasificar temprano permite diseñar carriles de atención, capacidades y reglas de prioridad acordes con cada tipo de caso. Los asuntos sencillos avanzan rápido y los complejos reciben la experiencia que necesitan, sin bloquear al resto.'],
        ['La productividad aparece en el diseño', 'La mejora no siempre exige más personas o tecnología. A menudo surge de entender mejor la demanda, reducir transferencias y organizar el trabajo alrededor de su complejidad real.']
      ]
    },
    {
      slug: 'trabajando-sin-objetivos',
      category: 'Gestión del desempeño',
      title: 'Trabajando sin objetivos',
      excerpt: 'Los equipos pueden estar muy ocupados y aun así no saber qué significa ganar. Objetivos claros y visibles convierten actividad en desempeño.',
      lead: 'La ausencia de objetivos no detiene el trabajo; lo vuelve difícil de priorizar, medir y mejorar.',
      source: 'https://www.rewire.com.co/blog/trabajando-sin-objetivos',
      sections: [
        ['Actividad no es resultado', 'Sin una definición compartida de éxito, cada persona optimiza lo que considera importante. El equipo entrega mucho movimiento, pero no puede explicar si está avanzando en la dirección correcta.'],
        ['Hacer visible lo importante', 'Un buen sistema de gestión traduce la estrategia en pocas métricas, metas concretas y tableros comprensibles. La conversación cambia: deja de girar alrededor de percepciones y se concentra en brechas, causas y decisiones.'],
        ['Objetivos que movilizan', 'Las metas útiles orientan y generan aprendizaje; no son instrumentos de castigo. Cuando el equipo entiende el propósito y tiene autonomía para actuar, el seguimiento se convierte en una rutina de mejora.']
      ]
    },
    {
      slug: 'arruinando-la-productividad-un-ans-a-la-vez',
      category: 'Experiencia del cliente',
      title: 'Arruinando la productividad un ANS a la vez',
      excerpt: 'Los acuerdos de nivel de servicio pueden reforzar silos y optimizar partes mientras el cliente sigue esperando por el resultado completo.',
      lead: 'Cumplir el tiempo de cada área no garantiza que el proceso de punta a punta sea rápido, simple o valioso para el cliente.',
      source: 'https://www.rewire.com.co/blog/arruinando-la-productividad-un-ans-a-la-vez',
      sections: [
        ['El espejismo del cumplimiento', 'Cada área puede reportar su indicador en verde mientras la experiencia total permanece en rojo. Los tiempos parciales esconden colas, transferencias, devoluciones y esperas que nadie asume como propias.'],
        ['Medir el viaje completo', 'La unidad correcta de análisis es la senda de valor: desde que aparece una necesidad hasta que el cliente recibe una solución. Esto revela el tiempo total, la calidad a la primera y los puntos donde el trabajo se detiene.'],
        ['Responsabilidad compartida', 'Los equipos multidisciplinarios, con una meta común y un dueño del resultado integral, reducen la tentación de proteger indicadores locales. El foco deja de ser entregar al área siguiente y pasa a ser entregar valor.']
      ]
    },
    {
      slug: 'la-ilusion-del-trabajo-en-equipo',
      category: 'Organización',
      title: 'La ilusión del trabajo en equipo',
      excerpt: 'Colaborar no es lo mismo que trabajar como un equipo. El verdadero desempeño colectivo exige propósito, métricas y responsabilidad compartidos.',
      lead: 'Muchas organizaciones hablan de equipos, aunque su estructura, sus incentivos y sus decisiones sigan premiando el desempeño individual o funcional.',
      source: 'https://www.rewire.com.co/blog/la-ilusion-del-trabajo-en-equipo',
      sections: [
        ['Una aspiración legítima', 'La colaboración importa, pero no aparece por decreto. Si cada función tiene prioridades distintas, las reuniones sirven para negociar intereses en lugar de resolver juntos el problema del cliente.'],
        ['Equipos alrededor del valor', 'Organizar capacidades diversas alrededor de una senda de valor crea un objetivo concreto y común. El equipo puede ver el proceso completo, decidir más cerca del trabajo y aprender con mayor velocidad.'],
        ['Cambiar el sistema', 'Para que el trabajo en equipo sea real hay que alinear indicadores, líderes, foros y reconocimientos. La cultura colaborativa es consecuencia de un modelo que hace conveniente colaborar todos los días.']
      ]
    },
    {
      slug: 'el-imperativo-de-la-velocidad',
      category: 'Efectividad organizacional',
      title: 'El imperativo de la velocidad',
      excerpt: 'Responder más rápido requiere foco en el valor, equipos empoderados y ciclos cortos de seguimiento que acerquen la decisión a la operación.',
      lead: 'La velocidad organizacional no consiste en pedirle a la gente que corra más, sino en eliminar las condiciones que hacen lento al sistema.',
      source: 'https://www.rewire.com.co/blog/el-imperativo-de-la-velocidad',
      sections: [
        ['Moverse como un sistema', 'Un cardumen cambia de dirección sin esperar una cadena extensa de instrucciones. En las empresas, esa capacidad aparece cuando existe claridad de propósito, información visible y reglas que permiten decidir cerca del cliente.'],
        ['Del foco funcional al valor', 'Las estructuras tradicionales fragmentan el resultado en tareas y áreas. Una mirada de punta a punta reduce transferencias y permite que equipos multidisciplinarios resuelvan un problema completo.'],
        ['Cadencias más cortas', 'Los ciclos mensuales no alcanzan cuando el contexto cambia a diario. Conversaciones breves y frecuentes sobre desempeño permiten detectar desviaciones, aprender y corregir antes de que la brecha se vuelva costosa.']
      ]
    },
    {
      slug: 'los-pequenos-problemas-son-muy-importantes',
      category: 'Mejora continua',
      title: 'Los “pequeños” problemas son (muy) importantes',
      excerpt: 'Las fricciones cotidianas parecen menores, pero acumuladas consumen capacidad, deterioran la experiencia y normalizan el desperdicio.',
      lead: 'Una organización rara vez pierde productividad por un solo gran evento; la pierde todos los días en cientos de obstáculos que dejó de ver.',
      source: 'https://www.rewire.com.co/blog/los-pequenos-problemes-son-muy-importantes',
      sections: [
        ['El costo de lo invisible', 'Una consulta sin respuesta, un dato que se vuelve a digitar o una aprobación innecesaria parecen detalles. Multiplicados por personas, casos y semanas, se convierten en una fuente enorme de tiempo perdido.'],
        ['Problemas como materia prima', 'El pensamiento lean invita a hacer visibles esas interrupciones y tratarlas como oportunidades de aprendizaje. El objetivo no es buscar culpables, sino entender la causa y mejorar el estándar de trabajo.'],
        ['Una disciplina diaria', 'Los grandes programas ayudan, pero la mejora sostenible se construye con equipos capaces de identificar, priorizar y resolver pequeños problemas de forma continua. Esa capacidad se vuelve una ventaja difícil de imitar.']
      ]
    },
    {
      slug: 'si-su-empresa-pudiera-empezar',
      category: 'Modelo operativo',
      title: 'Si su empresa pudiera empezar de nuevo, así es como operaría',
      excerpt: 'Repensar la organización desde cero revela qué estructuras, roles y rutinas realmente ayudan a crear valor y cuáles sobreviven por costumbre.',
      lead: 'Imaginar una empresa sin legado permite separar lo esencial de aquello que la historia volvió habitual, pero ya no resulta útil.',
      source: 'https://www.rewire.com.co/blog/si-su-empresa-pudiera-empezar',
      sections: [
        ['Diseñar desde el cliente', 'El punto de partida no serían las áreas existentes, sino los flujos que entregan valor. Las capacidades funcionales seguirían siendo importantes, distribuidas de manera que acompañen el resultado de punta a punta.'],
        ['Jerarquía que habilita', 'Los líderes aportarían dirección, contexto y desarrollo de capacidades. Las decisiones operativas quedarían en equipos con información suficiente, límites claros y responsabilidad por los resultados.'],
        ['Gestión visible y cotidiana', 'Los objetivos se conectarían desde la estrategia hasta el trabajo diario. Tableros simples y conversaciones frecuentes permitirían reconocer avances, exponer problemas y actuar a tiempo.']
      ]
    },
    {
      slug: 'un-tablero-no-es-un-tablero',
      category: 'Gerencia visual',
      title: 'Un tablero no es un tablero',
      excerpt: 'Más que un soporte para indicadores, el tablero expresa transparencia, autonomía y una nueva manera de conversar sobre el desempeño.',
      lead: 'El valor de un tablero no está en su diseño gráfico, sino en las conversaciones y decisiones que logra provocar.',
      source: 'https://www.rewire.com.co/blog/un-tablero-no-es-un-tablero',
      sections: [
        ['Ver juntos la realidad', 'Un tablero efectivo crea una versión compartida del desempeño. Hace visibles las metas, los resultados y los problemas para que el equipo no dependa de reportes tardíos o interpretaciones aisladas.'],
        ['De informar a decidir', 'La rutina frente al tablero debe terminar en acciones: qué cambió, por qué importa, quién hará qué y cuándo se revisará. Sin esa cadencia, el tablero se vuelve decoración.'],
        ['Un símbolo cultural', 'Cuando el equipo actualiza la información, propone soluciones y recibe reconocimiento, el tablero representa empoderamiento. La transparencia deja de ser una amenaza y se convierte en una herramienta para mejorar.']
      ]
    },
    {
      slug: 'reflexion-buenas-practicas-gerenciales',
      category: 'Liderazgo',
      title: '¿Por qué menospreciamos las buenas prácticas gerenciales?',
      excerpt: 'Las prácticas básicas de gestión parecen obvias, pero ejecutarlas con disciplina sigue siendo una fuente decisiva de desempeño.',
      lead: 'Saber que una práctica funciona no significa haber construido la capacidad organizacional para sostenerla.',
      source: 'https://www.rewire.com.co/blog/reflexion-buenas-practicas-gerencial',
      sections: [
        ['Lo básico también es difícil', 'Definir objetivos, dar retroalimentación, revisar indicadores y resolver causas son ideas conocidas. Su dificultad está en la consistencia: requieren tiempo de liderazgo, estándares claros y una cadencia que no dependa del entusiasmo del mes.'],
        ['La trampa de la sofisticación', 'Las organizaciones suelen buscar la siguiente metodología antes de dominar las prácticas fundamentales. Esa novedad puede distraer de brechas simples que, bien resueltas, tienen un impacto mayor.'],
        ['Liderar con el ejemplo', 'Las rutinas se vuelven cultura cuando los líderes las practican, las protegen y exigen calidad en su ejecución. La excelencia gerencial se demuestra en lo que ocurre cada semana, no en lo que dice un manual.']
      ]
    },
    {
      slug: 'de-punta-a-punta',
      category: 'Sendas de valor',
      title: 'De punta a punta',
      excerpt: 'El cliente vive un solo proceso, aunque la empresa lo haya dividido entre muchas áreas. Gestionar el flujo completo cambia las prioridades.',
      lead: 'Optimizar cada escena por separado no garantiza una buena película: el resultado depende de cómo funciona la historia completa.',
      source: 'https://www.rewire.com.co/blog/de-punta-apunta',
      sections: [
        ['La mirada del cliente', 'Para quien solicita un servicio no existen los límites internos. Solo importan el tiempo total, la calidad y la facilidad de la experiencia desde la necesidad hasta la solución.'],
        ['Una sola senda de valor', 'Mapear el proceso completo revela esperas, devoluciones, controles duplicados y transferencias. También muestra que los mayores problemas suelen estar entre áreas, justo donde nadie tiene control integral.'],
        ['Gobernar el resultado', 'Un dueño de la senda, métricas de punta a punta y equipos con capacidades diversas permiten gestionar el valor total. Así, las funciones dejan de competir por su indicador y colaboran por el resultado común.']
      ]
    },
    {
      slug: 'el-covid-19-y-las-nuevas-formas-de-trabajar',
      category: 'Nuevas formas de trabajar',
      title: 'El COVID-19 y las nuevas formas de trabajar',
      excerpt: 'El trabajo remoto aceleró preguntas sobre autonomía, medición y coordinación que siguen vigentes en cualquier modelo híbrido.',
      lead: 'La distancia física hizo evidente que controlar presencia nunca fue una buena sustitución para gestionar resultados.',
      source: 'https://www.rewire.com.co/blog/el-covid-19-y-las-nuevas-formas-de-trabajar',
      sections: [
        ['Cambió el lugar, no el reto', 'Trasladar las mismas reuniones y jerarquías a una pantalla no transforma el trabajo. Los equipos necesitan objetivos claros, información accesible y acuerdos explícitos para coordinarse sin depender de la proximidad.'],
        ['Decisiones descentralizadas', 'Cuando el contexto está disponible y los límites son claros, las decisiones pueden acercarse al lugar donde surge el problema. Esto reduce esperas y libera a los líderes para concentrarse en prioridades y capacidades.'],
        ['Medir valor, no actividad', 'La gestión híbrida funciona mejor cuando observa resultados, flujo y experiencia. Los equipos multidisciplinarios y las rutinas breves mantienen la alineación sin convertir la agenda en una secuencia interminable de reuniones.']
      ]
    },
    {
      slug: 'los-principios-de-lean-es-lo-que-necesitas',
      category: 'Lean',
      title: 'Los principios de LEAN es lo que necesita su salud (organizacional)',
      excerpt: 'Alineación, capacidad de ejecución y renovación son dimensiones de una organización saludable que el pensamiento lean ayuda a fortalecer.',
      lead: 'El desempeño muestra lo que una organización consigue hoy; su salud explica si podrá seguir consiguiéndolo mañana.',
      source: 'https://www.rewire.com.co/blog/los-principios-de-lean-es-lo-que-necesitas',
      sections: [
        ['Alinear', 'La gerencia visual y los objetivos conectados permiten que cada equipo entienda cómo contribuye a la estrategia. La transparencia crea confianza y reduce el esfuerzo perdido en prioridades contradictorias.'],
        ['Ejecutar', 'Hacer visibles los problemas, organizar equipos alrededor del valor y revisar el desempeño con frecuencia fortalece la responsabilidad. Las personas pasan de recibir instrucciones a protagonizar la solución.'],
        ['Renovarse', 'La mejora continua convierte la experimentación en un hábito. Las ideas surgen cerca del trabajo, desafían el estado actual y construyen una organización capaz de aprender antes de que el entorno la obligue.']
      ]
    },
    {
      slug: 'como-duplicar-la-productividad',
      category: 'Productividad',
      title: '¿Cómo duplicar la productividad sin “romper la alcancía”?',
      excerpt: 'Antes de invertir en más tecnología o personal, conviene rediseñar la demanda, los equipos y los controles que limitan el flujo.',
      lead: 'Los saltos de productividad muchas veces están escondidos en la forma de organizar el trabajo, no en el tamaño del presupuesto.',
      source: 'https://www.rewire.com.co/blog/como-duplicar-la-productividad',
      sections: [
        ['Segmentar la demanda', 'Separar casos por complejidad permite asignar capacidades y rutas adecuadas. Es una intervención sencilla que evita que los asuntos difíciles retrasen sistemáticamente a los simples.'],
        ['Crear equipos multidisciplinarios', 'Juntar capacidades que antes se transferían trabajo reduce devoluciones y elimina la espera entre áreas. Un líder, una meta y unos incentivos comunes ayudan a resolver el caso completo.'],
        ['Rediseñar controles', 'No todo control debe desaparecer, pero sí puede cumplir su propósito de una manera más ágil. Revisar el riesgo real, la frecuencia y el punto de decisión puede reducir de forma radical el tiempo de ciclo.']
      ]
    },
    {
      slug: 'supersonicos-y-picapiedras',
      category: 'Transformación digital',
      title: '¿Pueden convivir los Supersónicos con los Picapiedra?',
      excerpt: 'La tecnología del futuro no produce todo su valor cuando opera sobre jerarquías, silos y formas de trabajo del pasado.',
      lead: 'Digitalizar una organización sin cambiar cómo decide, colabora y aprende crea una mezcla costosa entre herramientas nuevas y hábitos antiguos.',
      source: 'https://www.rewire.com.co/blog/supersonicos-y-picapiedras',
      sections: [
        ['Más que interfaces y automatización', 'Una transformación digital no termina cuando el cliente usa un canal nuevo o una tarea se automatiza. Su éxito depende de que la organización traduzca esas posibilidades en una experiencia y un desempeño superiores.'],
        ['Nuevas formas de trabajar', 'Los equipos interdisciplinarios, orientados al valor y con autonomía para decidir, aprovechan mejor la información y la tecnología. La visibilidad del desempeño acelera el aprendizaje cotidiano.'],
        ['Tecnología y sistema operativo', 'Las herramientas crean ventaja cuando se combinan con procesos, roles, gobierno e incentivos congruentes. Transformar ambos lados al mismo tiempo evita que la inversión digital quede atrapada en el modelo del siglo pasado.']
      ]
    }
  ];

  const caseStudies = [
    {
      slug: 'vinculacion-de-clientes',
      number: '01',
      title: 'Vinculación de clientes',
      sector: 'Fintech',
      impact: '−75% ciclo',
      deck: 'Fintech líder en financiación en punto de venta, con cerca de 100 mil clientes y una operación de créditos de aproximadamente US$5 millones mensuales.',
      context: [
        'La organización venía creciendo a dos dígitos y necesitaba confirmar que su modelo operativo y de servicio pudiera sostener esa expansión. Crear un comercio nuevo tomaba entre 7 y 45 días, una variabilidad incompatible con la promesa de valor y el crecimiento proyectado.',
        'La senda involucraba al cliente y a un aliado estratégico, con actividades duplicadas, tiempos muertos entre las partes y un esquema secuencial que hacía más lento el proceso.'
      ],
      solutions: [
        'Eliminar actividades duplicadas y asignar cada control a un solo actor.',
        'Transferir atribuciones al equipo para reducir esperas frente al aliado estratégico.',
        'Cambiar actividades secuenciales por ejecución en paralelo.',
        'Simplificar el flujo y concentrar la responsabilidad en menos actores.'
      ],
      results: [
        'El tiempo de ciclo se redujo en 75%, de 16 a 4 días.',
        'La capacidad instalada del equipo aumentó en más de 100%.',
        'Los comercios pudieron comenzar a colocar cartera mucho más rápido.',
        'La operación quedó preparada para absorber crecimiento sin ampliar el equipo.'
      ],
      obstacles: 'El mayor desafío fue involucrar al aliado estratégico y modificar paradigmas que llevaban años operando, incluidos elementos incorporados en contratos entre las partes.',
      before: ['16 días de ciclo', '7 actores', '33 actividades'],
      after: ['4 días de ciclo', '3 actores', '17 actividades'],
      quote: 'Logramos un aumento visible y contundente en métricas clave para el cliente y consolidamos una metodología de mejora continua para profundizar las mejoras.',
      source: 'https://www.rewire.com.co/vinculacion-de-clientes-caso-de-estudio'
    },
    {
      slug: 'facturacion',
      number: '02',
      title: 'Facturación',
      sector: 'Servicios empresariales',
      impact: '−38% ciclo',
      deck: 'Uno de los mayores empleadores de Colombia, con más de 30.000 colaboradores y un portafolio que incluye selección, formación, nómina y consultoría.',
      context: [
        'La Alta Gerencia buscaba eliminar desperdicios, mejorar productividad y proteger márgenes en una industria muy competida. La facturación fue seleccionada como una senda de valor prioritaria por su impacto en el ciclo de efectivo.',
        'Emitir y radicar una factura tomaba cerca de 18 días. Las entregas entre áreas generaban esperas, ANS incumplidos, errores, reprocesos e incentivos desalineados.'
      ],
      solutions: [
        'Crear un equipo multidisciplinario con las capacidades de las áreas que intervenían en la senda.',
        'Nombrar un único líder para el resultado de punta a punta.',
        'Unificar objetivos, indicadores e incentivos.',
        'Instalar seguimiento diario mediante tableros visibles para todo el equipo.'
      ],
      results: [
        'El ciclo de emisión y radicación bajó de 18 a 11 días.',
        'Los reprocesos se hicieron visibles y se redujeron 56% durante el piloto.',
        'El equipo generó 20% más facturas con el mismo número de personas.',
        'La senda pasó de silos funcionales a un equipo con responsabilidad compartida.'
      ],
      obstacles: 'El principal reto fue superar la resistencia de líderes funcionales frente a la conformación del equipo multidisciplinario e instalar la disciplina del seguimiento diario.',
      before: ['18 días de ciclo', 'Actores trabajando en silos', 'Indicadores desalineados'],
      after: ['11 días de ciclo', 'Equipo multidisciplinario', 'Indicadores unificados y visibles'],
      quote: 'El trabajo nos movilizó a renunciar a viejos paradigmas y a construir procesos más livianos, productivos y capaces de responder al mercado con agilidad.',
      source: 'https://www.rewire.com.co/facturacion-caso-de-estudio'
    },
    {
      slug: 'procesamiento-de-solicitudes',
      number: '03',
      title: 'Procesamiento de solicitudes',
      sector: 'Información y analítica',
      impact: '+10 pts NPS',
      deck: 'Compañía global de procesamiento y análisis de información para decisiones de crédito, presente en 30 países y con una posición relevante en Colombia.',
      context: [
        'La presión competitiva exigía responder con mayor velocidad y efectividad. La senda comenzaba con el pedido del cliente y terminaba con la entrega de la solución; cualquier demora podía llevar al cliente hacia la competencia.',
        'Participaban múltiples actores con mentalidad funcional, partes del trabajo se ejecutaban por lotes, no existía un responsable integral y faltaba consenso sobre objetivos, indicadores y metas.'
      ],
      solutions: [
        'Definir objetivos, indicadores y metas comunes con seguimiento mediante gerencia visual.',
        'Crear el rol de líder de la senda como responsable del desempeño integral.',
        'Instalar una coreografía de expertos para coordinar el flujo de punta a punta.',
        'Simplificar decisiones de precio y estandarizar actividades clave para eliminar cuellos de botella.'
      ],
      results: [
        'El nuevo proceso se convirtió en estándar para el resto de América Latina.',
        'El tiempo de ciclo se redujo 30%.',
        'El NPS aumentó 10 puntos porcentuales un año después de la implementación.',
        'La senda quedó gobernada por un equipo multidisciplinario con metas visibles.'
      ],
      obstacles: 'La transformación exigió romper la lógica funcional, coordinar especialistas alrededor de un solo flujo y simplificar decisiones comerciales que se habían convertido en cuellos de botella.',
      before: ['Actores con mentalidad de silo', 'Metas sin alineación', 'Sin líder de punta a punta'],
      after: ['Equipo multidisciplinario', 'Objetivos y metas claras', 'Líder de la senda'],
      quote: 'REWIRE impulsó transformaciones profundas en el diseño de procesos, la gestión de los equipos, la medición del impacto y la práctica real de mejora continua.',
      source: 'https://www.rewire.com.co/procesamiento-solicitudes-de-soluciones'
    },
    {
      slug: 'servicio-al-cliente',
      number: '04',
      title: 'Servicio al cliente',
      sector: 'Fintech',
      impact: '16 → 3 días',
      deck: 'Fintech líder en financiación en punto de venta que necesitaba contener el crecimiento de solicitudes y quejas mientras sostenía su expansión.',
      context: [
        'Las PQRS crecían más rápido que el negocio y los tiempos de respuesta superaban los 10 días hábiles en la mayoría de los casos.',
        'El reto era reducir solicitudes y quejas, acelerar la respuesta y elevar la calidad para evitar reiteraciones.'
      ],
      solutions: [
        'Unificar canales de entrada que operaban de forma desarticulada.',
        'Crear una célula entre servicio y operaciones para resolver las causas de mayor recurrencia.',
        'Definir historias de éxito, indicadores, metas y tableros de seguimiento diario.',
        'Crear una línea separada para casos urgentes, críticos o de alta visibilidad.'
      ],
      results: [
        'La mediana del tiempo de ciclo bajó de 16 a 3 días.',
        'La unificación de canales redujo reprocesos para el cliente en más de 50%.',
        'Cerca de la mitad de las causas de queja fueron resueltas o tenían una iniciativa activa.',
        'El equipo instaló una dinámica diaria de gerencia visual.'
      ],
      obstacles: 'El reto central fue consolidar una célula permanente entre servicio y operaciones y reemplazar los seguimientos aislados por una visión diaria de la senda completa.',
      before: ['8 días de ciclo en la medición base', '4 actores', '13 actividades'],
      after: ['3 días de ciclo', '2 actores', '6 actividades'],
      quote: 'Después del proyecto consolidamos las mejoras y la metodología de mejora continua para seguir profundizándolas.',
      source: 'https://www.rewire.com.co/servicio-al-cliente-caso-de-estudio'
    },
    {
      slug: 'seleccion-y-contratacion',
      number: '05',
      title: 'Selección y contratación',
      sector: 'Gastronomía',
      impact: '−55% ciclo',
      deck: 'Uno de los grupos gastronómicos más grandes de Colombia, con más de 20 marcas, 35 restaurantes en Bogotá y más de 1.200 colaboradores.',
      context: [
        'Tras la pandemia, la rotación llegó a 8% mensual y las vacantes no se cubrían a tiempo. El equipo de contratación dedicaba entre 60% y 70% de su capacidad a tareas operativas.',
        'La senda tomaba 31 días, incluía más de 50 actividades y requería la intervención de actores de distintas áreas, con fricción y poca alineación frente a las necesidades del cliente interno.'
      ],
      solutions: [
        'Eliminar o transferir tareas operativas que no correspondían al equipo de selección.',
        'Pasar de contratar un solo día a la semana a operar cinco días en flujo continuo.',
        'Unificar la responsabilidad del proceso en un área y reducir fricciones entre silos.',
        'Instalar objetivos, indicadores, metas y tableros para reuniones diarias, semanales y mensuales.'
      ],
      results: [
        'La mediana del proceso bajó de 31 a 14 días durante el piloto.',
        'El objetivo de completar la contratación en 15 días o menos se alcanzó en 60% de los casos, partiendo de 0%.',
        'Los actores bajaron de 8 a 3 y las actividades de 52 a 36.',
        'La organización instaló tableros operativos y ejecutivos conectados entre sí.'
      ],
      obstacles: 'Unificar la senda bajo un líder, eliminar actividades arraigadas e incorporar reuniones diarias fueron los principales desafíos de adopción.',
      before: ['31 días de ciclo', '8 actores', '52 actividades'],
      after: ['14 días de ciclo', '3 actores', '36 actividades'],
      quote: 'REWIRE dejó instaladas metodologías fundamentales para procesos más dinámicos y eficientes, y ayudó a cambiar la mentalidad sobre cómo organizar procesos y proyectos.',
      source: 'https://www.rewire.com.co/seleccion-y-contratacion-de-personal'
    }
  ];

  function renderCaseCards() {
    const grid = document.getElementById('case-grid-all');
    grid.innerHTML = caseStudies.map(item => `
      <a class="case-card reveal" href="#casos/${item.slug}" data-case-slug="${item.slug}">
        <div class="case-card-head"><span class="case-number">CASO ${item.number} · ${item.sector}</span><span class="case-impact">${item.impact}</span></div>
        <h3>${item.title}</h3>
        <p>${item.context[0]}</p>
        <span class="read-more">Ver caso completo →</span>
      </a>`).join('');
  }

  function showCase(slug, updateUrl = true) {
    const index = caseStudies.findIndex(item => item.slug === slug);
    if (index < 0) { showPage('casos'); return; }
    const item = caseStudies[index];
    const next = caseStudies[(index + 1) % caseStudies.length];
    document.getElementById('case-detail-kicker').textContent = `Caso ${item.number} · ${item.sector}`;
    document.getElementById('case-detail-title').textContent = item.title;
    document.getElementById('case-detail-deck').textContent = item.deck;
    document.getElementById('case-side-impact').textContent = item.impact;
    document.getElementById('case-original-link').href = item.source;
    document.getElementById('case-detail-body').innerHTML = `
      <h2>Contexto y reto</h2>
      ${item.context.map(text => `<p>${text}</p>`).join('')}
      <h2>La solución</h2>
      <ul>${item.solutions.map(text => `<li>${text}</li>`).join('')}</ul>
      <h2>Los resultados</h2>
      <ul>${item.results.map(text => `<li>${text}</li>`).join('')}</ul>
      <h2>Desafíos clave</h2>
      <p>${item.obstacles}</p>
      <h2>Antes y después de la transformación</h2>
      <div class="case-compare">
        <div class="case-state"><b>Antes</b><ul>${item.before.map(text => `<li>${text}</li>`).join('')}</ul></div>
        <div class="case-state is-after"><b>Después</b><ul>${item.after.map(text => `<li>${text}</li>`).join('')}</ul></div>
      </div>
      <blockquote class="case-quote">“${item.quote}”</blockquote>`;
    document.getElementById('case-next-title').textContent = next.title;
    document.getElementById('case-next-link').href = `#casos/${next.slug}`;
    document.getElementById('case-next-link').dataset.caseSlug = next.slug;
    showPage('caseDetail');
    if (updateUrl) history.pushState({ caseStudy: slug }, '', `#casos/${slug}`);
    document.title = `${item.title} — Caso de estudio REWIRE`;
  }

  function renderBlogCards() {
    const grid = document.getElementById('blog-grid-all');
    grid.innerHTML = blogArticles.map((article, index) => `
      <a class="blog-card reveal" href="#blog/${article.slug}" data-article="${article.slug}">
        <div class="bc-top"></div>
        <div class="bc-body">
          <div class="bc-meta"><div class="blog-tag" style="margin:0">${article.category}</div><span class="bc-index">${String(index + 1).padStart(2, '0')}</span></div>
          <h4>${article.title}</h4>
          <p>${article.excerpt}</p>
          <span class="read-more">Leer artículo →</span>
        </div>
      </a>`).join('');
  }

  function showArticle(slug, updateUrl = true) {
    const index = blogArticles.findIndex(article => article.slug === slug);
    if (index < 0) { showPage('blog'); return; }
    const article = blogArticles[index];
    const next = blogArticles[(index + 1) % blogArticles.length];
    document.getElementById('article-category').textContent = article.category;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-deck').textContent = article.excerpt;
    const original = window.rewireOriginalArticles?.[slug];
    const originalLead = original?.lead ? `<p class="article-lead">${original.lead}</p>` : '';
    const originalQuote = original?.pullquote ? `<blockquote class="article-pullquote">${original.pullquote}</blockquote>` : '';
    document.getElementById('article-body').innerHTML = original
      ? originalLead + original.html + originalQuote
      : `<p class="article-lead">${article.lead}</p>` + article.sections.map(section => `<h2>${section[0]}</h2><p>${section[1]}</p>`).join('');
    document.getElementById('article-source').href = original?.source || article.source;
    document.getElementById('article-next-title').textContent = next.title;
    document.getElementById('article-next-link').href = `#blog/${next.slug}`;
    document.getElementById('article-next-link').dataset.article = next.slug;
    showPage('article');
    if (updateUrl) history.pushState({ article: slug }, '', `#blog/${slug}`);
    document.title = `${article.title} — REWIRE`;
  }

  renderCaseCards();
  renderBlogCards();

  // ─── Page router ───
  const pages = { home: 'page-home', clientes: 'page-clientes', casos: 'page-casos', caseDetail: 'page-case-detail', blog: 'page-blog', medios: 'page-medios', article: 'page-article' };
  const pageLinks = document.querySelectorAll('.nav-page');
  function showPage(key, anchor) {
    const id = pages[key] || pages.home;
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('is-active', p.id === id));
    const activeKey = key === 'article' ? 'blog' : key === 'caseDetail' ? 'casos' : key;
    pageLinks.forEach(a => a.classList.toggle('is-page-active', a.dataset.page === activeKey));
    const active = document.getElementById(id);
    active.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) { requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' })); return; }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const key = el.dataset.page;
      if (key === 'home-contacto') {
        history.pushState(null, '', '#contacto');
        showPage('home', 'contacto');
      } else {
        history.pushState(null, '', key === 'home' ? '#inicio' : `#${key}`);
        showPage(key);
        if (key === 'home') document.title = 'REWIRE — Convertimos la estrategia en resultados';
      }
    });
  });
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-article]');
    if (!link) return;
    e.preventDefault();
    showArticle(link.dataset.article);
  });
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-case-slug]');
    if (!link) return;
    e.preventDefault();
    showCase(link.dataset.caseSlug);
  });

  function routeFromLocation() {
    const hash = location.hash.replace(/^#/, '');
    if (hash.startsWith('blog/')) { showArticle(hash.slice(5), false); return; }
    if (hash.startsWith('casos/')) { showCase(hash.slice(6), false); return; }
    if (hash === 'blog' || hash === 'clientes' || hash === 'casos' || hash === 'medios') { showPage(hash); return; }
    if (hash === 'contacto') { showPage('home', 'contacto'); return; }
    showPage('home');
  }
  window.addEventListener('popstate', routeFromLocation);
  routeFromLocation();
  // Home-section links: if not on home, switch home first then scroll
  document.querySelectorAll('.nav-home').forEach(a => {
    a.addEventListener('click', (e) => {
      const anchor = a.getAttribute('href').slice(1);
      if (!document.getElementById('page-home').classList.contains('is-active')) {
        e.preventDefault();
        showPage('home', anchor);
      }
    });
  });

  // ─── Nav active state ───
  const navLinks = document.querySelectorAll('nav.top ul a');
  const navMap = new Map();
  navLinks.forEach(a => navMap.set(a.getAttribute('href').slice(1), a));
  const io = new IntersectionObserver((entries) => {
    requestAnimationFrame(() => {
      entries.forEach(e => {
        if (e.isIntersecting && navMap.has(e.target.id)) {
          navLinks.forEach(a => a.classList.remove('is-active'));
          navMap.get(e.target.id).classList.add('is-active');
        }
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(s => { if (navMap.has(s.id)) io.observe(s); });

  // ─── Reto chips ───
  document.querySelectorAll('#retoGroup .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#retoGroup .chip').forEach(c => c.classList.remove('is-checked'));
      chip.classList.add('is-checked');
    });
  });

  // ─── Form ───
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(i => {
      if (!i.value || (i.type === 'checkbox' && !i.checked)) { i.style.borderColor = '#d04545'; valid = false; }
      else { i.style.borderColor = ''; }
    });
    if (!valid) return;
    const data = new FormData(form);
    const selectedChallenge = document.querySelector('#retoGroup .chip.is-checked');
    const subject = `Solicitud desde rewire.com.co · ${data.get('company') || data.get('name')}`;
    const body = [
      'Nueva solicitud desde el formulario “Conversemos sobre su reto”',
      '',
      `Nombre: ${data.get('name') || ''}`,
      `Cargo: ${data.get('role') || ''}`,
      `Empresa: ${data.get('company') || ''}`,
      `Sector: ${data.get('sector') || 'No indicado'}`,
      `Correo corporativo: ${data.get('email') || ''}`,
      `Reto principal: ${selectedChallenge?.textContent.trim() || 'No indicado'}`,
      '',
      'Descripción del reto:',
      data.get('message') || 'No indicada'
    ].join('\n');
    document.getElementById('form-success').classList.add('is-visible');
    document.getElementById('form-success').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    window.location.href = `mailto:contacto@rewire.com.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  // ─── Reveal ───
  const revealIo = new IntersectionObserver((entries) => {
    requestAnimationFrame(() => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealIo.unobserve(e.target); } });
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealIo.observe(el));

  // ─── Solution modals ───
  const modalData = {
    modelos: {
      tag: 'Solución · Línea core',
      title: 'Transformación de modelos de gestión',
      sections: [
        { title: 'Qué resolvemos', body: 'La estrategia no se traduce en decisiones, iniciativas y resultados consistentes. Falta un sistema de gestión que conecte prioridad, decisión, seguimiento y coordinación.' },
        { title: 'Qué diseñamos e instalamos', list: [
          'Mecanismos de gobierno y derechos de decisión',
          'Rutinas de seguimiento y coordinación entre áreas',
          'Foros y cadencias con agenda orientada a decisión',
          'Reglas de escalamiento y accountability'
        ]},
        { title: 'Resultado', body: 'Un modelo de gestión que convierte la estrategia en ejecución, con decisiones más rápidas y coordinación real entre áreas.' }
      ]
    },
    organizacional: {
      tag: 'Solución · Línea core',
      title: 'Diseño organizacional y modelo operativo',
      sections: [
        { title: 'Qué resolvemos', body: 'Estructuras pesadas, roles ambiguos y un modelo operativo que no soporta el crecimiento, la integración ni nuevas exigencias del mercado.' },
        { title: 'Qué diseñamos e instalamos', list: [
          'Modelo operativo objetivo (negocio y soporte)',
          'Estructura, roles y responsabilidades (RACI)',
          'Capacidades, procesos e interacciones clave',
          'Plan de transición y gestión del cambio'
        ]},
        { title: 'Resultado', body: 'Una organización alineada con la estrategia, con roles claros y capacidad de escalar.' }
      ]
    },
    operacional: {
      tag: 'Solución · Línea core',
      title: 'Excelencia operacional y productividad',
      sections: [
        { title: 'Qué resolvemos', body: 'Procesos que generan fricción, desperdicio y retrabajo, con pérdida de velocidad y margen.' },
        { title: 'Qué diseñamos e instalamos', list: [
          'Rediseño de procesos end-to-end',
          'Eliminación de restricciones y pasos sin valor',
          'Gestión visual y rutinas operativas',
          'Línea base y captura de beneficios'
        ]},
        { title: 'Resultado', body: 'Mejoras medibles en tiempos, costos, calidad, capacidad y experiencia del cliente.' }
      ]
    },
    ejecucion: {
      tag: 'Solución · Línea core',
      title: 'Ejecución estratégica y medición',
      sections: [
        { title: 'Qué resolvemos', body: 'Exceso de iniciativas sin priorización, sin indicadores claros y sin rutinas que aseguren los beneficios.' },
        { title: 'Qué diseñamos e instalamos', list: [
          'Priorización de iniciativas y apuestas críticas',
          'Indicadores por nivel y por dueño',
          'Tableros ejecutivo y operativo',
          'Rutinas de seguimiento y accountability'
        ]},
        { title: 'Resultado', body: 'Un sistema de ejecución con foco, cadencia y beneficios trazables.' }
      ]
    },
    ia: {
      tag: 'Solución · Línea core',
      title: 'IA aplicada a la organización',
      sections: [
        { title: 'Qué resolvemos', body: 'La IA se adopta sin rediseñar procesos, roles, gobierno y formas de trabajo — por eso no genera valor real.' },
        { title: 'Qué diseñamos e instalamos', list: [
          'Mapa de oportunidades de IA por función',
          'Priorización de casos de uso por business case',
          'Rediseño de procesos, roles y gobierno',
          'Pilotos con métricas y criterios de adopción'
        ]},
        { title: 'Resultado', body: 'Casos de uso de IA que capturan valor real y se sostienen en la operación.' }
      ]
    },
    formacion: {
      tag: 'Línea complementaria',
      title: 'Formación ejecutiva',
      sections: [
        { title: 'Para qué', body: 'Fortalecer capacidades de líderes y equipos y acelerar la adopción de nuevas formas de trabajo.' },
        { title: 'Qué ofrecemos', list: [
          'Talleres prácticos orientados al reto real',
          'Experiencias de aprendizaje aplicadas',
          'Desarrollo de capacidades de gestión y liderazgo',
          'Acompañamiento a la adopción del cambio'
        ]},
        { title: 'Nota', body: 'Línea complementaria a los proyectos core. Su arquitectura de marca está en evaluación por el Comité de Dirección.' }
      ]
    }
  };

  const overlay = document.getElementById('modal-overlay');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = modalData[btn.dataset.modal];
      if (!data) return;
      modalTag.textContent = data.tag;
      modalTitle.textContent = data.title;
      modalBody.innerHTML = '';
      data.sections.forEach(s => {
        const sec = document.createElement('div');
        sec.className = 'modal-section';
        sec.innerHTML = `<h5>${s.title}</h5>` + (s.body ? `<p>${s.body}</p>` : '') + (s.list ? `<ul>${s.list.map(li => `<li>${li}</li>`).join('')}</ul>` : '');
        modalBody.appendChild(sec);
      });
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeModal() { overlay.classList.remove('is-open'); document.body.style.overflow = ''; }
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  document.getElementById('modal-cta').addEventListener('click', closeModal);
