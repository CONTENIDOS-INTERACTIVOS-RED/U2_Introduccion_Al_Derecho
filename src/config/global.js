export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '1',
        titulo:
          'Fuentes del Derecho: ley, jurisprudencia, costumbre y doctrina',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El Derecho y su relación con otras ciencias ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de las fuentes del Derecho',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '2',
        titulo:
          'Jerarquía normativa: Constitución, leyes, decretos y resoluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La Constitución: norma de normas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Leyes nacionales: estatutarias, orgánicas y ordinarias',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Decretos y resoluciones',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Costumbre, jurisprudencia y doctrina',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '3',
        titulo:
          'Derecho internacional y su incorporación al sistema jurídico colombiano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Sintesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-file-download',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Buenaga Ceballos, O. (2017). Introducción al derecho y a las ciencias jurídicas: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58991',
    },
    {
      referencia:
        'Guerra Zúñiga, E. D. L. (2013). Introducción al derecho: ( ed.). Corporación de Estudios y Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115029',
    },
    {
      referencia:
        'Nino, C. S. (2004). Introducción al análisis del derecho: (10 ed.). Editorial Ariel.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/100166',
    },
    {
      referencia:
        'Parra Lucán, M. A. (2015). Cuaderno I: la norma jurídica y fuentes del derecho: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34318',
    },
    {
      referencia:
        'Villamar Cruz, V. (2018). Introducción al estudio del derecho: ( ed.). IURE Editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40257',
    },
  ],
  glosario: [
    {
      termino: 'Constitución',
      significado:
        'norma suprema de un sistema jurídico que establece los principios y derechos fundamentales de un Estado y organiza su estructura y funcionamiento.',
    },
    {
      termino: 'Costumbre',
      significado:
        'práctica repetida y constante en una comunidad que, por su aceptación general, se convierte en fuente de derecho y tiene carácter normativo en ausencia de ley.',
    },
    {
      termino: 'Derecho Internacional',
      significado:
        'conjunto de normas que regulan las relaciones entre Estados y otros sujetos internacionales, integrándose al derecho interno bajo ciertos principios.',
    },
    {
      termino: 'Derecho Nacional',
      significado:
        'conjunto de normas jurídicas aplicables dentro de un Estado, establecidas por sus instituciones y adaptadas a su contexto particular.',
    },
    {
      termino: 'Doctrina',
      significado:
        'conjunto de estudios y opiniones de expertos en derecho que ayudan a interpretar y aplicar las normas jurídicas, aunque no tienen carácter vinculante.',
    },
    {
      termino: 'Fuente del Derecho',
      significado:
        'origen o causa de una norma jurídica que otorga validez y legitimidad al ordenamiento jurídico; incluye ley, costumbre, jurisprudencia y doctrina.',
    },
    {
      termino: 'Ius Cogens',
      significado:
        'normas imperativas de derecho internacional que prevalecen sobre cualquier norma interna o internacional contraria, como la prohibición de la esclavitud.',
    },
    {
      termino: 'Jerarquía Normativa',
      significado:
        'organización de las normas jurídicas en un sistema jurídico, estableciendo un orden de prevalencia de acuerdo con su rango.',
    },
    {
      termino: 'Jurisprudencia',
      significado:
        'conjunto de decisiones de los tribunales, especialmente de las altas cortes, que interpretan la ley y establecen precedentes para casos futuros.',
    },
    {
      termino: 'Ley',
      significado:
        'Ley	norma dictada por una autoridad legislativa con carácter obligatorio, que regula conductas y organiza la convivencia en un Estado.',
    },
    {
      termino: 'Monismo',
      significado:
        'teoría que considera al derecho interno e internacional como un solo sistema, otorgando prevalencia al derecho internacional.',
    },
    {
      termino: 'Norma',
      significado:
        'disposición de carácter obligatorio establecida para regular conductas en una sociedad, pudiendo ser leyes, decretos, resoluciones, entre otros.',
    },
    {
      termino: 'Precedente',
      significado:
        'decisión judicial que sirve de referencia y guía para resolver casos futuros similares, promoviendo la coherencia en la aplicación del derecho.',
    },
    {
      termino: 'Teoría Dualista',
      significado:
        'Teoría Dualista	teoría que considera al derecho internacional y al derecho interno como sistemas separados e independientes sin subordinación entre sí.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
