<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'2. Jerarquía normativa: Constitución, leyes, decretos y resoluciones'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/temas/17.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        .p-4(data-aos="fade-left" style="background-color:#efeadd ").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La teoría de la jerarquía normativa, establece un orden de prevalencia entre las normas de un sistema jurídico. Este orden se organiza en niveles o "escalones", en los cuales las normas superiores tienen un rango de autoridad mayor y controlan a las normas inferiores. La jerarquía normativa es fundamental para mantener la coherencia y el funcionamiento del sistema legal, garantizando que ninguna norma de menor jerarquía contradiga a una de mayor nivel.
    p.mb-4 Los principios fundamentales de la jerarquía normativa se resumen en: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/18.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Supremacía")
            p.mb-0 Las normas de nivel superior siempre prevalecen sobre las de nivel inferior. Esto significa que, si existe un conflicto entre normas de diferente rango, se aplica la norma de mayor jerarquía.
          .p-4(titulo="Control de constitucionalidad")
            p.mb-0 Las normas de nivel inferior deben ser coherentes con la Constitución (la norma suprema), y el poder judicial tiene la facultad de declarar inconstitucionales las normas inferiores que violen la Constitución.
          .p-4(titulo="Organización estructurada del sistema legal")
            p.mb-0 La jerarquía normativa organiza el sistema en niveles claros y definidos. Este orden permite que las leyes, decretos y otras normas sean aplicadas en forma coherente y eficaz.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 La Constitución: norma de normas
    p.mb-4 La Constitución como norma de normas, representa la evolución del constitucionalismo, desde los primeros intentos de limitar el poder absoluto, hasta un sistema donde los principios y derechos fundamentales, rigen la estructura del Estado y la vida en sociedad. La supremacía constitucional garantiza que el Estado actúe dentro de un marco legal que protege los derechos de los ciudadanos, limitando el poder y promoviendo la justicia. El siguiente video nos amplía la información sobre la historia de la Constitución.
    .mn.mb-5.bg-video.p-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Leyes nacionales: estatutarias, orgánicas y ordinarias
    p.mb-4 La comprensión del Derecho comienza con una pregunta esencial: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100.p-4(style="background-color: #e5f0f6 ")
          p.mb-4 La ley se refiere a una norma jurídica que emana de una autoridad legítima, como el poder legislativo, y que tiene carácter obligatorio para todos los ciudadanos dentro de un territorio determinado. La ley regula la conducta de las personas, establece derechos y obligaciones, y busca mantener el orden social y la justicia. 
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="zoom-in"): img(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100.p-4(style="background-color: #efeadd ")
          p.mb-0 Esta unidad tiene como propósito introducir al estudiante en el análisis de las fuentes del Derecho y su jerarquía normativa, elementos que no solo son centrales para la teoría del Derecho, sino que también tienen una aplicación directa en la práctica jurídica. Comprender estas fuentes es indispensable para identificar la autoridad y legitimidad de las normas que rigen a la sociedad, así como para saber cómo y cuándo, deben aplicarse en distintos contextos.
    p.mb-4 A continuación, conozcamos sobre la historia de las leyes:
    .bg-video.mn.mb-5.p-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.order-2
            h4 Civilizaciones antiguas
            p Las leyes eran consideradas de origen divino o como mandatos del soberano, y se establecían de manera unilateral. Ejemplos clásicos son el Código de Hammurabi en Babilonia (aproximadamente 1754 a.C.), uno de los primeros conjuntos de leyes escritas. Este código recogía normas de conducta y sanciones bajo la premisa de justicia retributiva, como "ojo por ojo, diente por diente". Las leyes de este periodo, buscaban mantener el orden social y asegurar la obediencia a la autoridad, ya fuera divina o del gobernante.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/20.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Grecia clásica
            p La ley comenzó a asociarse con el concepto de razón y justicia. Filósofos como Platón y Aristóteles, sostenían que las leyes debían guiarse por la racionalidad y la búsqueda del bien común, no por la voluntad arbitraria de un gobernante (Castello  , 1993).
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/21.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Roma
            p Se creó un sistema de leyes aplicables a todos los ciudadanos. El Derecho Romano, especialmente el Corpus Juris Civilis de Justiniano (527 d.C.), estableció un marco de leyes que regulaba diversas áreas de la vida, desde el comercio hasta el matrimonio, y que fue fundamental en el desarrollo del concepto moderno de ley.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Edad Media
            p El concepto de ley fue influenciado por la doctrina del derecho natural, que sostenía que las leyes deben estar basadas en principios universales y justos, otorgados por Dios, o discernibles por la razón humana. Según Santo Tomás de Aquino, la ley debía ser una orden racional orientada al bien común, promulgada por quien tiene la autoridad para hacerlo en la comunidad (De Aquino, 2005). En este contexto, la ley escrita no era suficiente por sí misma, sino que debía coincidir con estos principios superiores, para ser justa.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Modernidad
            p Para filósofos como John Locke y Jean-Jacques Rousseau, el concepto de ley se transforma y comienza a concebirse como una expresión de la voluntad general. En su obra "El contrato social", Rousseau (1762/2001) sostenía que las leyes debían ser el reflejo de la voluntad colectiva y servir al interés de todos los ciudadanos. Esta visión influenció profundamente las revoluciones francesa y americana y fue la base para el constitucionalismo moderno, donde la ley es el resultado de un proceso democrático y es el mecanismo principal para limitar el poder y proteger los derechos de los ciudadanos.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Siglo XX
            p La concepción de ley incorporó la idea de justicia social y protección de los derechos fundamentales. Las constituciones modernas y las legislaciones nacionales y supranacionales, como las que surgen de las Naciones Unidas, han hecho de la ley un medio para proteger los derechos humanos y establecer principios de igualdad y equidad. Según Kelsen (1995), en la teoría pura del derecho, la ley es la norma fundamental de un sistema jurídico, la cual no depende de un mandato externo, sino de su propio orden interno y de la estructura normativa en la que se basa.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Actualidad
            p Las leyes no solo son nacionales, sino que existen normas supranacionales, como los tratados y convenios internacionales, que buscan garantizar derechos humanos universales y combatir problemas globales, como el cambio climático y el terrorismo. Esta evolución demuestra que el concepto de ley se ha adaptado y ampliado, pasando de ser una mera imposición del gobernante, a convertirse en un mecanismo de legitimación democrática y protección de derechos.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
    p.mb-4 Aterrizando el concepto de norma a Colombia, se denomina ley a la norma expedida por el Congreso de la República, en ejercicio de las competencias constitucionales de las que es titular. Se habla de tres tipos de normas: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/27.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Leyes estatutarias
            p.mb-0.text-center Tratan temas esenciales como derechos fundamentales y deben cumplir con un proceso de aprobación especial y un control previo de constitucionalidad. Un ejemplo es la Ley Estatutaria de Habeas Data, que garantiza el derecho a la privacidad de los ciudadanos al regular el uso de sus datos personales (Congreso de Colombia, 2008, Ley 1266).
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/28.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Leyes orgánicas
            p.mb-0.text-center Regulan aspectos como el presupuesto y el plan de desarrollo nacional. Actúan como normas marco para otras leyes, lo que les otorga una posición privilegiada dentro del sistema jurídico (Constitución Política de Colombia, 1991, art. 151).
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/29.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Leyes ordinarias
            p.mb-0.text-center Abarcan temas generales y son aprobadas siguiendo el proceso legislativo regular. Un ejemplo sería el Código Nacional de Policía y Convivencia (Congreso de Colombia, 2016, Ley 1801).
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #efeadd ")  
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") Queda claro que, en Colombia, la ley es una de las herramientas más importantes en la estructura normativa del país. Es el medio por el cual se regula la conducta de los ciudadanos y se establecen derechos y deberes que buscan el bienestar común y la justicia. Sin embargo, la ley no es simplemente una serie de normas impuestas, sino el resultado de un complejo proceso legislativo, diseñado para asegurar que cada proyecto sea analizado, discutido y revisado en profundidad, antes de convertirse en una norma obligatoria para todos. Su proceso de creación en el Congreso de la República y la importancia de cada fase en la elaboración legislativa, así como el papel de la sanción presidencial como último filtro para la promulgación de la norma. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/30.png', alt='')
    p.mb-4 La ley en el contexto jurídico colombiano, se entiende como una norma de carácter general, abstracto y obligatorio, destinada a regular las relaciones y conductas de las personas, dentro de un territorio específico. La ley establece derechos y obligaciones, y es la manifestación de la voluntad general en una sociedad democrática. De acuerdo con García Máynez (2002), la ley se puede definir como una "norma jurídica dictada, promulgada y sancionada por la autoridad pública, aún sin el consentimiento de los particulares". En el contexto colombiano, esta autoridad recae principalmente en el Congreso de la República, el cual tiene la función de debatir, aprobar o rechazar proyectos de ley, con el fin de garantizar que las normativas estén alineadas con los principios constitucionales y el bienestar general.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/31.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .p-4(style="background-color: #e5f0f6 ")
          p.mb-0 La presentación de proyectos de ley en Colombia, no está limitada únicamente a los miembros del Congreso. La Constitución Política de Colombia y otras normas, establecen que varios actores pueden iniciar el proceso legislativo: los miembros del Congreso, el Gobierno Nacional a través de los ministros, altas cortes como la Corte Constitucional y la Corte Suprema de Justicia, y otros entes de control como el Procurador General de la Nación y el Contralor General de la República. Además, los ciudadanos pueden proponer proyectos de ley siempre que la iniciativa esté respaldada por al menos el 5 % del censo electoral vigente. Este amplio abanico de actores, permite una mayor representatividad y asegura que las iniciativas legislativas, surjan de diversas perspectivas y necesidades sociales, fortaleciendo así la democracia participativa.
    p.mb-4.fw-bold Conozcamos su proceso:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Elaboración del proyecto de ley")
            p.mb-0 Es una etapa crucial en el proceso legislativo. Los proponentes deben analizar detenidamente el problema o necesidad social que se pretende abordar y deben contar con la asesoría de expertos, para garantizar la viabilidad de la solución propuesta. Asimismo, la participación ciudadana en esta fase, permite que la normativa proyectada responda a los intereses y necesidades reales de la sociedad. Una vez que el proyecto está redactado, debe cumplir con ciertos requisitos formales, entre ellos un título que lo identifique, el articulado que desarrolle las disposiciones y una exposición de motivos que justifique su necesidad y objetivos. Esta exposición de motivos es fundamental, pues permite que los legisladores y ciudadanos entiendan el propósito del proyecto y evalúen sus beneficios o posibles repercusiones.
          .p-4(titulo="Presentación del proyecto de ley")
            p.mb-0 Se presenta en la Secretaría General del Senado o de la Cámara de Representantes, donde se le asigna un número y se clasifica según la materia y el autor. Además, se envía a la Imprenta Nacional para su publicación en la Gaceta del Congreso, asegurando así la transparencia y el acceso público a la información legislativa. La clasificación del proyecto, facilita su organización en el Congreso y permite a los ciudadanos conocer los temas que serán debatidos.
          .p-4(titulo="Envío a una de las comisiones")
            p.mb-0 El proyecto de ley se envía la una de las comisiones constitucionales permanentes, según el tema a tratar. Las comisiones permanentes son grupos de congresistas especializados en ciertas áreas que analizan los proyectos en detalle. Este sistema de comisiones permite un estudio más profundo y técnico de los proyectos de ley, asegurando que solo los proyectos que cumplen con altos estándares jurídicos y sociales avancen en el proceso legislativo.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/32.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/33.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Ponencia")
            p.mb-0 Una vez asignado a una comisión, el presidente de esta, designa uno o varios ponentes, quienes son responsables de estudiar el proyecto y elaborar un informe, llamado ponencia. Este informe es clave en el proceso, dado que permite al resto de la comisión, entender las ventajas y posibles problemas del proyecto, y establece recomendaciones sobre su aprobación, modificación o archivo. Los debates en comisión, ofrecen la posibilidad de discutir artículo por artículo, enmendar, adicionar o suprimir partes del proyecto, lo que asegura un análisis profundo y detallado. Si la ponencia recomienda archivar el proyecto y la comisión lo acepta, el proyecto no sigue adelante, lo que demuestra que la fase en comisión, es uno de los filtros más rigurosos del proceso legislativo.
          .p-4(titulo="Aprobación")
            p.mb-0 Si el proyecto es aprobado en comisión, se presenta ante la plenaria de la respectiva cámara (Senado o Cámara de Representantes), donde se realiza un segundo debate. En esta etapa, el proyecto vuelve a ser objeto de discusión detallada. El coordinador ponente expone el proyecto y los congresistas, así como los ministros, tienen la oportunidad de expresar sus opiniones. Si bien esta fase es similar a la del debate en comisión, su alcance es mayor, porque involucra a todos los congresistas, lo cual añade un nivel de revisión democrática. Si el proyecto es aprobado, pasa a la otra cámara donde se repite el proceso. Este doble examen asegura que las normas que avanzan hacia la sanción presidencial hayan sido revisadas con rigurosidad y que cuentan con el respaldo de ambas cámaras.
          .p-4(titulo="Sanción presidencial")
            p.mb-0 Es la fase final del proceso legislativo. El proyecto de ley aprobado por ambas cámaras, es remitido al presidente de la República, para su ratificación. La sanción representa un último filtro, pues el presidente puede aceptar el proyecto o devolverlo al Congreso, con objeciones. En caso que el presidente considere que el proyecto es inconstitucional o contrario al bienestar del país, puede objetarlo, y el proyecto debe regresar al Congreso, para un nuevo análisis. Este control evita que proyectos de ley que puedan ser perjudiciales para el interés público o que violen principios constitucionales, se conviertan en ley. Una vez sancionado, el proyecto se promulga y adquiere fuerza obligatoria para todos los ciudadanos, cerrando así el ciclo legislativo.
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Decretos y resoluciones
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p.mb-4(data-aos="fade-right") Los decretos y resoluciones son instrumentos esenciales en la administración pública, utilizados para implementar y ejecutar las leyes en distintos niveles. Los decretos, emitidos por el presidente de la República u otros altos funcionarios, tienen un carácter normativo obligatorio y cumplen la función de desarrollar o complementar leyes, regulando situaciones específicas y facilitando su aplicación práctica. Se dividen en varias categorías, como decretos reglamentarios, que precisan el alcance de las leyes; decretos leyes, que se emiten con facultades extraordinarias; decretos legislativos, usados en estados de excepción; y decretos administrativos, que aplican disposiciones legales y constitucionales. Por otro lado, las resoluciones, emitidas por funcionarios o entidades públicas como ministerios o alcaldías, regulan aspectos más concretos y técnicos, cumpliendo con las políticas establecidas por leyes y decretos, pero con un alcance limitado y menor jerarquía. Entender las diferencias en jerarquía, alcance y función entre decretos y resoluciones es clave para comprender su papel en la estructura normativa. A continuación, en el PDF Decretos y resoluciones, se detallarán las características de estos actos administrativos.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Decretos y resoluciones.

      .col-lg-5.col-7.mb-lg-0.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/34.png', alt='')
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Costumbre, jurisprudencia y doctrina
    p.mb-4 La costumbre, la jurisprudencia y la doctrina, son reconocidas como fuentes del derecho las cuales complementan y enriquecen la interpretación y aplicación de las normas legales. Estas fuentes son esenciales en los sistemas jurídicos, puesto que permiten llenar vacíos normativos, adaptar el derecho a nuevas realidades sociales y asegurar una interpretación coherente y razonada de las normas. A continuación, se exploran estas fuentes con mayor profundidad y se incluyen citas de autores relevantes en el ámbito jurídico.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        h3 La Costumbre
        p.mb-0 La costumbre, la jurisprudencia y la doctrina, son reconocidas como fuentes del derecho las cuales complementan y enriquecen la interpretación y aplicación de las normas legales. Estas fuentes son esenciales en los sistemas jurídicos, puesto que permiten llenar vacíos normativos, adaptar el derecho a nuevas realidades sociales y asegurar una interpretación coherente y razonada de las normas. A continuación, se exploran estas fuentes con mayor profundidad y se incluyen citas de autores relevantes en el ámbito jurídico.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/35.png', alt='')
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/35.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Costumbre praeter legem
            p.mb-0.text-center Es la que complementa la ley en situaciones donde existe un vacío normativo. Se aplica cuando no hay una norma específica para regular un determinado asunto, siempre y cuando no contradiga normas de rango superior. Este tipo de costumbre es común en el derecho comercial, donde las prácticas de mercado se reconocen como fuentes adicionales.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/36.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Costumbre #[em secundum legem]
            p.mb-0.text-center Se utiliza para interpretar y complementar la ley en áreas donde el lenguaje de la norma es ambiguo o puede dar lugar a múltiples interpretaciones. Según García Máynez (1965), la costumbre secundum legem "se admite para aclarar el sentido de la ley, permitiendo una interpretación que responde a la realidad social y evita la aplicación literal cuando esta no es suficiente" (p. 52).
    p.mb-5 La Constitución Política de Colombia en su artículo 230, reconoce la costumbre como un criterio auxiliar, junto con la equidad, la jurisprudencia y los principios generales del derecho. Sin embargo, en Colombia la costumbre tiene limitaciones, ya que solo es permitida si no contradice una ley escrita o el ordenamiento superior (Constitución Política de Colombia, 1991, art. 230). 
    h3 La Jurisprudencia
    p.mb-4 La jurisprudencia se refiere a las decisiones judiciales, especialmente de las altas cortes, que interpretan la ley y establecen precedentes que orientan a los jueces en futuros casos. Al interpretar y aplicar las normas en casos concretos, las decisiones de los tribunales crean una línea jurisprudencial que da coherencia y previsibilidad al sistema jurídico.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/38.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .p-4.mb-4(style="background-color:#efeadd  ")
          p.mb-0 De acuerdo con Carbonell (2002), la jurisprudencia es "una fuente del derecho que contribuye a la uniformidad y certeza del ordenamiento, proporcionando un marco de referencia para la resolución de casos similares en el futuro". En Colombia, la Corte Constitucional tiene un papel fundamental en la protección de los derechos constitucionales y sus decisiones de control de constitucionalidad son de obligatorio cumplimiento, por lo que su jurisprudencia es vinculante para todas las autoridades del país (Corte Constitucional, 1993, Sentencia C-486). 
        p.mb-0  La teoría del precedente, especialmente desarrollada en los sistemas de derecho anglosajón, ha influido en el fortalecimiento de la jurisprudencia en los sistemas de derecho civil, como el colombiano. Según Guastini (1999), “la adopción de precedentes en sistemas de tradición civilista contribuye a la estabilidad del derecho y a la protección de la igualdad ante la ley, al garantizar que las decisiones judiciales sigan un mismo criterio” (p. 132). En Colombia, aunque no existe una obligación de seguir el precedente en todos los casos, la Corte Constitucional ha promovido el respeto al precedente para proteger los derechos y asegurar coherencia en el sistema.
    h3 La Jurisprudencia
    p.mb-4 La doctrina es el conjunto de estudios, interpretaciones y opiniones de expertos en derecho que contribuyen al análisis y desarrollo de los principios y normas jurídicas. Aunque la doctrina no es vinculante, su influencia es considerable, ya que proporciona argumentos y fundamentos teóricos que enriquecen la práctica jurídica y guían a los jueces y legisladores en la interpretación del derecho. 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4.mb-4(style="background-color: #dfe2e9 ")
          p.mb-0 De acuerdo con García Máynez (2002), la doctrina "constituye una fuente auxiliar importante, pues ofrece a los operadores jurídicos elementos para entender y aplicar el derecho de manera fundamentada y racional". La doctrina no solo influye en el ámbito académico, sino que también se convierte en un recurso importante en los tribunales y en el desarrollo legislativo, donde los estudios y análisis de expertos pueden inspirar reformas legales. 
        p.mb-0 La doctrina cumple varias funciones, entre ellas:
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/39.png', alt='')
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/40.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Función orientadora
            p.mb-0.text-center Al interpretar las normas, la doctrina ayuda a los jueces a fundamentar sus decisiones, especialmente en casos complejos o novedosos. Carbonell (2002) menciona que “la doctrina ofrece una base teórica y argumentativa que permite a los jueces fundamentar sus decisiones con rigor”.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/41.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Función innovadora
            p.mb-0.text-center La doctrina también es fundamental para el progreso del derecho, ya que introduce ideas, teorías y análisis que pueden influir en reformas legales o jurisprudenciales. En este sentido, Guastini (1999) argumenta que “la doctrina promueve la renovación del derecho, ofreciendo una perspectiva crítica y constructiva sobre su interpretación y aplicación” (p. 143).
    p.mb-4 Aunque cada una de estas fuentes tiene características y funciones diferentes, en conjunto complementan y enriquecen el sistema jurídico:
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="La costumbre " :icon="require('@/assets/curso/temas/45.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/42.png', alt='')
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Costumbre 
            p La costumbre aporta flexibilidad y permite que el derecho se adapte a las prácticas sociales, aunque su uso está limitado cuando se opone a la ley escrita.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="La jurisprudencia " :icon="require('@/assets/curso/temas/45.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/43.png', alt='')
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 La jurisprudencia 
            p La jurisprudencia proporciona estabilidad y coherencia al derecho, al establecer precedentes que guían la resolución de futuros casos similares.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="La doctrina " :icon="require('@/assets/curso/temas/45.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/44.png', alt='')
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 La doctrina 
            p La doctrina es una fuente de análisis y reflexión que ayuda a los operadores jurídicos a interpretar y aplicar el derecho con un enfoque teórico y crítico.
        




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
