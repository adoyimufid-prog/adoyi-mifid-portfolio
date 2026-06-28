export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      about: '\u00c0 propos',
      experience: 'Exp\u00e9rience',
      skills: 'Comp\u00e9tences',
      portfolio: 'R\u00e9alisations',
      testimonials: 'T\u00e9moignages',
      contact: 'Contact',
    },
    hero: {
      name: 'ADOYI GADO MIFID',
      title: 'Charg\u00e9 de Growth Marketing & Prospection',
      tagline:
        'Je transforme les donn\u00e9es en croissance. Sp\u00e9cialiste de l\u2019acquisition utilisateur et de la prospection B2B avec une approche data-driven.',
      downloadCv: 'T\u00e9l\u00e9charger CV',
      contactMe: 'Me Contacter',
    },
    about: {
      sectionTitle: '\u00c0 propos de moi',
      profile:
        "Sp\u00e9cialiste de l\u2019acquisition et du d\u00e9veloppement commercial avec plus de 3 ans d\u2019exp\u00e9rience en environnement \u00e0 forte croissance (startup, r\u00e9seaux internationaux). Expert dans la traduction d\u2019objectifs strat\u00e9giques en campagnes d\u2019acquisition percutantes (0 \u2192 800+ utilisateurs) et en prospection B2B. Au cours de mes exp\u00e9riences AIESEC, j\u2019ai r\u00e9ussi \u00e0 mobiliser plus de 3 000 000 FCFA en sponsoring pour des activit\u00e9s de jeunes. Dot\u00e9 d\u2019une forte autonomie et orient\u00e9 donn\u00e9es.",
      stats: [
        { value: '3+', label: "Ans d'Exp\u00e9rience" },
        { value: '800+', label: 'Utilisateurs Acquis' },
        { value: '5900%', label: 'Croissance LinkedIn' },
        { value: '3M+', label: 'FCFA Sponsoring Mobilis\u00e9' },
        { value: '20+', label: 'Comit\u00e9s Couverts' },
      ],
    },
    experience: {
      sectionTitle: 'Exp\u00e9rience Professionnelle',
      items: [
        {
          role: 'Vice-Pr\u00e9sident Marketing',
          company: 'AIESEC Alumni Middle East & Africa',
          companyUrl: 'https://aameaconference.com/',
          location: '\u00c0 distance',
          dates: 'D\u00e9c. 2025 \u2013 Pr\u00e9sent',
          images: ['/images/experiences/aiesec-alumni-vp-announcement.jpg', '/images/experiences/aamea-quarter-results.png'],
          bullets: [
            "Pilotage strat\u00e9gique de la fonction marketing pour 20+ comit\u00e9s nationaux \u00e0 travers l\u2019Afrique et le Moyen-Orient, couvrant une communaut\u00e9 de plusieurs milliers d\u2019alumni.",
            "Conception et d\u00e9ploiement de campagnes de marque multi-pays (LinkedIn, Meta, newsletters) pour renforcer la visibilit\u00e9 et la coh\u00e9rence du positionnement AIESEC Alumni \u00e0 l\u2019international.",
            "Mise en place d\u2019un cadre d\u2019analyse data-driven avec tableaux de bord KPIs (engagement, reach, conversion) pour mesurer l\u2019impact des initiatives et orienter les d\u00e9cisions strat\u00e9giques.",
            "Collaboration transversale avec les VP des autres d\u00e9partements (Legal, Finance, Membership) pour aligner la communication sur les objectifs de croissance \u00e0 long terme de l\u2019organisation.",
          ],
        },
        {
          role: 'Head of Communication & Media (Pilotage Campagne d\u2019Acquisition)',
          company: 'SLSC 2025 \u2013 ATLOG',
          companyUrl: 'https://atlog-togo.com/',
          location: 'Lom\u00e9, Togo',
          dates: 'Nov. 2025 \u2013 Jan. 2026',
          images: ['/images/experiences/slsc-event.jpg'],
          bullets: [
            "Direction d\u2019une campagne d\u2019acquisition multi-canal (Social Media organique et payant, WhatsApp Marketing, \u00e9v\u00e9nementiel terrain) avec un suivi rigoureux des KPIs pour la Semaine de la Logistique et de la Supply Chain (SLSC 2025), initiative de l\u2019ATLOG.",
            "Conception et gestion de la base de donn\u00e9es des participants, mise en place du formulaire d\u2019inscription via chatbot, et cr\u00e9ation d\u2019un avatar conversationnel (Rachelle) pour humaniser le parcours d\u2019inscription et renforcer la confiance.",
            "Croissance spectaculaire de la base d\u2019utilisateurs : de 0 \u00e0 800+ participants B2C inscrits en 8 semaines, principalement des professionnels et \u00e9tudiants de la supply chain.",
            "Explosion de la pr\u00e9sence organique sur LinkedIn (+5 900%, passant de 10 \u00e0 600+ abonn\u00e9s cibl\u00e9s) et cr\u00e9ation d\u2019une communaut\u00e9 WhatsApp engag\u00e9e de 430 membres.",
            "Multiplication par 9 de l\u2019engagement Facebook (de 155 \u00e0 1 400+ interactions) via une strat\u00e9gie de contenu par phases teasers-lancement-suivi.",
            "Pilotage d\u2019une \u00e9quipe cr\u00e9ative de 10 personnes (designers, vid\u00e9astes, community manager) avec une ligne \u00e9ditoriale claire et coh\u00e9rente, et coordination de la communication avant, pendant et apr\u00e8s l\u2019\u00e9v\u00e9nement.",
          ],
        },
        {
          role: 'Regional Growth & Market Development Lead',
          company: 'StayingBee (Startup)',
          companyUrl: 'https://stayingbee.com/',
          location: '\u00c0 distance',
          dates: 'F\u00e9vr. 2026 \u2013 Mai 2026',
          images: ['/images/experiences/stayingbee-team.jpg', '/images/experiences/stayingbee-dashboard.png'],
          bullets: [
            "Responsable de l\u2019activation et du d\u00e9veloppement de la croissance de StayingBee au sein de la communaut\u00e9 AIESEC. Mon p\u00e9rim\u00e8tre couvrait initialement l\u2019Afrique subsaharienne et l\u2019Afrique de l\u2019Est, avant d\u2019\u00eatre \u00e9tendu \u00e0 la France en cours de mission.",
            "Int\u00e9gr\u00e9 dans l\u2019\u00e9quipe mondiale des 5 Beekeepers issus de la communaut\u00e9 AIESEC, r\u00e9partis sur 5 continents (Asie, Afrique du Nord, Afrique de l\u2019Ouest, Europe, Am\u00e9rique), tous unis par une exp\u00e9rience AIESEC partag\u00e9e et un r\u00e9seau global d\u00e9j\u00e0 existant.",
            "+2 000 personnes contact\u00e9es en outbound (via Dripify et outils de prospection), +500 connexions \u00e9tablies, +200 conversations engag\u00e9es, +100 appels r\u00e9alis\u00e9s, et +40 utilisateurs onboard\u00e9s (h\u00f4tes et potentiels voyageurs).",
            "Travail concentr\u00e9 sur la conversion d\u2019un r\u00e9seau existant en engagement r\u00e9el : transformer les relations AIESEC en adoption concr\u00e8te d\u2019une plateforme communautaire.",
          ],
        },
        {
          role: 'Country Director',
          company: 'AIESEC au Togo',
          companyUrl: 'https://aiesec.org/',
          location: 'Lom\u00e9, Togo',
          dates: 'Juil. 2023 \u2013 Juin 2025',
          images: ['/images/experiences/aiesec-togo-podium-pla.jpg', '/images/experiences/aiesec-togo-group-photo.jpg', '/images/experiences/aiesec-togo-podium-youth.jpg'],
          eventLink: 'https://web.facebook.com/share/v/1DwwRNcCb8/',
          bullets: [
            "Direction g\u00e9n\u00e9rale de l\u2019entit\u00e9 AIESEC au Togo : pilotage strat\u00e9gique, supervision de 4 d\u00e9partements et coordination des op\u00e9rations nationales pendant 2 mandats cons\u00e9cutifs (juillet 2023 \u2013 juin 2025).",
            "Prospection B2B et d\u00e9veloppement de pipelines de partenaires institutionnels et priv\u00e9s de premier plan : PIA (Plateforme Industrielle d\u2019Ad\u00e9tikop\u00e9), PNUD, CCI-Togo (Chambre de Commerce et d\u2019Industrie du Togo), GIZ, YAS, Moov Africa, Ambassade de l\u2019Inde, ATLOG, Impact Hub Cotonou.",
            "Conception, organisation et activation de 4 s\u00e9minaires nationaux Leadership Development Seminar de AIESEC au Togo, rassemblant \u00e0 chacun pr\u00e8s de 100 jeunes venus des 4 coins de l\u2019Afrique de l\u2019Ouest. Co-organisation du West Africa Connecting Seminar de AIESEC.",
            "Mobilisation de plus de 3 000 000 FCFA en sponsoring et partenariats au cours de l\u2019ensemble des mandats, s\u00e9curisant ainsi le financement des activit\u00e9s.",
            "Production de rapports strat\u00e9giques trimestriels et pr\u00e9sentations devant les partenaires pour documenter l\u2019impact, s\u00e9curiser les financements et assurer la p\u00e9rennit\u00e9 organisationnelle.",
          ],
        },
        {
          role: 'Business Development Lead',
          company: 'AIESEC',
          companyUrl: 'https://aiesec.org/',
          location: 'Kara, Togo',
          dates: 'F\u00e9vr. 2021 \u2013 Jan. 2023',
          images: ['/images/experiences/aiesec-togo-certificate.jpg'],
          bullets: [
            "Prospection commerciale active et structur\u00e9e : identification, approche et n\u00e9gociation de contrats de sponsoring et de partenariats avec des entreprises priv\u00e9es et institutions de la r\u00e9gion de Kara.",
            "Conception et ex\u00e9cution de campagnes d\u2019outreach et d\u2019activation de march\u00e9 ayant mobilis\u00e9 plus de 500 participants \u00e0 travers 3 \u00e9ditions d\u2019\u00e9v\u00e9nements locaux.",
            "Contribution \u00e0 la mobilisation de plus de 3 000 000 FCFA en sponsoring cumul\u00e9 sur l\u2019ensemble des exp\u00e9riences AIESEC, via la diversification des sources (entreprises, ONG, institutions publiques) et l\u2019optimisation des propositions de valeur partenariales.",
          ],
        },
      ],
    },
    skills: {
      sectionTitle: 'Comp\u00e9tences',
      hardTitle: 'Hard Skills',
      softTitle: 'Soft Skills',
      hardSkills: [
        { name: 'Prospection B2B & Dripify', level: 95 },
        { name: "Campagnes d\u2019Acquisition (Meta, LinkedIn)", level: 90 },
        { name: 'Email Marketing & Segmentation', level: 85 },
        { name: 'Growth Organique & Social Selling', level: 92 },
        { name: 'Analyse de Donn\u00e9es & KPIs', level: 88 },
        { name: 'Test & Learn', level: 87 },
        { name: 'HubSpot & Apify (bases)', level: 65 },
      ],
      softSkills: [
        'Autonomie',
        'Orientation R\u00e9sultats',
        'Adaptabilit\u00e9 Agile',
        'D\u00e9cision Data-Driven',
        'Communication Interculturelle',
      ],
    },
    portfolio: {
      sectionTitle: 'R\u00e9alisations',
      projects: [
        {
          title: 'SLSC 2025 \u2013 Semaine de la Logistique',
          metric: '0 \u2192 800+',
          metricLabel: 'Participants B2C Acquis',
          description:
            "Campagne d\u2019acquisition multi-canal pour la Semaine de la Logistique et de la Supply Chain (ATLOG). Strat\u00e9gie data-driven, chatbot d\u2019inscription, avatar conversationnel, et \u00e9quipe cr\u00e9ative de 10 personnes coordonn\u00e9e. +5900% de croissance LinkedIn.",
          tags: ['Growth Marketing', 'Data-Driven', 'Multi-canal'],
          image: '/images/experiences/slsc-event.jpg',
        },
        {
          title: 'Partenariats B2B AIESEC',
          metric: '3M+',
          metricLabel: 'FCFA en Sponsoring',
          description:
            "D\u00e9veloppement de pipelines B2B avec des partenaires de premier plan (PIA, PNUD, CCI-Togo, GIZ, YAS, Moov Africa, Ambassade de l\u2019Inde, ATLOG, Impact Hub). Organisation de 4 s\u00e9minaires nationaux et co-organisation du WAC Seminar.",
          tags: ['B2B', 'Partenariats', '\u00c9v\u00e9nementiel'],
          image: '/images/experiences/aiesec-togo-group-photo.jpg',
        },
        {
          title: 'StayingBee \u2013 Expansion Africaine',
          metric: '+2000',
          metricLabel: 'Personnes Contact\u00e9es (Outbound)',
          description:
            "Activation de la croissance de StayingBee dans la communaut\u00e9 AIESEC sur 5 continents. +2000 contacts outbound (Dripify), +500 connexions, +100 appels, +40 utilisateurs onboard\u00e9s. P\u00e9rim\u00e8tre \u00e9tendu \u00e0 la France.",
          tags: ['Startup', 'Outbound', 'Dripify'],
          image: '/images/experiences/stayingbee-dashboard.png',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'T\u00e9moignages',
      items: [
        {
          name: 'Silvere ATSOU',
          role: "Former Global Implementation Manager, DHL Forward | Pr\u00e9sident, AIESEC Alumni MEA",
          quote:
            "Mifid a d\u00e9montr\u00e9 une capacit\u00e9 exceptionnelle \u00e0 piloter des campagnes d\u2019acquisition complexes avec des r\u00e9sultats mesurables. Son approche data-driven et sa rigueur analytique sont des atouts majeurs pour toute \u00e9quipe de croissance.",
        },
        {
          name: 'Patricia MICHELENA PMP',
          role: 'Co-fondatrice, StayingBee',
          quote:
            "J\u2019ai eu le plaisir de travailler avec Mifid dans le cadre du programme BeeKeeper de StayingBee, o\u00f9 il s\u2019est concentr\u00e9 sur le d\u00e9veloppement de notre communaut\u00e9 d\u2019h\u00f4tes au sein du r\u00e9seau AIESEC. Ce qui a le plus marqu\u00e9, c\u2019est son enthousiasme sinc\u00e8re et son ouverture \u00e0 essayer de nouvelles approches \u2014 il a pris r\u00e9ellement en charge son travail et a apport\u00e9 une \u00e9nergie formidable \u00e0 tout ce qu\u2019il faisait. Mifid est un bel exemple du genre de personne que vous voulez dans votre \u00e9quipe quand vous construisez quelque chose de nouveau.",
        },
        {
          name: 'Napo FARE',
          role: "Operations Management Specialist | PIA (Plateforme Industrielle d'Ad\u00e9tikop\u00e9)",
          quote:
            "J\u2019ai eu l\u2019opportunit\u00e9 de collaborer avec Mifid lors de l\u2019organisation d\u2019un s\u00e9minaire \u00e0 Sokod\u00e9, et cette exp\u00e9rience a mis en lumi\u00e8re ses qualit\u00e9s naturelles de leader et de communicateur. Mifid est un jeune leader dynamique, engag\u00e9 et extr\u00eamement professionnel. Il poss\u00e8de une capacit\u00e9 remarquable \u00e0 mobiliser un public, \u00e0 cr\u00e9er une \u00e9nergie positive et \u00e0 faire passer des messages avec clart\u00e9 et impact. Je le recommande vivement \u00e0 toute organisation.",
        },
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      subtitle: "N\u2019h\u00e9sitez pas \u00e0 me contacter pour discuter de vos projets.",
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoy\u00e9 avec succ\u00e8s !',
      },
      info: {
        phone: 'T\u00e9l\u00e9phone',
        email: 'Email',
        location: 'Localisation',
        linkedin: 'LinkedIn',
      },
    },
    footer: {
      copyright: '\u00a9 2025 Adoyi Gado Mifid. Tous droits r\u00e9serv\u00e9s.',
      quickLinks: 'Liens Rapides',
      madeWith: 'Fait avec passion \u00e0 Lom\u00e9, Togo',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      name: 'ADOYI GADO MIFID',
      title: 'Growth Marketing & Prospection Specialist',
      tagline:
        'I turn data into growth. User acquisition and B2B prospecting specialist with a data-driven approach.',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
    },
    about: {
      sectionTitle: 'About Me',
      profile:
        'Acquisition and business development specialist with over 3 years of experience in high-growth environments (startups, international networks). Expert in translating strategic objectives into high-impact acquisition campaigns (0 \u2192 800+ users) and B2B prospecting. Throughout my AIESEC experience, I successfully mobilized over 3,000,000 FCFA in sponsorships for youth activities. Strong autonomy and data-driven mindset.',
      stats: [
        { value: '3+', label: 'Years of Experience' },
        { value: '800+', label: 'Users Acquired' },
        { value: '5900%', label: 'LinkedIn Growth' },
        { value: '3M+', label: 'FCFA Sponsorship Mobilized' },
        { value: '20+', label: 'Committees Covered' },
      ],
    },
    experience: {
      sectionTitle: 'Professional Experience',
      items: [
        {
          role: 'Vice President Marketing',
          company: 'AIESEC Alumni Middle East & Africa',
          companyUrl: 'https://aameaconference.com/',
          location: 'Remote',
          dates: 'Dec. 2025 \u2013 Present',
          images: ['/images/experiences/aiesec-alumni-vp-announcement.jpg', '/images/experiences/aamea-quarter-results.png'],
          bullets: [
            "Strategic leadership of the marketing function across 20+ national committees spanning Africa and the Middle East, engaging a community of thousands of alumni.",
            "Designing and deploying multi-country brand campaigns (LinkedIn, Meta, newsletters) to strengthen AIESEC Alumni\u2019s international visibility and brand consistency.",
            "Establishing a data-driven analytics framework with KPI dashboards (engagement, reach, conversion) to measure initiative impact and guide strategic decisions.",
            "Cross-functional collaboration with VP counterparts (Legal, Finance, Membership) to align communications with the organization\u2019s long-term growth objectives.",
          ],
        },
        {
          role: 'Head of Communication & Media (Acquisition Campaign Lead)',
          company: 'SLSC 2025 \u2013 ATLOG',
          companyUrl: 'https://atlog-togo.com/',
          location: 'Lom\u00e9, Togo',
          dates: 'Nov. 2025 \u2013 Jan. 2026',
          images: ['/images/experiences/slsc-event.jpg'],
          bullets: [
            "Directed a multi-channel acquisition campaign (organic & paid social media, WhatsApp Marketing, field events) with rigorous KPI tracking for the Logistics and Supply Chain Week (SLSC 2025), an ATLOG initiative.",
            "Designed and managed the participant database, implemented chatbot-based registration forms, and created a conversational avatar (Rachelle) to humanize the registration journey and build trust.",
            "Achieved spectacular user base growth: from 0 to 800+ B2C participant registrations in 8 weeks, primarily supply chain professionals and students.",
            "Drove organic LinkedIn explosion (+5,900%, from 10 to 600+ targeted followers) and built an engaged WhatsApp community of 430 members.",
            "Multiplied Facebook engagement by 9x (from 155 to 1,400+ interactions) through a phased content strategy (teasers-launch-follow-up).",
            "Led a creative team of 10 (designers, videographers, community manager) with a clear editorial line, and coordinated communication before, during, and after the event.",
          ],
        },
        {
          role: 'Regional Growth & Market Development Lead',
          company: 'StayingBee (Startup)',
          companyUrl: 'https://stayingbee.com/',
          location: 'Remote',
          dates: 'Feb. 2026 \u2013 May 2026',
          images: ['/images/experiences/stayingbee-team.jpg', '/images/experiences/stayingbee-dashboard.png'],
          bullets: [
            "Responsible for activating and growing StayingBee within the AIESEC community. My territory initially covered Sub-Saharan Africa and East Africa, before being extended to France during the mission.",
            "Part of the global Beekeepers team \u2014 5 AIESEC alumni across 5 continents (Asia, North Africa, West Africa, Europe, Americas), united by a shared AIESEC experience and an existing global network.",
            "2,000+ people contacted via outbound (Dripify and prospecting tools), 500+ connections established, 200+ conversations engaged, 100+ calls made, and 40+ users onboarded (hosts and potential travelers).",
            "Focused on converting an existing network into real engagement: transforming AIESEC relationships into concrete adoption of a community platform.",
          ],
        },
        {
          role: 'Country Director',
          company: 'AIESEC in Togo',
          companyUrl: 'https://aiesec.org/',
          location: 'Lom\u00e9, Togo',
          dates: 'Jul. 2023 \u2013 Jun. 2025',
          images: ['/images/experiences/aiesec-togo-podium-pla.jpg', '/images/experiences/aiesec-togo-group-photo.jpg', '/images/experiences/aiesec-togo-podium-youth.jpg'],
          eventLink: 'https://web.facebook.com/share/v/1DwwRNcCb8/',
          bullets: [
            "General management of AIESEC in Togo: strategic leadership, oversight of 4 departments, and coordination of national operations for 2 consecutive terms (July 2023 \u2013 June 2025).",
            "B2B prospecting and pipeline development with top-tier institutional and private partners: PIA (Plateforme Industrielle d\u2019Ad\u00e9tikop\u00e9), UNDP, CCI-Togo, GIZ, YAS, Moov Africa, Indian Embassy, ATLOG, Impact Hub Cotonou.",
            "Designed, organized, and activated 4 National Leadership Development Seminars, each bringing together nearly 100 youth from across West Africa. Co-organized the West Africa Connecting Seminar.",
            "Mobilized over 3,000,000 FCFA in sponsorships and partnerships across all mandates, securing activity funding.",
            "Produced quarterly strategic reports and partner presentations to document impact, secure funding, and ensure organizational sustainability.",
          ],
        },
        {
          role: 'Business Development Lead',
          company: 'AIESEC',
          companyUrl: 'https://aiesec.org/',
          location: 'Kara, Togo',
          dates: 'Feb. 2021 \u2013 Jan. 2023',
          images: ['/images/experiences/aiesec-togo-certificate.jpg'],
          bullets: [
            "Active and structured commercial prospecting: identified, approached, and negotiated sponsorship contracts and partnerships with private companies and institutions in the Kara region.",
            "Designed and executed outreach campaigns and market activation that mobilized 500+ participants across 3 local event editions.",
            "Contributed to mobilizing over 3,000,000 FCFA in cumulative sponsorships across all AIESEC experiences, through source diversification and partnership value proposition optimization.",
          ],
        },
      ],
    },
    skills: {
      sectionTitle: 'Skills',
      hardTitle: 'Hard Skills',
      softTitle: 'Soft Skills',
      hardSkills: [
        { name: 'B2B Prospecting & Dripify', level: 95 },
        { name: 'Acquisition Campaigns (Meta, LinkedIn)', level: 90 },
        { name: 'Email Marketing & Segmentation', level: 85 },
        { name: 'Organic Growth & Social Selling', level: 92 },
        { name: 'Data Analysis & KPIs', level: 88 },
        { name: 'Test & Learn', level: 87 },
        { name: 'HubSpot & Apify (basics)', level: 65 },
      ],
      softSkills: [
        'Autonomy',
        'Results-Oriented',
        'Agile Adaptability',
        'Data-Driven Decision Making',
        'Intercultural Communication',
      ],
    },
    portfolio: {
      sectionTitle: 'Portfolio',
      projects: [
        {
          title: 'SLSC 2025 \u2013 Logistics & Supply Chain Week',
          metric: '0 \u2192 800+',
          metricLabel: 'B2C Participants Acquired',
          description:
            'Multi-channel acquisition campaign for the Logistics and Supply Chain Week (ATLOG). Data-driven strategy, chatbot registration, conversational avatar, and a 10-person creative team coordinated. +5900% LinkedIn growth.',
          tags: ['Growth Marketing', 'Data-Driven', 'Multi-channel'],
          image: '/images/experiences/slsc-event.jpg',
        },
        {
          title: 'AIESEC B2B Partnerships',
          metric: '3M+',
          metricLabel: 'FCFA in Sponsorships',
          description:
            'B2B pipeline development with top-tier partners (PIA, UNDP, CCI-Togo, GIZ, YAS, Moov Africa, Indian Embassy, ATLOG, Impact Hub). 4 national seminars organized and WAC Seminar co-organized.',
          tags: ['B2B', 'Partnerships', 'Events'],
          image: '/images/experiences/aiesec-togo-group-photo.jpg',
        },
        {
          title: 'StayingBee \u2013 African Expansion',
          metric: '+2000',
          metricLabel: 'People Contacted (Outbound)',
          description:
            'Activated StayingBee growth within the AIESEC community across 5 continents. 2000+ outbound contacts (Dripify), 500+ connections, 100+ calls, 40+ users onboarded. Territory extended to France.',
          tags: ['Startup', 'Outbound', 'Dripify'],
          image: '/images/experiences/stayingbee-dashboard.png',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'Testimonials',
      items: [
        {
          name: 'Silvere ATSOU',
          role: "Former Global Implementation Manager, DHL Forward | President, AIESEC Alumni MEA",
          quote:
            "Mifid demonstrated exceptional ability to drive complex acquisition campaigns with measurable results. His data-driven approach and analytical rigor are major assets for any growth team.",
        },
        {
          name: 'Patricia MICHELENA PMP',
          role: 'Co-founder, StayingBee',
          quote:
            "I had the pleasure of working with Mifid as part of StayingBee's BeeKeeper program, where he focused on growing our host community within the AIESEC network. What stood out most was his genuine enthusiasm and his openness to trying new approaches \u2014 he took real ownership of his work and brought great energy to everything he did. Mifid is a great example of the kind of person you want on your team when you're building something new.",
        },
        {
          name: 'Napo FARE',
          role: "Operations Management Specialist | PIA (Plateforme Industrielle d'Ad\u00e9tikop\u00e9)",
          quote:
            "I had the opportunity to collaborate with Mifid during the organization of a seminar in Sokod\u00e9, and this experience highlighted his natural leadership and communication qualities. Mifid is a dynamic, committed, and extremely professional young leader. He has a remarkable ability to engage an audience, create positive energy, and deliver messages with clarity and impact. I highly recommend him to any organization.",
        },
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      subtitle: 'Feel free to reach out to discuss your projects.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        linkedin: 'LinkedIn',
      },
    },
    footer: {
      copyright: '\u00a9 2025 Adoyi Gado Mifid. All rights reserved.',
      quickLinks: 'Quick Links',
      madeWith: 'Made with passion in Lom\u00e9, Togo',
    },
  },
} as const;

export type Translations = (typeof translations)['fr'];