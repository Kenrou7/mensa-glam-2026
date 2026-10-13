import { Locale, SiteContent } from "@/types/site";

export const locales: Locale[] = ["es", "pt", "en"];

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    localeName: "Español",
    meta: {
      title: "GLAM 2026 | Buenos Aires",
      description:
        "Encuentro social de Mensa LATAM en Buenos Aires del 27 al 29 de noviembre de 2026.",
    },
    nav: {
      brand: "GLAM",
      languageLabel: "Idioma",
      sections: [
        { id: "overview", label: "Inicio" },
        { id: "schedule", label: "Agenda" },
        { id: "speakers", label: "Disertantes" },
        { id: "venue", label: "Lugar" },
        { id: "hotels", label: "Hoteles" },
        { id: "places-preview", label: "Lugares BA" },
        { id: "thanks", label: "Gracias" },
      ],
    },
    hero: {
      eyebrow: "Gathering of Latin American Mensas",
      title: "GLAM 2026",
      subtitle:
        "El punto de encuentro de Mensa en Latinoamérica.",
      date: "27 al 29 de noviembre de 2026",
      city: "Buenos Aires, Argentina",
      registration: "Formulario de inscripción",
      hotel: "Web del hotel",
      comingSoon: "Próximamente",
    },
    schedule: {
      title: "Charlas",
      note: {
        heading: "Mensa Talks",
        tagline: "Ideas que despiertan la mañana.",
        description: "El espacio donde la curiosidad, el conocimiento y el debate marcan el ritmo para arrancar cada jornada de la GLAM.",
        disclaimer: "*La nómina de disertantes, temas y horarios de las ponencias está sujeta a eventuales modificaciones por razones organizativas.",
      },
      agendaTitle: "Agenda",
      agendaDays: [
        {
          day: "Viernes 27 de Noviembre",
          activities: [
            { period: "Mañana", description: "Ciclo de apertura e intercambios institucionales con nuestras Mensa Talks." },
            { period: "Mediodía", description: "Receso libre para almuerzo." },
            { period: "Tarde", description: "Recorrido turístico y actividades de integración y juegos grupales (combinando propuestas organizadas y opciones de autogestión)." },
            { period: "Noche", description: "Salida libre y de autogestión para los grupos que se vayan conformando." },
          ],
        },
        {
          day: "Sábado 28 de Noviembre",
          activities: [
            { period: "Mañana", description: "Segunda jornada de Mensa Talks y paneles de debate." },
            { period: "Mediodía", description: "Receso libre para almuerzo." },
            { period: "Tarde", description: "Actividades recreativas, paseos." },
            { period: "Noche", description: "Espacio libre de autogestión y dinamización grupal." },
          ],
        },
        {
          day: "Domingo 29 de Noviembre",
          activities: [
            { period: "Mediodía / Tarde", description: "Gran almuerzo de despedida y cierre oficial de la GLAM 2026." },
          ],
        },
      ],
      days: [
        {
          day: "Viernes",
          sessions: [
            { time: "09:00", speaker: "Santiago Magnin" },
            { time: "10:15", speaker: "Esteban Elías" },
            { time: "11:30", speaker: "Gonzalo Burgos" },
          ],
        },
        {
          day: "Sábado",
          sessions: [
            { time: "09:00", speaker: "Irapoan Nogueira Filho Alford" },
            { time: "10:15", speaker: "Alejandra Gavigán" },
            { time: "11:30", speaker: "Marina Couto" },
          ],
        },
      ],
    },
    speakers: {
      title: "Disertantes",
      subtitle: {
        heading: "Talento latinoamericano con proyección global.",
        description: "Nómina de oradores internacional integrada por socios de Mensa reconocidos en sus respectivos ámbitos. Mentes de Argentina, Brasil, Paraguay y la región toda reunidas para compartir proyectos, visiones e iniciativas clave, como el Centro de Voluntarios de Mensa Internacional.",
      },
      pendingLabel: "Pendiente",
      items: [
        {
          name: "Santiago Magnin",
          description: "Empresario, Licenciado en Administración, Contador Publico y Corredor Inmobiliario. Fundador y CEO de Deinmobiliarios.",
          image: "/speakers/Santiago.png",
        },
        {
          name: "Esteban Elia",
          description: "Director de IA en MODO | Facilitador de aprendizaje en MIT | Comercio agéntico | Transformación AI-First",
          image: "/speakers/Esteban.jpg",
        },
        {
          name: "Gonzalo Burgos",
          description: "Ejecutivo C-level, emprendedor y abogado, con más de 15 años de trayectoria empresarial, jurídica y de gestión",
          image: "/speakers/Gonzalo.jpg",
        },
        {
          name: "Marina Couto",
          description: "Vice presidente de IVNC (International Volunteer Network Committee).",
          image: "/speakers/marina.jpeg",
        },
        {
          name: "Irapoan Nogueira Filho Alford",
          description: "PhD, Dr. y Mg. en Psicología Social, Psicólogo",
          image: "/speakers/irapoan.jpeg",
        },
        {
          name: "Alejandra Gavigán",
          description: "Encargada de Comunicaciones y Organizacion Mensa Int'l Paraguay",
          image: "/speakers/Alejandra.jpeg",
        },
      ],
    },
    placesPreview: {
      title: "Lugares BA",
      placeName: "Ateneo Grand Splendid",
      description:
        "Una antigua sala de teatro convertida en una de las librerias mas emblematicas de Sudamerica, con palcos, ornamentacion original y escenario hoy transformado en cafeteria.",
      image: "/interesting-places/ateneo_grand_splendid_1500x610.jpg",
      imageAlt: "Interior del Ateneo Grand Splendid",
      moreLabel: "Ver más lugares",
    },
    venue: {
      title: "Lugar del encuentro",
      subtitle: "Palacio Juncal, en CABA.",
      placeName: "Palacio Juncal",
      addressLabel: "Dirección",
      address: "Juncal 1264, Recoleta, Ciudad Autónoma de Buenos Aires",
      mapTitle: "Mapa de ubicación",
      transportTitle: "Cómo llegar en transporte local",
      transport: [
        {
          title: "Subte",
          detail: "Línea D, estación Callao; luego caminata corta hacia Recoleta.",
        },
        {
          title: "Colectivos",
          detail: "Líneas con paradas cercanas: 10, 17, 39, 59, 60, 67, 102.",
        },
        {
          title: "Taxi o apps",
          detail: "Zona con buen acceso y alta disponibilidad en todo horario.",
        },
      ],
    },
    hotels: {
      title: "Hoteles con descuento",
      subtitle: "Elegí entre 3 opciones. Dos de ellas requieren código de referencia.",
      chooseLabel: "Compará precio, ubicación y forma de contacto para elegir la mejor opción.",
      chooseButton: "Reservar",
      directBooking: "Reservar",
      starsLabel: "Categoría",
      locationLabel: "Ubicación",
      phoneLabel: "Teléfono",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      copyEmail: "Copiar",
      copiedEmail: "E-mail copiado",
      ratesLabel: "Valores con descuento",
      referenceNeededTitle: "Código de referencia requerido",
      referenceNeededDescription:
        "Este hotel aplica la tarifa de GLAM solo con código. Te redirigimos en {seconds} {unit} en una nueva pestaña.",
      referenceCodeLabel: "Referencia",
      autoRedirectLabel: "Redirección automática",
      secondsLabel: "segundos",
      openNow: "Abrir ahora",
      cancel: "Cancelar",
      popupBlockedMessage: "Tu navegador bloqueó la nueva pestaña. Usá 'Abrir ahora' o habilitá pop-ups para este sitio.",
      hotels: [
        {
          name: "NH Buenos Aires City",
          stars: 5,
          image: "/nh-buenos-aires-city.jpg",
          address: "Bolívar 160, Ciudad Autónoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Bolivar+160+CABA",
          phone: "+54 11 4121-6464",
          email: "nhcity@nh-hotels.com",
          bookingUrl: "https://www.minor-hotels.com/es/eventsweb/glam--encuentro-latinoamericano-de-mensa-",
          ratesTitle: "Valores con descuento",
          rates: [{ label: "Tarifa", value: "USD 130 + IVA por persona por noche con desayuno buffet" }],
          notes: ["Reembolso de IVA para turistas extranjeros"],
        },
        {
          name: "Atlas Tower Hotel",
          stars: 3,
          image: "/atlas-hotel-tower.jpeg",
          address: "Av. Corrientes 1778, Ciudad Autónoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/Av.+Corrientes+1778",
          phone: "(011) 5217-9371 / 4371-9371",
          whatsapp: "https://wa.me/541137819356",
          email: "reservas@atlastower.com.ar",
          bookingUrl: "http://www.atlastower.com.ar",
          referenceCode: "GLAM2026",
          ratesTitle: "Valores con descuento",
          rates: [
            { label: "Habitación Single", value: "AR$ 110.000 por noche con desayuno" },
            { label: "Habitación Doble", value: "AR$ 120.000 por noche con desayuno" },
            { label: "Habitación Triple", value: "AR$ 180.000 por noche con desayuno" },
          ],
        },
        {
          name: "Hotel Alpino",
          stars: 3,
          image: "/hotel-alpino.avif",
          address: "Cabello 3318, Palermo, Ciudad Autónoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Cabello+3318+Palermo+CABA",
          whatsapp: "https://wa.me/5491130705151",
          email: "reservas@hotelalpino.com.ar",
          website: "http://www.hotelalpino.com.ar/",
          bookingUrl: "http://www.hotelalpino.com.ar/",
          referenceCode: "GLAM2026",
          ratesTitle: "Valores con descuento",
          rates: [
            { label: "Habitación Doble", value: "AR$ 130.500 por noche con desayuno" },
            { label: "Habitación Triple", value: "AR$ 171.000 por noche con desayuno" },
          ],
        },
      ],
    },
    thanks: {
      title: "Agradecimientos",
      subtitle:
        "La realización de la GLAM 2026 es el resultado del esfuerzo conjunto y la pasión de nuestra comunidad. Expresamos nuestro sincero reconocimiento a:",
      acknowledgements: [
        { title: "Comité Organizador y Voluntarios", description: "Por su dedicación desinteresada en la planificación y logística" },
        { title: "Disertantes y Colaboradores", description: "Por compartir generosamente su tiempo, conocimiento y talento" },
        { title: "Mensa Internacional y Mensas de la Región", description: "Por el constante acompañamiento institucional e integración" },
        { title: "A todos los asistentes", description: "Por dar vida a este punto de encuentro regional" },
      ],
      logoAlt: "Logo de aliado",
    },
  },
  pt: {
    localeName: "Português",
    meta: {
      title: "GLAM 2026 | Buenos Aires",
      description:
        "Encontro social da Mensa LATAM em Buenos Aires de 27 a 29 de novembro de 2026.",
    },
    nav: {
      brand: "GLAM",
      languageLabel: "Idioma",
      sections: [
        { id: "overview", label: "Início" },
        { id: "schedule", label: "Agenda" },
        { id: "speakers", label: "Palestrantes" },
        { id: "venue", label: "Local" },
        { id: "hotels", label: "Hotéis" },
        { id: "places-preview", label: "Lugares BA" },
        { id: "thanks", label: "Agradecimentos" },
      ],
    },
    hero: {
      eyebrow: "Gathering of Latin American Mensas",
      title: "GLAM 2026",
      subtitle: "O ponto de encontro da Mensa na América Latina.",
      date: "27 a 29 de novembro de 2026",
      city: "Buenos Aires, Argentina",
      registration: "Formulário de inscrição",
      hotel: "Site do hotel",
      comingSoon: "Em breve",
    },
    schedule: {
      title: "Palestras",
      note: {
        heading: "Mensa Talks",
        tagline: "Ideias que despertam a manhã.",
        description: "O espaço onde a curiosidade, o conhecimento e o debate dão o ritmo para começar cada dia da GLAM.",
        disclaimer: "*A lista de palestrantes, temas e horários das apresentações está sujeita a eventuais alterações por razões organizacionais.",
      },
      agendaTitle: "Agenda",
      agendaDays: [
        {
          day: "Sexta-feira, 27 de novembro",
          activities: [
            { period: "Manhã", description: "Abertura e intercâmbios institucionais com nossas Mensa Talks." },
            { period: "Meio-dia", description: "Intervalo livre para o almoço." },
            { period: "Tarde", description: "Passeio turístico, atividades de integração e jogos em grupo, combinando propostas organizadas e opções autogeridas." },
            { period: "Noite", description: "Saída livre e autogerida para os grupos que forem se formando." },
          ],
        },
        {
          day: "Sábado, 28 de novembro",
          activities: [
            { period: "Manhã", description: "Segundo dia de Mensa Talks e painéis de debate." },
            { period: "Meio-dia", description: "Intervalo livre para o almoço." },
            { period: "Tarde", description: "Atividades recreativas e passeios." },
            { period: "Noite", description: "Tempo livre para atividades autogeridas e integração em grupo." },
          ],
        },
        {
          day: "Domingo, 29 de novembro",
          activities: [
            { period: "Meio-dia / Tarde", description: "Grande almoço de despedida e encerramento oficial da GLAM 2026." },
          ],
        },
      ],
      days: [
        {
          day: "Sexta-feira",
          sessions: [
            { time: "09:00", speaker: "Santiago Magnin" },
            { time: "10:15", speaker: "Esteban Elías" },
            { time: "11:30", speaker: "Gonzalo Burgos" },
          ],
        },
        {
          day: "Sábado",
          sessions: [
            { time: "09:00", speaker: "Irapoan Nogueira Filho Alford" },
            { time: "10:15", speaker: "Alejandra Gavigán" },
            { time: "11:30", speaker: "Marina Couto" },
          ],
        },
      ],
    },
    speakers: {
      title: "Palestrantes",
      subtitle: {
        heading: "Talento latino-americano com projeção global.",
        description: "Uma lista internacional de palestrantes formada por membros da Mensa reconhecidos em suas respectivas áreas. Mentes da Argentina, do Brasil, do Paraguai e de toda a região reunidas para compartilhar projetos, visões e iniciativas importantes, como o Centro de Voluntários da Mensa Internacional.",
      },
      pendingLabel: "Pendente",
      items: [
        {
          name: "Santiago Magnin",
          description: "Empresário, formado em Administração e Ciências Contábeis, e corretor de imóveis. Fundador e CEO da Deinmobiliarios.",
          image: "/speakers/Santiago.png",
        },
        {
          name: "Esteban Elia",
          description: "Head de IA na MODO | Facilitador de aprendizagem no MIT | Comércio agêntico | Transformação AI-First",
          image: "/speakers/Esteban.jpg",
        },
        {
          name: "Gonzalo Burgos",
          description: "Executivo C-level, empreendedor e advogado, com mais de 15 anos de experiência empresarial, jurídica e de gestão.",
          image: "/speakers/Gonzalo.jpg",
        },
        {
          name: "Marina Couto",
          description: "Vice-presidente do IVNC (International Volunteer Network Committee).",
          image: "/speakers/marina.jpeg",
        },
        {
          name: "Irapoan Nogueira Filho Alford",
          description: "PhD, doutor e mestre em Psicologia Social, psicólogo.",
          image: "/speakers/irapoan.jpeg",
        },
        {
          name: "Alejandra Gavigán",
          description: "Responsável pela Comunicação e Organização da Mensa Internacional Paraguai.",
          image: "/speakers/Alejandra.jpeg",
        },
      ],
    },
    placesPreview: {
      title: "Lugares BA",
      placeName: "Ateneo Grand Splendid",
      description:
        "Um antigo teatro transformado em uma das livrarias mais emblemáticas da América do Sul, com camarotes, ornamentação original e palco convertido em cafeteria.",
      image: "/interesting-places/ateneo_grand_splendid_1500x610.jpg",
      imageAlt: "Interior do Ateneo Grand Splendid",
      moreLabel: "Ver mais",
    },
    venue: {
      title: "Local do encontro",
      subtitle: "Palacio Juncal, em CABA.",
      placeName: "Palacio Juncal",
      addressLabel: "Endereço",
      address: "Juncal 1264, Recoleta, Cidade Autônoma de Buenos Aires",
      mapTitle: "Mapa de localização",
      transportTitle: "Como chegar com transporte local",
      transport: [
        {
          title: "Metrô",
          detail: "Linha D, estação Callao; depois uma curta caminhada até Recoleta.",
        },
        {
          title: "Ônibus",
          detail: "Linhas próximas: 10, 17, 39, 59, 60, 67, 102.",
        },
        {
          title: "Táxi ou apps",
          detail: "Área com bom acesso e alta disponibilidade em qualquer horário.",
        },
      ],
    },
    hotels: {
      title: "Hotéis com desconto",
      subtitle: "Escolha entre 3 opções. Duas exigem código de referência.",
      chooseLabel: "Compare preço, localização e contato para decidir melhor.",
      chooseButton: "Reservar",
      directBooking: "Reservar",
      starsLabel: "Categoria",
      locationLabel: "Localização",
      phoneLabel: "Telefone",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      copyEmail: "Copiar",
      copiedEmail: "E-mail copiado",
      ratesLabel: "Tarifas com desconto",
      referenceNeededTitle: "Código de referência obrigatório",
      referenceNeededDescription:
        "Este hotel aplica a tarifa GLAM somente com código. Vamos redirecionar em {seconds} {unit} em uma nova aba.",
      referenceCodeLabel: "Referência",
      autoRedirectLabel: "Redirecionamento automático",
      secondsLabel: "segundos",
      openNow: "Abrir agora",
      cancel: "Cancelar",
      popupBlockedMessage: "Seu navegador bloqueou a nova aba. Use 'Abrir agora' ou habilite pop-ups para este site.",
      hotels: [
        {
          name: "NH Buenos Aires City",
          stars: 5,
          image: "/nh-buenos-aires-city.jpg",
          address: "Bolívar 160, Cidade Autônoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Bolivar+160+CABA",
          phone: "+54 11 4121-6464",
          email: "nhcity@nh-hotels.com",
          bookingUrl: "https://www.minor-hotels.com/es/eventsweb/glam--encuentro-latinoamericano-de-mensa-",
          ratesTitle: "Tarifas com desconto",
          rates: [{ label: "Tarifa", value: "USD 130 + IVA por pessoa por noite com café da manhã buffet" }],
          notes: ["Reembolso de IVA para turistas estrangeiros"],
        },
        {
          name: "Atlas Tower Hotel",
          stars: 3,
          image: "/atlas-hotel-tower.jpeg",
          address: "Av. Corrientes 1778, Cidade Autônoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/Av.+Corrientes+1778",
          phone: "(011) 5217-9371 / 4371-9371",
          whatsapp: "https://wa.me/541137819356",
          email: "reservas@atlastower.com.ar",
          bookingUrl: "http://www.atlastower.com.ar",
          referenceCode: "GLAM2026",
          ratesTitle: "Tarifas com desconto",
          rates: [
            { label: "Quarto Single", value: "AR$ 110.000 por noite com café da manhã" },
            { label: "Quarto Duplo", value: "AR$ 120.000 por noite com café da manhã" },
            { label: "Quarto Triplo", value: "AR$ 180.000 por noite com café da manhã" },
          ],
        },
        {
          name: "Hotel Alpino",
          stars: 3,
          image: "/hotel-alpino.avif",
          address: "Cabello 3318, Palermo, Cidade Autônoma de Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Cabello+3318+Palermo+CABA",
          whatsapp: "https://wa.me/5491130705151",
          email: "reservas@hotelalpino.com.ar",
          website: "http://www.hotelalpino.com.ar/",
          bookingUrl: "http://www.hotelalpino.com.ar/",
          referenceCode: "GLAM2026",
          ratesTitle: "Tarifas com desconto",
          rates: [
            { label: "Quarto Duplo", value: "AR$ 130.500 por noite com café da manhã" },
            { label: "Quarto Triplo", value: "AR$ 171.000 por noite com café da manhã" },
          ],
        },
      ],
    },
    thanks: {
      title: "Agradecimentos",
      subtitle:
        "A realização do GLAM 2026 é resultado do esforço conjunto e da paixão da nossa comunidade. Expressamos nosso sincero reconhecimento a:",
      acknowledgements: [
        { title: "Comitê Organizador e Voluntários", description: "Por sua dedicação voluntária ao planejamento e à logística" },
        { title: "Palestrantes e Colaboradores", description: "Por compartilharem generosamente seu tempo, conhecimento e talento" },
        { title: "Mensa Internacional e Mensas da Região", description: "Pelo constante apoio institucional e pela integração" },
        { title: "A todos os participantes", description: "Por darem vida a este ponto de encontro regional" },
      ],
      logoAlt: "Logo de parceiro",
    },
  },
  en: {
    localeName: "English",
    meta: {
      title: "GLAM 2026 | Buenos Aires",
      description:
        "Mensa LATAM social gathering in Buenos Aires, November 27-29, 2026.",
    },
    nav: {
      brand: "GLAM",
      languageLabel: "Language",
      sections: [
        { id: "overview", label: "Home" },
        { id: "schedule", label: "Schedule" },
        { id: "speakers", label: "Speakers" },
        { id: "venue", label: "Venue" },
        { id: "hotels", label: "Hotels" },
        { id: "places-preview", label: "BA Places" },
        { id: "thanks", label: "Thanks" },
      ],
    },
    hero: {
      eyebrow: "Gathering of Latin American Mensas",
      title: "GLAM 2026",
      subtitle: "The meeting point for Mensa in Latin America.",
      date: "November 27-29, 2026",
      city: "Buenos Aires, Argentina",
      registration: "Sign-up form",
      hotel: "Hotel website",
      comingSoon: "Coming soon",
    },
    schedule: {
      title: "Talks",
      note: {
        heading: "Mensa Talks",
        tagline: "Ideas that awaken the morning.",
        description: "A space where curiosity, knowledge, and debate set the pace for starting each day of GLAM.",
        disclaimer: "*The speaker lineup, topics, and talk times are subject to change for organizational reasons.",
      },
      agendaTitle: "Schedule",
      agendaDays: [
        {
          day: "Friday, November 27",
          activities: [
            { period: "Morning", description: "Opening program and institutional exchanges with our Mensa Talks." },
            { period: "Midday", description: "Free time for lunch." },
            { period: "Afternoon", description: "City tour, social activities, and group games, combining organized plans with self-guided options." },
            { period: "Evening", description: "Free, self-organized outings for the groups that form." },
          ],
        },
        {
          day: "Saturday, November 28",
          activities: [
            { period: "Morning", description: "Second day of Mensa Talks and debate panels." },
            { period: "Midday", description: "Free time for lunch." },
            { period: "Afternoon", description: "Recreational activities and outings." },
            { period: "Evening", description: "Free time for self-organized activities and group socializing." },
          ],
        },
        {
          day: "Sunday, November 29",
          activities: [
            { period: "Midday / Afternoon", description: "Farewell lunch and official closing of GLAM 2026." },
          ],
        },
      ],
      days: [
        {
          day: "Friday",
          sessions: [
            { time: "09:00", speaker: "Santiago Magnin" },
            { time: "10:15", speaker: "Esteban Elías" },
            { time: "11:30", speaker: "Gonzalo Burgos" },
          ],
        },
        {
          day: "Saturday",
          sessions: [
            { time: "09:00", speaker: "Irapoan Nogueira Filho Alford" },
            { time: "10:15", speaker: "Alejandra Gavigán" },
            { time: "11:30", speaker: "Marina Couto" },
          ],
        },
      ],
    },
    speakers: {
      title: "Speakers",
      subtitle: {
        heading: "Latin American talent with a global outlook.",
        description: "An international lineup of speakers made up of Mensa members recognized in their respective fields. Minds from Argentina, Brazil, Paraguay, and across the region come together to share projects, perspectives, and key initiatives, including the Mensa International Volunteer Center.",
      },
      pendingLabel: "Pending",
      items: [
        {
          name: "Santiago Magnin",
          description: "Empresario, Licenciado en Administración, Contador Público y Corredor Inmobiliario. Fundador y CEO de Deinmobiliarios.",
          image: "/speakers/Santiago.png",
        },
        {
          name: "Esteban Elia",
          description: "Head of AI at MODO | Learning Facilitator at MIT | Agentic Commerce | AI-First Transformation",
          image: "/speakers/Esteban.jpg",
        },
        {
          name: "Gonzalo Burgos",
          description: "C-level executive, entrepreneur, and lawyer with more than 15 years of experience in business, law, and management.",
          image: "/speakers/Gonzalo.jpg",
        },
        {
          name: "Marina Couto",
          description: "Vice President of IVNC (International Volunteer Network Committee).",
          image: "/speakers/marina.jpeg",
        },
        {
          name: "Irapoan Nogueira Filho Alford",
          description: "PhD, doctorate and master's degrees in Social Psychology, psychologist.",
          image: "/speakers/irapoan.jpeg",
        },
        {
          name: "Alejandra Gavigán",
          description: "Communications and Organization Manager at Mensa International Paraguay.",
          image: "/speakers/Alejandra.jpeg",
        },
      ],
    },
    placesPreview: {
      title: "BA Places",
      placeName: "Ateneo Grand Splendid",
      description:
        "A former theater turned into one of South America's most iconic bookstores, with its original boxes and ornamentation and a stage now used as a café.",
      image: "/interesting-places/ateneo_grand_splendid_1500x610.jpg",
      imageAlt: "Interior of El Ateneo Grand Splendid",
      moreLabel: "See more",
    },
    venue: {
      title: "Meeting venue",
      subtitle: "Palacio Juncal, in CABA.",
      placeName: "Palacio Juncal",
      addressLabel: "Address",
      address: "Juncal 1264, Recoleta, Autonomous City of Buenos Aires",
      mapTitle: "Location map",
      transportTitle: "How to arrive using local transport",
      transport: [
        {
          title: "Subway",
          detail: "Line D, Callao station, then a short walk toward Recoleta.",
        },
        {
          title: "Bus",
          detail: "Nearby lines include 10, 17, 39, 59, 60, 67, and 102.",
        },
        {
          title: "Taxi or ride apps",
          detail: "The area has good access and high availability all day.",
        },
      ],
    },
    hotels: {
      title: "Hotels with discount",
      subtitle: "Choose between 3 options. Two require a reference code.",
      chooseLabel: "Compare price, location, and contact channel to pick the best fit.",
      chooseButton: "Book",
      directBooking: "Book",
      starsLabel: "Category",
      locationLabel: "Location",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      copyEmail: "Copy",
      copiedEmail: "E-mail copied",
      ratesLabel: "Discounted rates",
      referenceNeededTitle: "Reference code required",
      referenceNeededDescription:
        "This hotel applies the GLAM rate only with a code. We will redirect you in {seconds} {unit} in a new tab.",
      referenceCodeLabel: "Reference",
      autoRedirectLabel: "Automatic redirect",
      secondsLabel: "seconds",
      openNow: "Open now",
      cancel: "Cancel",
      popupBlockedMessage: "Your browser blocked the new tab. Use 'Open now' or allow pop-ups for this site.",
      hotels: [
        {
          name: "NH Buenos Aires City",
          stars: 5,
          image: "/nh-buenos-aires-city.jpg",
          address: "Bolívar 160, Autonomous City of Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Bolivar+160+CABA",
          phone: "+54 11 4121-6464",
          email: "nhcity@nh-hotels.com",
          bookingUrl: "https://www.minor-hotels.com/es/eventsweb/glam--encuentro-latinoamericano-de-mensa-",
          ratesTitle: "Discounted rates",
          rates: [{ label: "Rate", value: "USD 130 + VAT per person per night with buffet breakfast" }],
          notes: ["VAT refund for foreign tourists"],
        },
        {
          name: "Atlas Tower Hotel",
          stars: 3,
          image: "/atlas-hotel-tower.jpeg",
          address: "Av. Corrientes 1778, Autonomous City of Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/Av.+Corrientes+1778",
          phone: "(011) 5217-9371 / 4371-9371",
          whatsapp: "https://wa.me/541137819356",
          email: "reservas@atlastower.com.ar",
          bookingUrl: "http://www.atlastower.com.ar",
          referenceCode: "GLAM2026",
          ratesTitle: "Discounted rates",
          rates: [
            { label: "Single room", value: "AR$ 110,000 per night with breakfast" },
            { label: "Double room", value: "AR$ 120,000 per night with breakfast" },
            { label: "Triple room", value: "AR$ 180,000 per night with breakfast" },
          ],
        },
        {
          name: "Hotel Alpino",
          stars: 3,
          image: "/hotel-alpino.avif",
          address: "Cabello 3318, Palermo, Autonomous City of Buenos Aires",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Cabello+3318+Palermo+CABA",
          whatsapp: "https://wa.me/5491130705151",
          email: "reservas@hotelalpino.com.ar",
          website: "http://www.hotelalpino.com.ar/",
          bookingUrl: "http://www.hotelalpino.com.ar/",
          referenceCode: "GLAM2026",
          ratesTitle: "Discounted rates",
          rates: [
            { label: "Double room", value: "AR$ 130,500 per night with breakfast" },
            { label: "Triple room", value: "AR$ 171,000 per night with breakfast" },
          ],
        },
      ],
    },
    thanks: {
      title: "Thanks",
      subtitle:
        "GLAM 2026 is the result of our community’s shared effort and passion. We would like to express our sincere gratitude to:",
      acknowledgements: [
        { title: "Organizing Committee and Volunteers", description: "For their selfless dedication to planning and logistics" },
        { title: "Speakers and Collaborators", description: "For generously sharing their time, knowledge, and talent" },
        { title: "Mensa International and Mensa groups across the region", description: "For their ongoing institutional support and regional connection" },
        { title: "All attendees", description: "For bringing this regional meeting point to life" },
      ],
      logoAlt: "Partner logo",
    },
  },
};
