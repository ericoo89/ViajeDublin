const days = [
  {
    id: "2026-07-02",
    number: "2",
    weekday: "Jueves",
    month: "Julio",
    title: "Llegada a Dublín",
    subtitle: "Vuelo, traslado al hotel y primer contacto con la conferencia",
    image: {
      src: "Imagenes/2julio.webp",
      alt: "Imagen del día de llegada a Dublín",
    },
    color: "#dbeafe",
    keyInfo: [
      ["Vuelo", "Alicante 10:15 -> Dublín 12:10"],
      ["Traslado", "Aircoach 702 hacia Dalkey, bajando en Dún Laoghaire"],
      ["Hotel", "Royal Marine Hotel, Dún Laoghaire"],
      ["Motivo", "Conferencia de cistinosis hasta el 4 de julio después de cenar"],
    ],
    notes: [
      "Comprar el Aircoach en la web/app oficial al salir del aeropuerto o reservarlo antes si quieres ir más tranquilo.",
      "Origen: Dublin Airport Terminal 1 Zone 2 o Terminal 2 Zone 20. Destino: Dún Laoghaire, Marine Road, opposite County Hall.",
      "Añadir número de vuelo, código de reserva y hora de check-in cuando estén disponibles.",
      "Guardar aquí la dirección exacta del hotel y teléfonos útiles antes de viajar.",
    ],
    events: [
      {
        time: "10:15",
        title: "Salida del aeropuerto de Alicante",
        tag: "Vuelo",
        tagTone: "important",
        description: "Vuelo Alicante -> Dublín. Conviene añadir aquí número de vuelo, terminal y localizador.",
        meta: ["Origen: Alicante", "Destino: Dublín"],
      },
      {
        time: "12:10",
        title: "Llegada al aeropuerto de Dublín",
        tag: "Vuelo",
        description: "Llegada prevista a Dublín. Dejar margen para desembarque, equipaje y orientarse en el aeropuerto.",
        meta: ["Hora local", "Pendiente: equipaje"],
      },
      {
        time: "13:00",
        title: "Aircoach hacia Dún Laoghaire",
        tag: "Traslado",
        tagTone: "important",
        description: "Coger Aircoach 702 desde Dublin Airport hacia Dalkey y bajar en Dún Laoghaire, Marine Road, opposite County Hall. Desde esa parada hay un paseo corto hasta Royal Marine Hotel. Compra recomendada: abre la web/app oficial, origen Dublin Airport, destino Dún Laoghaire, elige el primer bus realista después de recoger equipaje y guarda el billete en el móvil.",
        meta: ["Aircoach 702", "T1 Zone 2 / T2 Zone 20", "Parada: Marine Road"],
        links: [
          {
            label: "Comprar billete",
            href: "https://www.aircoach.ie/book-tickets",
          },
          {
            label: "Horarios 702",
            href: "https://www.aircoach.ie/timetables/702/pdf",
          },
          {
            label: "Aircoach app/info",
            href: "https://www.aircoach.ie/index.php/plan-journey/travel-information",
          },
          {
            label: "Parada al hotel",
            href: "https://www.google.com/maps/dir/?api=1&origin=Dun%20Laoghaire%2C%20Marine%20Road%2C%20opposite%20County%20Hall&destination=Royal%20Marine%20Hotel%20Dun%20Laoghaire&travelmode=walking",
          },
        ],
      },
      {
        time: "14:30",
        title: "Llegada al Royal Marine Hotel",
        tag: "Hotel",
        description: "Llegada estimada al hotel. Si la habitación no está lista, dejar equipaje y localizar la zona de la conferencia.",
        meta: ["Check-in por confirmar", "Dún Laoghaire"],
        links: [
          {
            label: "Ver hotel",
            href: "https://www.google.com/maps/search/?api=1&query=Royal%20Marine%20Hotel%20Dun%20Laoghaire",
          },
        ],
      },
      {
        time: "17:00-18:30",
        title: "Sesión de bienvenida para adultos con cistinosis y parejas",
        tag: "Conferencia",
        tagTone: "pending",
        audience: "Adultos",
        description: "Sesión de bienvenida para adultos con cistinosis y sus parejas.",
        meta: ["Closed", "Royal Marine Hotel"],
      },
      {
        time: "18:30-21:00",
        title: "Bienvenida familiar Meeting Together",
        tag: "Conferencia",
        tagTone: "important",
        description: "Bienvenida familiar de Meeting Together para abrir oficialmente la conferencia.",
        meta: ["Welcome", "Royal Marine Hotel"],
      },
    ],
  },
  {
    id: "2026-07-03",
    number: "3",
    weekday: "Viernes",
    month: "Julio",
    title: "Conferencia",
    subtitle: "Learning Together, grupos temáticos y actualizaciones de investigación",
    image: {
      src: "Imagenes/viernes3.avif",
      alt: "Imagen de cabecera del viernes de conferencia",
    },
    color: "#d1fae5",
    keyInfo: [
      ["Mañana", "Learning Together + themed breakout sessions"],
      ["Comida", "12:00 lunch break"],
      ["Tarde", "Research updates, posters y free evening"],
    ],
    notes: [
      "Algunas sesiones del viernes aparecen como closed en la agenda de la conferencia.",
      "Hay actividades simultáneas para adolescentes/niños 8+ y sesiones para adultos/familias.",
      "La tarde queda libre después del cierre de las 17:00.",
    ],
    events: [
      {
        time: "09:00",
        title: "Bienvenida + Cistinosis 101",
        tag: "Conferencia",
        tagTone: "important",
        description: "Inicio de Session 1: Learning Together. Bienvenida y Cystinosis 101 desde la perspectiva clínica y familiar.",
        meta: ["Session 1", "Learning Together"],
      },
      {
        time: "09:30",
        title: "Actividad para adultos con cistinosis",
        tag: "Actividad",
        tagTone: "pending",
        audience: "Adultos",
        description: "Actividad para adultos con cistinosis.",
        meta: ["Closed"],
      },
      {
        time: "10:00",
        title: "Actividad de investigación para jóvenes y niños 8+",
        tag: "Actividad",
        description: "Introducción a la actividad de investigación para adolescentes y niños a partir de 8 años.",
        meta: ["8+", "Research activity"],
      },
      {
        time: "10:30",
        title: "Pausa para té y café",
        tag: "Descanso",
        description: "Pausa de té y café antes de las sesiones temáticas.",
        meta: ["Break"],
      },
      {
        time: "11:00",
        title: "Sesiones temáticas por grupos",
        tag: "Conferencia",
        tagTone: "pending",
        description: "Session 2: grupos para familias y cuidadores: parents of 0-11 years, parents of 12-17 years, grandparents & other carers, parents of adults with cystinosis y teenagers with cystinosis.",
        meta: ["Closed", "Breakout groups"],
      },
      {
        time: "11:30",
        title: "Sesión para adultos con cistinosis y parejas",
        tag: "Conferencia",
        tagTone: "pending",
        audience: "Adultos",
        description: "Sesión para adultos con cistinosis y parejas, seguida de lunch.",
        meta: ["Closed", "Followed by lunch"],
      },
      {
        time: "12:00",
        title: "Pausa para comer",
        tag: "Comida",
        description: "Pausa para comer.",
        meta: ["Lunch"],
      },
      {
        time: "13:00-15:00",
        title: "Actividad de investigación para jóvenes y niños 8+",
        tag: "Actividad",
        description: "Actividad de investigación para adolescentes y niños 8+ durante la Session 3.",
        meta: ["8+", "Research activity"],
      },
      {
        time: "13:00",
        title: "Actualizaciones de investigación",
        tag: "Conferencia",
        tagTone: "important",
        description: "Session 3: actualizaciones de investigación, incluyendo CF10, gene therapy, Everolimus, contact lens delivery y Voice.",
        meta: ["Plenary", "Research updates"],
      },
      {
        time: "15:30",
        title: "Pausa para té y café / Sesión de pósters",
        tag: "Descanso",
        description: "Pausa de té y café junto con sesión de pósters.",
        meta: ["Posters"],
      },
      {
        time: "16:00",
        title: "Presentaciones de pósters",
        tag: "Conferencia",
        description: "Presentaciones de pósters.",
        meta: ["Poster presentations"],
      },
      {
        time: "17:00",
        title: "Cierre",
        tag: "Cierre",
        description: "Cierre del día de conferencia. La noche queda libre.",
        meta: ["Free evening"],
      },
    ],
  },
  {
    id: "2026-07-04",
    number: "4",
    weekday: "Sábado",
    month: "Julio",
    title: "Cierre de conferencia",
    subtitle: "Actualizaciones internacionales, grupos temáticos y cierre",
    image: {
      src: "Imagenes/sabado4.avif",
      alt: "Imagen de cabecera del sábado de conferencia",
    },
    color: "#ffedd5",
    keyInfo: [
      ["Mañana", "International updates + themed breakout sessions"],
      ["Comida", "12:00 lunch break"],
      ["Cierre", "16:45 closing remarks and prize winners"],
    ],
    notes: [
      "El sábado concentra actualizaciones internacionales y sesiones temáticas.",
      "La agenda marca lunch general y lunch cerrado para adults with cystinosis & partners a las 12:00.",
      "La conferencia termina oficialmente con closing remarks a las 16:45.",
    ],
    events: [
      {
        time: "09:00",
        title: "Actualizaciones internacionales",
        tag: "Conferencia",
        tagTone: "important",
        description: "Session 4: actualizaciones desde South Africa, Japan y US.",
        meta: ["Session 4", "International Updates"],
      },
      {
        time: "10:30",
        title: "Programa para niños y adolescentes",
        tag: "Actividad",
        description: "Programa para niños y adolescentes.",
        meta: ["Children", "Teenagers"],
      },
      {
        time: "10:30",
        title: "Pausa para té y café",
        tag: "Descanso",
        description: "Pausa de té y café antes de las sesiones temáticas.",
        meta: ["Break"],
      },
      {
        time: "11:00",
        title: "Sesiones temáticas por grupos",
        tag: "Conferencia",
        description: "Session 5: introductions y grupos sobre eye health, muscles, fertility y ketogenic diet.",
        meta: ["Breakout sessions"],
      },
      {
        time: "12:00",
        title: "Pausa para comer",
        tag: "Comida",
        description: "Pausa general para comer.",
        meta: ["Lunch"],
      },
      {
        time: "12:00",
        title: "Comida para adultos con cistinosis y parejas",
        tag: "Comida",
        tagTone: "pending",
        audience: "Adultos",
        description: "Comida para adultos con cistinosis y parejas.",
        meta: ["Closed"],
      },
      {
        time: "13:00",
        title: "Actualizaciones internacionales",
        tag: "Conferencia",
        tagTone: "important",
        description: "Session 6: clinical guideline implementation update, experience of multi disciplinary clinics, AI tools for people with cystinosis y panel Q&A.",
        meta: ["Session 6", "Panel Q&A"],
      },
      {
        time: "15:00",
        title: "Pausa para té y café / Sesión de pósters",
        tag: "Descanso",
        description: "Pausa de té y café junto con sesión de pósters.",
        meta: ["Posters"],
      },
      {
        time: "15:30",
        title: "Prioridades de investigación en cistinosis",
        tag: "Conferencia",
        description: "Developing research priorities in Cystinosis research and care.",
        meta: ["Research priorities"],
      },
      {
        time: "16:45",
        title: "Cierre y ganadores de premios",
        tag: "Cierre",
        description: "Comentarios de cierre y anuncio de ganadores de premios.",
        meta: ["Conference close"],
      },
    ],
  },
  {
    id: "2026-07-05",
    number: "5",
    weekday: "Domingo",
    month: "Julio",
    title: "Domingo tranquilo en Dublín",
    subtitle: "GoQuest por la mañana, vuelta al Royal Marine y cambio al Hampton",
    image: {
      src: "Imagenes/domingo5.png",
      alt: "Imagen de cabecera del domingo en Dublín",
    },
    color: "#e0e7ff",
    keyInfo: [
      ["Desayuno", "09:00 en Royal Marine Hotel"],
      ["GoQuest", "11:30, actividad de 1 h 45 min"],
      ["Nuevo hotel", "Hampton by Hilton Dublin City Centre, zona Four Courts"],
      ["Plan", "Volver al Royal Marine sobre las 14:30, comer algo flexible y luego ir al Hampton"],
    ],
    notes: [
      "Royal Marine sirve desayuno los domingos de 08:00 a 11:00.",
      "GoQuest está previsto a las 11:30 y la actividad dura 1 hora y 45 minutos.",
      "Dejar el free tour fuera del plan: con GoQuest, comida, vuelta al Royal Marine y cambio de hotel no da tiempo sin ir con prisa.",
      "Preparar las maletas antes de salir a GoQuest para que al volver al Royal Marine solo quede recogerlas e ir hacia el Hampton.",
      "La comida queda flexible al volver al Royal Marine: buscar algo por la zona según hambre, cansancio y horario.",
      "Confirmar hora real de check-in del Hampton by Hilton; llegada estimada sobre las 17:30-18:30 según cuánto se alargue la comida.",
    ],
    events: [
      {
        time: "09:00",
        title: "Desayuno en Royal Marine Hotel",
        tag: "Comida",
        description: "Desayuno tranquilo antes de cerrar maletas. El horario encaja bien con el servicio dominical del hotel.",
        meta: ["Hotel", "Sin prisa"],
      },
      {
        time: "10:15",
        title: "Preparar maletas antes de salir",
        tag: "Hotel",
        description: "Dejar las maletas cerradas o casi listas en el Royal Marine para poder volver de GoQuest, recogerlas y salir hacia el Hampton sin tener que rehacer el equipaje.",
        meta: ["Royal Marine", "Antes de GoQuest"],
      },
      {
        time: "10:45",
        title: "Traslado a GoQuest Arena",
        tag: "Traslado",
        description: "Salir con margen desde Royal Marine Hotel hacia GoQuest Arena para llegar antes de la reserva de las 11:30. Revisar esa mañana si compensa taxi o transporte público según tiempo y energía.",
        meta: ["Royal Marine -> GoQuest", "Llegar antes de las 11:30"],
        links: [
          {
            label: "Ruta a GoQuest",
            href: "https://www.google.com/maps/dir/?api=1&origin=Royal%20Marine%20Hotel%20Dun%20Laoghaire&destination=GoQuest%20Arena%20Dublin&travelmode=driving",
          },
          {
            label: "Ver GoQuest",
            href: "https://www.google.com/maps/search/?api=1&query=GoQuest%20Arena%20Dublin",
          },
        ],
      },
      {
        time: "11:30",
        title: "GoQuest Arena",
        tag: "Actividad",
        tagTone: "important",
        description: "Actividad de GoQuest Arena con reserva a las 11:30. La duración prevista es de 1 hora y 45 minutos, terminando alrededor de las 13:15.",
        meta: ["Reserva: 11:30", "GoQuest Arena", "Duración: 1 h 45 min"],
        links: [
          {
            label: "GoQuest",
            href: "https://www.google.com/maps/search/?api=1&query=GoQuest%20Arena%20Dublin",
          },
        ],
      },
      {
        time: "13:15",
        title: "Vuelta al Royal Marine Hotel",
        tag: "Traslado",
        description: "Al terminar GoQuest, volver directamente al Royal Marine Hotel. La idea es estar de vuelta sobre las 14:30.",
        meta: ["GoQuest -> Royal Marine", "Llegada objetivo: 14:30"],
        links: [
          {
            label: "Ruta de vuelta",
            href: "https://www.google.com/maps/dir/?api=1&origin=GoQuest%20Arena%20Dublin&destination=Royal%20Marine%20Hotel%20Dun%20Laoghaire&travelmode=driving",
          },
        ],
      },
      {
        time: "14:30",
        title: "Royal Marine, comida flexible y maletas",
        tag: "Comida",
        description: "Llegar al Royal Marine, buscar algo para comer por la zona según apetezca y recoger el equipaje antes de cambiar de hotel.",
        meta: ["Royal Marine", "Comida improvisada", "Recoger maletas"],
        links: [
          {
            label: "Comer cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Royal%20Marine%20Hotel%20Dun%20Laoghaire",
          },
        ],
      },
      {
        time: "16:30",
        title: "Traslado al Hampton by Hilton",
        tag: "Traslado",
        description: "Salir desde Royal Marine hacia Hampton by Hilton cuando estén la comida y las maletas resueltas. Ruta en tres pasos: primero coger el DART en Dún Laoghaire (Mallin) hasta Dublin Connolly. Después tomar el Luas Red Line desde Connolly hasta Four Courts. Por último, caminar unos minutos hasta Hampton by Hilton Dublin City Centre. Si hay cansancio o equipaje incómodo, valorar taxi.",
        meta: ["1. DART: Dún Laoghaire -> Connolly", "2. Luas: Connolly -> Four Courts", "3. Andando: Four Courts -> Hampton", "Total aprox. 55-75 min"],
        links: [
          {
            label: "Irish Rail",
            href: "https://www.irishrail.ie/",
          },
          {
            label: "Info DART",
            href: "https://www.irishrail.ie/en-IE/rail-fares-and-tickets/fares-info/dart-and-short-hop-zone",
          },
          {
            label: "TFI Leap Card",
            href: "https://about.leapcard.ie/about/fares-discounts",
          },
          {
            label: "DART a Connolly",
            href: "https://www.google.com/maps/dir/?api=1&origin=D%C3%BAn%20Laoghaire%20(Mallin)%20Station&destination=Dublin%20Connolly%20Station&travelmode=transit",
          },
          {
            label: "Luas a Four Courts",
            href: "https://www.google.com/maps/dir/?api=1&origin=Dublin%20Connolly%20Station&destination=Four%20Courts%20Luas%20Stop&travelmode=transit",
          },
          {
            label: "Andando al hotel",
            href: "https://www.google.com/maps/dir/?api=1&origin=Four%20Courts%20Luas%20Stop&destination=Hampton%20by%20Hilton%20Dublin%20City%20Centre&travelmode=walking",
          },
          {
            label: "Trayecto completo",
            href: "https://www.google.com/maps/dir/?api=1&origin=Royal%20Marine%20Hotel%20Dun%20Laoghaire&destination=Hampton%20by%20Hilton%20Dublin%20City%20Centre&travelmode=transit",
          },
        ],
      },
      {
        time: "18:15",
        title: "Llegada al Hampton by Hilton",
        tag: "Hotel",
        description: "Hacer check-in, dejar maletas y bajar el ritmo. Después de GoQuest y el cambio de hotel, mejor no encajar el free tour este día.",
        meta: ["Four Courts", "Dublin 7"],
        links: [
          {
            label: "Ver hotel",
            href: "https://www.google.com/maps/search/?api=1&query=Hampton%20by%20Hilton%20Dublin%20City%20Centre",
          },
        ],
      },
      {
        time: "19:30",
        title: "Cena cerca del Hampton by Hilton",
        tag: "Cena",
        description: "Cena cómoda cerca del hotel. Mantener la noche suave y dejar el centro de Dublín para el lunes, con más energía.",
        meta: ["19:30-20:30", "Four Courts / Smithfield"],
        links: [
          {
            label: "Opciones cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Hampton%20by%20Hilton%20Dublin%20City%20Centre",
          },
        ],
      },
      {
        time: "21:00",
        title: "Noche libre o música cerca del hotel",
        tag: "Noche",
        description: "Plan ligero: pub cercano, música en el hotel o descanso.",
        meta: ["Flexible", "Sin presión"],
      },
    ],
  },
  {
    id: "2026-07-06",
    number: "6",
    weekday: "Lunes",
    month: "Julio",
    title: "Historia de Dublín",
    subtitle: "Book of Kells, Christ Church, St Patrick, Guinness y Dublín histórico",
    image: {
      src: "Imagenes/Lunes6.png",
      alt: "Imagen de cabecera del lunes en Dublín",
    },
    color: "#ccfbf1",
    keyInfo: [
      ["Plan fuerte", "Book of Kells + Christ Church/Temple Bar + Dublin Castle + St Patrick + Guinness"],
      ["Desayuno", "Incluido en Hampton by Hilton"],
      ["Comida", "13:00 aprox., zona Temple Bar/Dame Street"],
      ["Cena", "19:30-20:00 cerca de Guinness o del hotel"],
    ],
    notes: [
      "Reservar Book of Kells, St Patrick y Guinness con hora concreta.",
      "Desayuno incluido en Hampton by Hilton; no hace falta buscar cafetería por la mañana.",
      "Kilmainham Gaol pasa al miércoles por la mañana.",
      "St Patrick queda reservado a las 15:15; desde allí el traslado natural es hacia Guinness Storehouse.",
      "Dublin Castle queda incluido como parada exterior/histórica; el interior y el campus pueden estar cerrados por la Presidencia de la UE.",
      "Dublinia queda solo como extra opcional si sobra tiempo; no forma parte del plan principal.",
    ],
    events: [
      {
        time: "08:30",
        title: "Desayuno incluido en Hampton by Hilton",
        tag: "Comida",
        description: "Desayunar en el hotel antes de salir hacia Book of Kells. Conviene hacerlo temprano para aprovechar el día fuerte de Dublín.",
        meta: ["Incluido", "Hampton by Hilton", "Día intenso"],
      },
      {
        time: "09:30",
        title: "Experiencia Book of Kells",
        tag: "Entrada",
        tagTone: "important",
        description: "Visita a Trinity College, Book of Kells y Old Library Experience. Reservar entrada con hora; duración recomendada: unos 90 minutos.",
        meta: ["De pago", "Reserva horaria", "90 min"],
        links: [
          {
            label: "Reservar",
            href: "https://www.visittrinity.ie/book-of-kells-experience/",
          },
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=Book%20of%20Kells%20Experience%20Trinity%20College%20Dublin&travelmode=transit",
          },
        ],
      },
      {
        time: "11:15",
        title: "Paseo hacia Christ Church",
        tag: "Paseo",
        description: "Salir de Trinity hacia Christ Church por Dame Street. Son unos 15 minutos a pie y tiene más sentido hacer primero esta zona histórica antes de bajar a St Patrick.",
        meta: ["Trinity -> Christ Church", "15 min a pie"],
        links: [
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Trinity%20College%20Dublin&destination=Christ%20Church%20Cathedral%20Dublin&travelmode=walking",
          },
        ],
      },
      {
        time: "11:35",
        title: "Christ Church y entorno de Dublinia",
        tag: "Parada",
        description: "Ver Christ Church por fuera o entrar si apetece una visita corta. Dublinia queda al lado, pero sigue siendo opcional y prescindible.",
        meta: ["Flexible", "Junto a Dublinia"],
        links: [
          {
            label: "Christ Church",
            href: "https://christchurchcathedral.ie/visiting/",
          },
        ],
      },
      {
        time: "12:15",
        title: "Temple Bar, Dame Street y el Liffey",
        tag: "Paseo",
        description: "Paseo por Temple Bar y el centro histórico sin cruzar todavía hacia St Patrick. Buen tramo para fotos, ambiente y margen antes de comer.",
        meta: ["Flexible", "Centro histórico"],
        links: [
          {
            label: "Temple Bar",
            href: "https://www.google.com/maps/search/?api=1&query=Temple%20Bar%20Dublin",
          },
          {
            label: "Dame Street",
            href: "https://www.google.com/maps/search/?api=1&query=Dame%20Street%20Dublin",
          },
        ],
      },
      {
        time: "13:00",
        title: "Comida en Temple Bar o Dame Street",
        tag: "Comida",
        description: "Comida sobre las 13:00-14:00 en Temple Bar, Dame Street o alrededores de Dublin Castle. Así queda una tarde ordenada antes de St Patrick a las 15:15.",
        meta: ["Horario local", "Zona céntrica"],
        links: [
          {
            label: "Restaurantes cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Temple%20Bar%20Dublin",
          },
        ],
      },
      {
        time: "14:15",
        title: "Dublin Castle por fuera",
        tag: "Parada",
        description: "Parada para situar Dublin Castle en la guía y verlo desde la zona de Dame Street/Castle Street si el perímetro lo permite. En julio de 2026 no conviene contar con visita interior.",
        meta: ["Exterior", "Centro histórico"],
        links: [
          {
            label: "Web oficial",
            href: "https://dublincastle.ie/",
          },
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Temple%20Bar%20Dublin&destination=Dublin%20Castle&travelmode=walking",
          },
        ],
      },
      {
        time: "14:50",
        title: "Traslado a St Patrick",
        tag: "Traslado",
        description: "Bajar desde Dublin Castle hacia St Patrick con margen para la entrada de las 15:15.",
        meta: ["Dublin Castle -> St Patrick", "15-20 min a pie"],
        links: [
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Dublin%20Castle&destination=St%20Patrick's%20Cathedral%20Dublin&travelmode=walking",
          },
        ],
      },
      {
        time: "15:15",
        title: "Catedral de St Patrick por dentro",
        tag: "Entrada",
        tagTone: "important",
        description: "Visita interior a la catedral nacional de Irlanda. Hora fijada a las 15:15; desde aquí ya queda muy natural continuar hacia Guinness Storehouse.",
        meta: ["De pago", "Reserva 15:15", "45-60 min"],
        links: [
          {
            label: "Entradas",
            href: "https://www.stpatrickscathedral.ie/visit/",
          },
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/search/?api=1&query=St%20Patrick's%20Cathedral%20Dublin",
          },
        ],
      },
      {
        time: "16:20",
        title: "Traslado a Guinness Storehouse",
        tag: "Traslado",
        description: "Ir desde St Patrick hacia Guinness Storehouse para la visita de tarde. Reservar una hora realista a partir de las 17:00.",
        meta: ["St Patrick -> Guinness", "Llegar con margen"],
        links: [
          {
            label: "Cómo ir",
            href: "https://www.google.com/maps/dir/?api=1&origin=St%20Patrick's%20Cathedral%20Dublin&destination=Guinness%20Storehouse&travelmode=walking",
          },
        ],
      },
      {
        time: "17:00",
        title: "Guinness Storehouse",
        tag: "Entrada",
        tagTone: "important",
        description: "Visita a Guinness Storehouse y Gravity Bar. Reservar hora de tarde; duración recomendada 90-120 minutos.",
        meta: ["De pago", "90-120 min"],
        links: [
          {
            label: "Reservar",
            href: "https://www.guinness-storehouse.com/en/booking",
          },
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/search/?api=1&query=Guinness%20Storehouse%20Dublin",
          },
        ],
      },
      {
        time: "19:30",
        title: "Cena en The Liberties o cerca del hotel",
        tag: "Cena",
        description: "Cena sobre las 19:30-20:30. Puedes cenar cerca de Guinness o volver hacia Four Courts/Smithfield.",
        meta: ["19:30-20:30", "Flexible"],
        links: [
          {
            label: "Opciones cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Guinness%20Storehouse%20Dublin",
          },
        ],
      },
      {
        time: "20:45",
        title: "Noche suave o música en directo",
        tag: "Noche",
        description: "Plan ligero: música en el hotel o pub cercano. Mejor no cruzar media ciudad después de dos días intensos.",
        meta: ["Flexible", "Sin reserva fija"],
      },
      {
        time: "Extra",
        title: "Dublinia si sobra tiempo",
        tag: "Opcional",
        description: "Museo vikingo y medieval junto a Christ Church. Lo dejo solo como opción secundaria si al final te apetece y encaja con horarios; no pasa nada por saltarlo.",
        meta: ["Opcional", "Muy prescindible", "Junto a Christ Church"],
        links: [
          {
            label: "Web/entradas",
            href: "https://www.dublinia.ie/prices-and-tickets/",
          },
          {
            label: "Ubicación",
            href: "https://www.google.com/maps/search/?api=1&query=Dublinia",
          },
        ],
      },
    ],
  },
  {
    id: "2026-07-07",
    number: "7",
    weekday: "Martes",
    month: "Julio",
    title: "Kilkenny o día libre en Dublín",
    subtitle: "Excursión provisional a Kilkenny, saliendo de Dublín a las 09:30 y volviendo por la tarde-noche",
    image: {
      src: "Imagenes/Martes7.png",
      alt: "Imagen de cabecera del martes de excursión fuera de Dublín",
    },
    color: "#fce7f3",
    keyInfo: [
      ["Estado", "Plan provisional"],
      ["Excursión", "Kilkenny, salida de Dublín a las 09:30 y salida de Kilkenny sobre las 19:00"],
      ["Plan B", "Si no hay excursión, dejar el día libre por Dublín"],
      ["Hotel", "Salida y regreso desde Hampton by Hilton"],
    ],
    notes: [
      "Kilkenny queda como primera opción para una excursión de día completo, saliendo de Dublín a las 09:30 y saliendo de Kilkenny sobre las 19:00.",
      "Confirmar si la excursión será organizada o por cuenta propia en tren/bus antes de fijar punto de salida y billetes.",
      "Al volver más tarde desde Kilkenny, queda más margen para hacer cosas allí sin ir con prisa.",
      "Si al final no hay excursión, convertir este martes en día libre por Dublín sin reservas fuertes.",
      "No cargar este día con visitas imprescindibles de Dublín hasta saber si Kilkenny queda confirmado.",
    ],
    events: [
      {
        time: "08:30",
        title: "Desayuno en Hampton by Hilton",
        tag: "Comida",
        description: "Desayunar en el hotel y salir con margen para llegar al punto de salida de la excursión.",
        meta: ["Incluido", "Hampton by Hilton", "Antes de salir"],
      },
      {
        time: "09:30",
        title: "Salida de Dublín hacia Kilkenny",
        tag: "Excursión",
        tagTone: "important",
        description: "Salida provisional desde Dublín hacia Kilkenny. Falta decidir si será excursión organizada o traslado por cuenta propia.",
        meta: ["Salida 09:30", "Dublín -> Kilkenny", "Confirmar punto de salida"],
        links: [
          {
            label: "Ruta a Kilkenny",
            href: "https://www.google.com/maps/dir/?api=1&origin=Dublin%20City%20Centre&destination=Kilkenny%20Ireland&travelmode=transit",
          },
        ],
      },
      {
        time: "11:30",
        title: "Llegada a Kilkenny",
        tag: "Llegada",
        description: "Llegada estimada a Kilkenny y primer paseo por el centro para orientarse.",
        meta: ["Kilkenny", "Horario aproximado"],
        links: [
          {
            label: "Centro de Kilkenny",
            href: "https://www.google.com/maps/search/?api=1&query=Kilkenny%20city%20centre",
          },
        ],
      },
      {
        time: "12:00",
        title: "Kilkenny Castle y centro histórico",
        tag: "Visita",
        tagTone: "important",
        description: "Visita principal del día: Kilkenny Castle y paseo por el centro histórico, manteniendo el ritmo flexible según la excursión elegida.",
        meta: ["Castillo", "Centro histórico", "Flexible"],
        links: [
          {
            label: "Kilkenny Castle",
            href: "https://www.google.com/maps/search/?api=1&query=Kilkenny%20Castle",
          },
        ],
      },
      {
        time: "13:30",
        title: "Comida en Kilkenny",
        tag: "Comida",
        description: "Comer en el centro de Kilkenny sin apurar demasiado, dejando margen para pasear por la tarde.",
        meta: ["Centro", "Horario flexible"],
        links: [
          {
            label: "Restaurantes cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Kilkenny%20Castle",
          },
        ],
      },
      {
        time: "15:00",
        title: "Paseo por Medieval Mile",
        tag: "Paseo",
        description: "Tramo de tarde para recorrer Medieval Mile, calles del centro y acercarse a St Canice's Cathedral con más calma.",
        meta: ["Medieval Mile", "St Canice opcional", "Fotos y paseo"],
        links: [
          {
            label: "Medieval Mile",
            href: "https://www.google.com/maps/search/?api=1&query=Medieval%20Mile%20Kilkenny",
          },
          {
            label: "St Canice",
            href: "https://www.google.com/maps/search/?api=1&query=St%20Canice's%20Cathedral%20Kilkenny",
          },
        ],
      },
      {
        time: "17:00",
        title: "Tarde libre en Kilkenny",
        tag: "Libre",
        description: "Tiempo extra para seguir viendo Kilkenny: tiendas, paseo tranquilo, café, alguna visita pendiente o simplemente disfrutar el centro sin correr.",
        meta: ["Kilkenny", "Tarde flexible", "Sin prisa"],
      },
      {
        time: "19:00",
        title: "Regreso hacia Dublín",
        tag: "Traslado",
        tagTone: "important",
        description: "Inicio del regreso desde Kilkenny sobre las 19:00 para aprovechar más la tarde allí.",
        meta: ["Salida de Kilkenny: 19:00", "Kilkenny -> Dublín"],
        links: [
          {
            label: "Ruta de vuelta",
            href: "https://www.google.com/maps/dir/?api=1&origin=Kilkenny%20Ireland&destination=Hampton%20by%20Hilton%20Dublin%20City%20Centre&travelmode=transit",
          },
        ],
      },
      {
        time: "21:00",
        title: "Llegada a Dublín",
        tag: "Llegada",
        description: "Llegada estimada a Dublín. Dejar la noche simple: cena cerca del hotel o descanso.",
        meta: ["Regreso", "Cena sencilla", "Descanso"],
      },
      {
        time: "Plan B",
        title: "Día libre por Dublín si no hay excursión",
        tag: "Opcional",
        description: "Si Kilkenny no se confirma, usar el martes como día libre por Dublín: paseos, compras, pubs, museos pendientes o descanso sin reservas rígidas.",
        meta: ["Alternativa", "Sin excursión", "Dublín tranquilo"],
      },
    ],
  },
  {
    id: "2026-07-08",
    number: "8",
    weekday: "Miércoles",
    month: "Julio",
    title: "Regreso",
    subtitle: "Salida al aeropuerto, sala VIP y vuelo de vuelta",
    image: {
      src: "Imagenes/Miercoles8.png",
      alt: "Imagen de cabecera del miércoles de regreso",
    },
    color: "#fef3c7",
    keyInfo: [
      ["Vuelo", "Salida de Dublín a las 20:55 hora local"],
      ["Mañana", "Paseo corto por O'Connell y checkout"],
      ["Desayuno", "Incluido en Hampton by Hilton"],
      ["Guinness", "Entrada a las 12:30"],
      ["Aeropuerto", "Llegar sobre las 18:00 para usar la sala VIP"],
      ["Hotel", "Salida desde Hampton by Hilton"],
    ],
    notes: [
      "Aunque con el vuelo a las 20:55 bastaría con estar en el aeropuerto sobre las 18:55, conviene llegar hacia las 18:00 para cenar tranquilo en la sala VIP.",
      "Plan de mañana sin alejarse: O'Connell Street, GPO por fuera, Garden of Remembrance y regreso al hotel para checkout.",
      "Confirmar terminal, compañía y puerta cuando esté disponible.",
      "Dejar margen para tráfico, control de seguridad y posible facturación.",
    ],
    events: [
      {
        time: "09:00",
        title: "Desayuno incluido",
        tag: "Comida",
        description: "Desayunar en el hotel igual que estaba previsto y dejar las maletas prácticamente listas antes de salir a dar una vuelta corta.",
        meta: ["Incluido", "Hampton by Hilton", "Preparar maletas"],
      },
      {
        time: "09:30",
        title: "Mini paseo por O'Connell",
        tag: "Paseo",
        description: "Paseo cercano y sin cargar el día: subir hacia O'Connell Street, ver el GPO por fuera, pasar por Garden of Remembrance y volver con calma por Henry Street/Jervis hacia el hotel.",
        meta: ["O'Connell", "GPO por fuera", "Garden of Remembrance"],
        links: [
          {
            label: "Ruta del paseo",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=O'Connell%20Street%20Upper%2C%20Dublin&waypoints=GPO%20Museum%20Dublin%7CGarden%20of%20Remembrance%20Dublin%7CJervis%20Shopping%20Centre%20Dublin&travelmode=walking",
          },
        ],
      },
      {
        time: "11:00",
        title: "Vuelta al hotel",
        tag: "Hotel",
        description: "Regresar al Hampton by Hilton para recoger lo que falte, cerrar maletas y dejar todo listo para hacer checkout sin prisas.",
        meta: ["Hampton by Hilton", "Recoger y cerrar maletas"],
        links: [
          {
            label: "Volver al hotel",
            href: "https://www.google.com/maps/dir/?api=1&origin=Garden%20of%20Remembrance%20Dublin&destination=Hampton%20by%20Hilton%20Dublin%20City%20Centre&travelmode=walking",
          },
        ],
      },
      {
        time: "11:45",
        title: "Checkout",
        tag: "Hotel",
        tagTone: "important",
        description: "Hacer checkout y dejar las maletas en recepción para ir a Guinness Storehouse solo con lo necesario.",
        meta: ["Checkout", "Dejar maletas en recepción"],
      },
      {
        time: "12:00",
        title: "Camino a Guinness Storehouse",
        tag: "Traslado",
        description: "Salir hacia Guinness Storehouse con margen para llegar a la entrada de las 12:30.",
        meta: ["Hampton -> Guinness", "Llegar con margen"],
        links: [
          {
            label: "Ruta a Guinness",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=Guinness%20Storehouse&travelmode=transit",
          },
        ],
      },
      {
        time: "12:30",
        title: "Guinness Storehouse",
        tag: "Entrada",
        tagTone: "important",
        description: "Entrada reservada a Guinness Storehouse. Calcular unas dos horas para la visita y Gravity Bar, manteniendo la vuelta al hotel sobre las 14:30.",
        meta: ["Entrada 12:30", "90-120 min", "Gravity Bar"],
        links: [
          {
            label: "Ver Guinness",
            href: "https://www.google.com/maps/search/?api=1&query=Guinness%20Storehouse%20Dublin",
          },
        ],
      },
      {
        time: "14:30",
        title: "Vuelta al hotel y comida en KFC",
        tag: "Comida",
        description: "Volver hacia la zona del Hampton by Hilton y comer en un KFC cercano, manteniendo el plan práctico antes de recoger maletas.",
        meta: ["Guinness -> hotel", "KFC cercano", "Comida rápida"],
        links: [
          {
            label: "KFC cercano",
            href: "https://www.google.com/maps/search/?api=1&query=KFC%20near%20Hampton%20by%20Hilton%20Dublin%20City%20Centre",
          },
        ],
      },
      {
        time: "16:00",
        title: "Recoger equipaje en Hampton by Hilton",
        tag: "Hotel",
        description: "Volver al hotel, recoger maletas y preparar documentación, móvil cargado y billete de avión antes de salir hacia el aeropuerto.",
        meta: ["Hampton by Hilton", "Maletas", "Antes del traslado"],
      },
      {
        time: "16:30-17:00",
        title: "Salida hacia Dublin Airport",
        tag: "Traslado",
        tagTone: "important",
        description: "Salir desde Hampton by Hilton hacia Dublin Airport entre las 16:30 y las 17:00 para llegar sobre las 18:00. Revisar la ruta en Maps ese mismo día y elegir bus/taxi según tráfico y equipaje.",
        meta: ["Hampton by Hilton -> Dublin Airport", "Llegada objetivo: 18:00", "Vuelo: 20:55"],
        links: [
          {
            label: "Ruta al aeropuerto",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=Dublin%20Airport&travelmode=transit",
          },
          {
            label: "Taxi/ruta en coche",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=Dublin%20Airport&travelmode=driving",
          },
        ],
      },
      {
        time: "18:00",
        title: "Sala VIP y cena en el aeropuerto",
        tag: "Cena",
        description: "Llegar con margen, pasar seguridad y aprovechar la sala VIP para cenar sobre las 18:00-18:30.",
        meta: ["Sala VIP", "Cena temprana", "Aeropuerto"],
      },
      {
        time: "20:55",
        title: "Vuelo de vuelta",
        tag: "Vuelo",
        tagTone: "important",
        description: "Salida prevista desde Dublín a las 20:55 hora local.",
        meta: ["Hora de Dublín", "Confirmar puerta"],
      },
    ],
  },
];

const elements = {
  dayStrip: document.querySelector("#dayStrip"),
  dayVisual: document.querySelector("#dayVisual"),
  timeline: document.querySelector("#timeline"),
  eventCount: document.querySelector("#eventCount"),
  keyInfo: document.querySelector("#keyInfo"),
  notes: document.querySelector("#notes"),
};

let selectedDayId = window.location.hash.replace("#", "") || days[0].id;

function renderDayTabs() {
  elements.dayStrip.innerHTML = days
    .map(
      (day) => `
        <button class="day-tab" type="button" data-day="${day.id}" aria-selected="${day.id === selectedDayId}">
          <span>${day.weekday} ${day.number}</span>
        </button>
      `,
    )
    .join("");

  elements.dayStrip.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDayId = button.dataset.day;
      window.location.hash = selectedDayId;
      render();
      button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });
}

function renderDayVisual(day) {
  const dateLabel = `${day.weekday} ${day.number} de ${day.month.toLowerCase()}`;

  if (day.image) {
    elements.dayVisual.innerHTML = `
      <div class="day-visual-card">
        <img class="day-photo" src="${day.image.src}" alt="${day.image.alt}" />
        <div class="day-visual-overlay">
          <h2>${dateLabel}</h2>
          <p>${day.subtitle}</p>
        </div>
      </div>
    `;
    elements.dayVisual.style.setProperty("--day-color", day.color);
    return;
  }

  elements.dayVisual.innerHTML = `
    <div class="day-visual-card day-placeholder">
      <div class="day-visual-overlay">
        <h2>${dateLabel}</h2>
        <p>${day.subtitle}</p>
      </div>
    </div>
  `;
  elements.dayVisual.style.setProperty("--day-color", day.color);
}

function renderTimeline(day) {
  elements.eventCount.textContent =
    day.events.length === 1 ? "1 evento" : `${day.events.length} eventos`;

  if (!day.events.length) {
    elements.timeline.innerHTML = `
      <li class="empty-state">
        Aún no hay actividades para este día. Se podrán añadir horarios, rutas, reservas y notas.
      </li>
    `;
    return;
  }

  elements.timeline.innerHTML = day.events
    .map(
      (event) => `
        <li class="timeline-item ${event.audience === "Adultos" ? "adult-event" : ""}">
          <time class="time-block">${event.time}</time>
          <article class="event-card">
            <div class="event-topline">
              <h4 class="event-title">${event.title}</h4>
              <span class="tag ${event.tagTone || ""}">${event.tag}</span>
              ${event.audience ? `<span class="tag adult">${event.audience}</span>` : ""}
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-meta">
              ${event.meta.map((item) => `<span class="meta-pill">${item}</span>`).join("")}
            </div>
            ${
              event.links?.length
                ? `
                  <div class="event-links">
                    ${event.links
                      .map(
                        (link) => `
                          <a class="event-link" href="${link.href}" target="_blank" rel="noreferrer">
                            ${link.label}
                          </a>
                        `,
                      )
                      .join("")}
                  </div>
                `
                : ""
            }
          </article>
        </li>
      `,
    )
    .join("");
}

function renderKeyInfo(day) {
  elements.keyInfo.innerHTML = day.keyInfo
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `,
    )
    .join("");
}

function renderNotes(day) {
  elements.notes.innerHTML = day.notes.map((note) => `<li>${note}</li>`).join("");
}

function render() {
  const day = days.find((item) => item.id === selectedDayId) || days[0];
  selectedDayId = day.id;

  renderDayTabs();
  renderDayVisual(day);
  renderTimeline(day);
  renderKeyInfo(day);
  renderNotes(day);
}

window.addEventListener("hashchange", () => {
  selectedDayId = window.location.hash.replace("#", "") || days[0].id;
  render();
});

render();
