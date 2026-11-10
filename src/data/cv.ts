// Contenu du CV, en français et en anglais.
// Dates au format « AAAA-MM » ; `end` absent = poste actuel.
// Les durées (« 3 ans 3 mois ») sont calculées automatiquement à chaque déploiement.
// Logos : dépose le fichier dans public/logos/ sous le nom indiqué par `logo`
// (ex. public/logos/chanel.svg ; formats acceptés : svg, png, webp, jpg).
// Sans fichier, une pastille avec l'initiale de l'entreprise s'affiche à la place.
import type { Lang } from '../i18n';

type Text = Record<Lang, string>;

export interface Experience {
  role: string;
  company: string;
  logo?: string;
  contract: Text;
  location?: Text;
  start: string;
  end?: string;
  summary: Text;
  highlights: Text[];
}

export const CV = {
  headline: {
    fr: 'Data & AI Engineering Manager',
    en: 'Data & AI Engineering Manager',
  } as Text,

  about: {
    fr: [
      "Data & AI Engineering Manager, avec douze ans d'expérience dans la construction de plateformes data et la livraison de produits data et d'intelligence artificielle.",
      "Je suis responsable de l'architecture, de la gouvernance et de la livraison des cas d'usage data et intelligence artificielle des domaines Client et Digital de Chanel, et j'encadre une équipe d'ingénieurs data, analytics et apprentissage automatique.",
      "Mon objectif : faire de la donnée des produits auxquels le métier peut se fier, avec des définitions métier claires, une analytique en libre-service gouvernée et des priorités fondées sur une valeur mesurable.",
      "Ma formation en mathématiques appliquées et en recherche façonne encore ma manière de poser les problèmes : ce qu'une métrique mesure vraiment, et ce qu'un modèle peut ou ne peut pas nous dire.",
      "Je m'intéresse au leadership produit pour la data et l'intelligence artificielle, et à la manière dont les organisations décident de ce qui vaut la peine d'être construit.",
    ],
    en: [
      'Data & AI Engineering Manager with 12 years building data platforms and shipping data and AI products.',
      "I own the architecture, governance and delivery of data and AI use cases for Chanel's Client and Digital domains, leading a team of data, analytics and ML engineers.",
      'My focus is turning data into products the business can trust: clear business definitions, governed self-service analytics, and prioritization driven by measurable value.',
      'Background in applied mathematics and research, which still shapes how I frame problems: what a metric actually measures, and what a model can and cannot tell us.',
      'Interested in product leadership for data and AI, and in how organizations decide what is worth building.',
    ],
  } as Record<Lang, string[]>,

  topSkills: {
    fr: ['Management', 'Leadership produit'],
    en: ['Management', 'Product leadership'],
  } as Record<Lang, string[]>,

  experience: [
    {
      role: 'Data & AI Engineering Manager',
      company: 'Chanel',
      logo: 'chanel',
      contract: { fr: 'CDI', en: 'Full-time' },
      start: '2023-09',
      summary: {
        fr: "Responsable de l'architecture, de la gouvernance et de la livraison des cas d'usage data et intelligence artificielle pour les domaines Client et Digital.",
        en: 'Accountable for the architecture, governance and delivery of data and AI use cases for the Client and Digital domains.',
      },
      highlights: [
        {
          fr: "Pilotage de trois squads (informatique décisionnelle, analytique ad hoc, produits d'apprentissage automatique et d'intelligence artificielle générative) et d'une équipe de 9 ingénieurs data et apprentissage automatique, avec une feuille de route trimestrielle construite avec les parties prenantes métier.",
          en: 'Lead three squads (business intelligence (BI), ad hoc analytics, machine learning (ML) and generative AI products) and a team of 9 data and ML engineers, with a quarterly roadmap built with business stakeholders.',
        },
        {
          fr: "Déploiement du programme d'analytique en libre-service sur Power BI et Microsoft Fabric, à l'échelle de la Client Data Platform Europe.",
          en: 'Enable the self-service analytics program on Power BI and Microsoft Fabric across the Client Data Platform Europe.',
        },
        {
          fr: "Déploiement des assistants de code à base d'intelligence artificielle dans les squads.",
          en: 'Lead AI coding assistant enablement across squads.',
        },
      ],
    },
    {
      role: 'Data & AI Solution Architect',
      company: 'Groupe Clarins',
      logo: 'clarins',
      contract: { fr: 'Freelance', en: 'Freelance' },
      location: { fr: 'À distance', en: 'Remote' },
      start: '2021-04',
      end: '2023-08',
      summary: {
        fr: "Architecte data et tech lead de la plateforme data de Clarins, qui alimente les tableaux de bord métier et la data science à partir d'un socle unique.",
        en: "Data architect and tech lead of Clarins' data platform, serving business dashboards and data science from a single foundation.",
      },
      highlights: [
        {
          fr: "Pilotage de la refonte du data lake « Renew Lovelace » pour réunir informatique décisionnelle, data engineering et data science sur une seule plateforme, en alignant leadership technique, management et équipes data.",
          en: 'Led the "Renew Lovelace" data lake overhaul to bring BI, data engineering and data science onto one platform, aligning technical leadership, management and data teams.',
        },
        {
          fr: "Construction de la « ML Factory » pour prototyper et industrialiser les modèles : Azure Kubernetes Service (AKS) privé et Databricks déployés en infrastructure as code (IaC), dans un réseau en étoile (hub-and-spoke).",
          en: 'Built the "ML Factory" to prototype and industrialize models: private Azure Kubernetes Service (AKS) and Databricks deployed as infrastructure as code (IaC) in a hub-and-spoke network.',
        },
        {
          fr: "Définition de la gouvernance Snowflake (rôles et politique d'accès) et rôle de référent technique data engineering, Snowflake et Azure au sein de la communauté d'architecture.",
          en: 'Defined Snowflake governance (roles and access policy) and acted as technical referent for data engineering, Snowflake and Azure in the architecture community.',
        },
      ],
    },
    {
      role: 'Lead Data Engineer',
      company: 'Believe',
      logo: 'believe',
      contract: { fr: 'Freelance', en: 'Freelance' },
      location: { fr: 'À distance', en: 'Remote' },
      start: '2019-11',
      end: '2021-06',
      summary: {
        fr: "Lead data engineer pour l'analytique des artistes de Believe, dans un environnement multicloud (AWS et Azure).",
        en: "Lead data engineer for Believe's artist analytics, in a multi-cloud environment (AWS and Azure).",
      },
      highlights: [
        {
          fr: "Conception et livraison d'un modèle de scoring pour détecter et accompagner les artistes émergents.",
          en: 'Designed and delivered a scoring model to detect and support emerging music artists.',
        },
        {
          fr: "Intégration de nouvelles plateformes de streaming et optimisation des chaînes d'ingestion qui alimentent Backstage, l'outil de statistiques d'écoute proposé aux artistes, y compris une migration vers Databricks.",
          en: 'Integrated new streaming stores and optimized the ingestion pipelines feeding Backstage, the listening-statistics tool offered to artists, including a migration to Databricks.',
        },
        {
          fr: "Modélisation du datamart Backstage et preuve de concept d'une nouvelle plateforme data sur Snowflake.",
          en: 'Modeled the Backstage datamart and ran a proof of concept (PoC) for a new data platform on Snowflake.',
        },
      ],
    },
    {
      role: 'Data Engineer',
      company: 'Micropole',
      logo: 'micropole',
      contract: { fr: 'CDI', en: 'Full-time' },
      location: { fr: 'Levallois-Perret, Île-de-France', en: 'Levallois-Perret, France' },
      start: '2017-09',
      end: '2019-11',
      summary: {
        fr: "Data engineer dans un cabinet de conseil, livrant des plateformes data et de l'analytique client pour de grands comptes de la distribution, des télécoms et de la banque.",
        en: 'Data engineer in a consulting firm, delivering data platforms and customer analytics for large accounts in retail, telecom and banking.',
      },
      highlights: [
        {
          fr: "Lapeyre : conception et construction d'une vue client unique et de datamarts marketing (Cloudera, Spark, Kafka), restitués dans MicroStrategy.",
          en: 'Lapeyre: designed and built a single customer view and marketing datamarts (Cloudera, Spark, Kafka), surfaced in MicroStrategy.',
        },
        {
          fr: 'Orange : reconstitution des parcours clients omnicanaux pour une vue client à 360° (Hortonworks, MongoDB, Google Cloud Platform).',
          en: 'Orange: reconstructed omnichannel customer journeys for a 360° customer view (Hortonworks, MongoDB, Google Cloud Platform).',
        },
        {
          fr: "Société Générale : structuration du data lake finance et intégration de nouvelles sources issues des métiers du groupe, en parallèle de la mise en place d'un environnement Azure.",
          en: "Société Générale: structured the finance data lake and integrated new sources across the group's business lines, alongside the set-up of an Azure environment.",
        },
      ],
    },
    {
      role: 'Data Engineer',
      company: 'Infotel',
      logo: 'infotel',
      contract: { fr: 'CDI', en: 'Full-time' },
      location: { fr: 'Paris et périphérie', en: 'Paris area, France' },
      start: '2015-12',
      end: '2017-08',
      summary: {
        fr: "Ingénieur big data dans un centre de services dédié à l'Office européen des brevets (OEB).",
        en: 'Big data engineer in a service center dedicated to the European Patent Office (EPO).',
      },
      highlights: [
        {
          fr: "Conception et construction d'une chaîne d'extraction, transformation et chargement (ETL) de la littérature non-brevet dans MongoDB : modèle de données, optimisation des requêtes et des index, et API.",
          en: 'Designed and built an extract, transform, load (ETL) pipeline loading non-patent literature into MongoDB: data model, query and index optimization, and an API.',
        },
        {
          fr: 'Maintenance et évolution de la plateforme de chargement des données bibliographiques (MongoDB, Spark, Scala), dont un audit technique de la base.',
          en: 'Maintained and extended the bibliographic data loading platform (MongoDB, Spark, Scala), including a technical audit of the database.',
        },
        {
          fr: "Développement d'une application complète (Java 8, Angular) pour citer des éléments d'une base de produits en ligne, intégrée à l'architecture existante.",
          en: 'Developed a full-stack application (Java 8, Angular) to cite items from an online product database, integrated into the existing architecture.',
        },
      ],
    },
    {
      role: 'Data Scientist',
      company: 'Orange',
      logo: 'orange',
      contract: { fr: 'CDI', en: 'Full-time' },
      location: { fr: 'Issy-les-Moulineaux', en: 'Issy-les-Moulineaux, France' },
      start: '2014-11',
      end: '2015-11',
      summary: {
        fr: "Ingénieur de recherche chez Orange Labs, sur la modélisation de la fiabilité des réseaux télécoms et des architectures cloud.",
        en: 'Research engineer at Orange Labs, modeling the reliability of telecom networks and cloud architectures.',
      },
      highlights: [
        {
          fr: "État de l'art de la modélisation de la fiabilité et de la disponibilité des réseaux télécoms et des architectures cloud.",
          en: 'Conducted a state of the art on reliability and availability modeling for telecom networks and cloud architectures.',
        },
        {
          fr: 'Modèles probabilistes de la fiabilité du stockage hétérogène et de la perte moyenne de fichiers dans les structures cloud, avec le code de calcul Python associé.',
          en: 'Built probabilistic models of the reliability of heterogeneous storage and of average file loss in cloud structures, with the associated Python computation code.',
        },
        {
          fr: "Publication de deux articles en conférences internationales et présentation lors d'une école d'été internationale.",
          en: 'Published two papers at international conferences and presented at an international summer school.',
        },
      ],
    },
  ] as Experience[],
};
