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
      ["Excursión", "11:30 en GoQuest Arena"],
      ["Nuevo hotel", "Hampton by Hilton Dublin City Centre, zona Four Courts"],
      ["Plan", "Comer en GoQuest y trasladarse al Hampton sobre las 17:00"],
    ],
    notes: [
      "Royal Marine sirve desayuno los domingos de 08:00 a 11:00.",
      "Confirmar hora exacta, dirección y duración de la reserva de GoQuest Arena.",
      "Dejar el free tour fuera del plan: con GoQuest, comida, vuelta al Royal Marine y cambio de hotel no da tiempo sin ir con prisa.",
      "Preparar las maletas antes de salir a GoQuest para que al volver al Royal Marine solo quede recogerlas e ir hacia el Hampton.",
      "Confirmar hora real de check-in del Hampton by Hilton; llegada estimada sobre las 18:00-18:30 si se sale del Royal Marine a las 17:00.",
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
        description: "Excursión a GoQuest para hacer la actividad de Arena. Mantener el bloque amplio porque entre llegada, actividad y salida se irá buena parte del mediodía.",
        meta: ["Reserva: 11:30", "GoQuest Arena", "Confirmar duración"],
        links: [
          {
            label: "GoQuest",
            href: "https://www.google.com/maps/search/?api=1&query=GoQuest%20Arena%20Dublin",
          },
        ],
      },
      {
        time: "13:30",
        title: "Comida en GoQuest o cerca",
        tag: "Comida",
        description: "Comer allí o en la zona, sin forzar volver todavía al centro. Este bloque sustituye la comida que antes estaba prevista cerca de Four Courts.",
        meta: ["Comida allí", "Horario flexible"],
        links: [
          {
            label: "Comer cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20GoQuest%20Arena%20Dublin",
          },
        ],
      },
      {
        time: "15:30",
        title: "Vuelta al Royal Marine Hotel",
        tag: "Traslado",
        description: "Volver al Royal Marine después de comer para recoger las maletas y hacer el cambio de hotel con calma.",
        meta: ["GoQuest -> Royal Marine", "Recoger maletas"],
        links: [
          {
            label: "Ruta de vuelta",
            href: "https://www.google.com/maps/dir/?api=1&origin=GoQuest%20Arena%20Dublin&destination=Royal%20Marine%20Hotel%20Dun%20Laoghaire&travelmode=driving",
          },
        ],
      },
      {
        time: "16:15",
        title: "Recoger maletas en Royal Marine",
        tag: "Hotel",
        description: "Recoger equipaje, revisar que no queda nada pendiente y preparar el traslado al Hampton by Hilton.",
        meta: ["Royal Marine", "Salida hacia el centro"],
      },
      {
        time: "17:00",
        title: "Traslado al Hampton by Hilton",
        tag: "Traslado",
        description: "Salir desde Royal Marine hacia Hampton by Hilton sobre las 17:00. Ruta en tres pasos: primero coger el DART en Dún Laoghaire (Mallin) hasta Dublin Connolly. Después tomar el Luas Red Line desde Connolly hasta Four Courts. Por último, caminar unos minutos hasta Hampton by Hilton Dublin City Centre. Si hay cansancio o equipaje incómodo, valorar taxi.",
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
      ["Comida", "13:15 aprox., zona Temple Bar/Dame Street"],
      ["Cena", "20:00 aprox., cerca de Guinness o del hotel"],
    ],
    notes: [
      "Reservar Book of Kells, St Patrick y Guinness con hora concreta.",
      "Desayuno incluido en Hampton by Hilton; no hace falta buscar cafetería por la mañana.",
      "Kilmainham Gaol pasa al miércoles por la mañana.",
      "St Patrick queda reservado a las 15:30; desde allí el traslado natural es hacia Guinness Storehouse.",
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
        description: "Salir de Trinity hacia Christ Church por Dame Street. Tiene más sentido hacer primero esta zona histórica antes de bajar a St Patrick.",
        meta: ["Trinity -> Christ Church", "20-25 min a pie"],
        links: [
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Trinity%20College%20Dublin&destination=Christ%20Church%20Cathedral%20Dublin&travelmode=walking",
          },
        ],
      },
      {
        time: "11:45",
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
        time: "12:30",
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
        time: "13:15",
        title: "Comida en Temple Bar o Dame Street",
        tag: "Comida",
        description: "Comida sobre las 13:15-14:15 en Temple Bar, Dame Street o alrededores de Dublin Castle. Así queda una tarde ordenada antes de St Patrick a las 15:30.",
        meta: ["Horario local", "Zona céntrica"],
        links: [
          {
            label: "Restaurantes cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Temple%20Bar%20Dublin",
          },
        ],
      },
      {
        time: "14:30",
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
        time: "15:10",
        title: "Traslado a St Patrick",
        tag: "Traslado",
        description: "Bajar desde Dublin Castle hacia St Patrick con margen para la entrada de las 15:30.",
        meta: ["Dublin Castle -> St Patrick", "15-20 min a pie"],
        links: [
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/dir/?api=1&origin=Dublin%20Castle&destination=St%20Patrick's%20Cathedral%20Dublin&travelmode=walking",
          },
        ],
      },
      {
        time: "15:30",
        title: "Catedral de St Patrick por dentro",
        tag: "Entrada",
        tagTone: "important",
        description: "Visita interior a la catedral nacional de Irlanda. Hora fijada a las 15:30; desde aquí ya queda muy natural continuar hacia Guinness Storehouse.",
        meta: ["De pago", "Reserva 15:30", "45-60 min"],
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
        time: "16:35",
        title: "Traslado a Guinness Storehouse",
        tag: "Traslado",
        description: "Ir desde St Patrick hacia Guinness Storehouse para la visita de tarde. Reservar una hora realista a partir de las 17:15.",
        meta: ["St Patrick -> Guinness", "Llegar con margen"],
        links: [
          {
            label: "Cómo ir",
            href: "https://www.google.com/maps/dir/?api=1&origin=St%20Patrick's%20Cathedral%20Dublin&destination=Guinness%20Storehouse&travelmode=walking",
          },
        ],
      },
      {
        time: "17:15",
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
    title: "Excursión fuera de Dublín",
    subtitle: "Día reservado para elegir excursión",
    color: "#fce7f3",
    keyInfo: [
      ["Estado", "Pendiente de elegir excursión"],
      ["Idea", "Día completo fuera de Dublín"],
      ["Hotel", "Salida y regreso desde Hampton by Hilton"],
    ],
    notes: [
      "Día bloqueado para excursión fuera de Dublín. Opciones posibles: Howth, Glendalough/Wicklow, Belfast/Giant's Causeway o Cliffs of Moher.",
      "Cuando elijas excursión, añadir hora de salida, punto de recogida, comida y regreso.",
      "No cargar este día con visitas de Dublín.",
    ],
    events: [
      {
        time: "Todo el día",
        title: "Excursión por decidir",
        tag: "Excursión",
        description: "Reservado para una excursión fuera de Dublín. Cuando elijas destino, se sustituirá por la ruta real con horarios.",
        meta: ["Pendiente", "Fuera de Dublín"],
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
    color: "#fef3c7",
    keyInfo: [
      ["Vuelo", "Salida de Dublín a las 20:55 hora local"],
      ["Mañana", "Kilmainham Gaol + comida tranquila"],
      ["Desayuno", "Incluido en Hampton by Hilton"],
      ["Aeropuerto", "Llegar sobre las 18:00 para usar la sala VIP"],
      ["Hotel", "Salida desde Hampton by Hilton"],
    ],
    notes: [
      "Aunque con el vuelo a las 20:55 bastaría con estar en el aeropuerto sobre las 18:55, conviene llegar hacia las 18:00 para cenar tranquilo en la sala VIP.",
      "Confirmar terminal, compañía y puerta cuando esté disponible.",
      "Dejar margen para tráfico, control de seguridad y posible facturación.",
    ],
    events: [
      {
        time: "09:00",
        title: "Desayuno incluido y check-out tranquilo",
        tag: "Comida",
        description: "Desayunar en el hotel, preparar maletas y dejar el equipaje en recepción del Hampton by Hilton para aprovechar la mañana sin cargar.",
        meta: ["Incluido", "Hampton by Hilton", "Dejar maletas"],
      },
      {
        time: "09:30",
        title: "Traslado a Kilmainham Gaol",
        tag: "Traslado",
        description: "Ir hacia Kilmainham con margen para llegar antes de la visita. Revisa Maps esa mañana para decidir entre bus, Luas/taxi o taxi directo.",
        meta: ["Hampton by Hilton -> Kilmainham", "Llegar 15 min antes"],
        links: [
          {
            label: "Cómo ir",
            href: "https://www.google.com/maps/dir/?api=1&origin=Hampton%20by%20Hilton%20Dublin%20City%20Centre&destination=Kilmainham%20Gaol%20Museum&travelmode=transit",
          },
        ],
      },
      {
        time: "10:30",
        title: "Museo Kilmainham Gaol",
        tag: "Entrada",
        tagTone: "important",
        description: "Una de las visitas históricas más potentes de Dublín. Acceso solo con tour guiado; calcula unos 90 minutos entre tour y museo.",
        meta: ["De pago", "Reserva imprescindible"],
        links: [
          {
            label: "Reservar",
            href: "https://www.kilmainhamgaolmuseum.ie/plan-a-visit/",
          },
          {
            label: "Cómo llegar",
            href: "https://www.google.com/maps/search/?api=1&query=Kilmainham%20Gaol%20Museum",
          },
        ],
      },
      {
        time: "12:15",
        title: "Vuelta hacia el centro",
        tag: "Paseo",
        description: "Volver con calma hacia el centro o directamente hacia la zona del Hampton by Hilton. Mantener el plan simple para no complicar el día del vuelo.",
        meta: ["Flexible", "Sin alejarse"],
        links: [
          {
            label: "Volver al hotel",
            href: "https://www.google.com/maps/dir/?api=1&origin=Kilmainham%20Gaol%20Museum&destination=Hampton%20by%20Hilton%20Dublin%20City%20Centre&travelmode=transit",
          },
        ],
      },
      {
        time: "13:00",
        title: "Comida cerca del Hampton by Hilton",
        tag: "Comida",
        description: "Comida temprana y sin alejarse demasiado. Mejor dejar la tarde limpia para volver al hotel y salir al aeropuerto sin prisas.",
        meta: ["Dublin 7", "Cerca del hotel"],
        links: [
          {
            label: "Restaurantes cerca",
            href: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Hampton%20by%20Hilton%20Dublin%20City%20Centre",
          },
        ],
      },
      {
        time: "14:30",
        title: "Vuelta suave hacia el Hampton by Hilton",
        tag: "Paseo",
        description: "Volver caminando o en transporte al hotel. Si queda energía, parar en tiendas o tomar café cerca de O'Connell; si no, descansar antes del vuelo.",
        meta: ["Flexible", "No alejarse"],
        links: [
          {
            label: "Volver al hotel",
            href: "https://www.google.com/maps/search/?api=1&query=Hampton%20by%20Hilton%20Dublin%20City%20Centre",
          },
        ],
      },
      {
        time: "16:30",
        title: "Recoger equipaje en Hampton by Hilton",
        tag: "Hotel",
        description: "Volver al hotel, recoger maletas y preparar documentación, móvil cargado y billete de avión.",
        meta: ["Hampton by Hilton", "Antes del traslado"],
      },
      {
        time: "17:00",
        title: "Salida hacia Dublin Airport",
        tag: "Traslado",
        tagTone: "important",
        description: "Salir desde Hampton by Hilton hacia Dublin Airport para llegar sobre las 18:00. Revisar la ruta en Maps ese mismo día y elegir bus/taxi según tráfico y equipaje.",
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
