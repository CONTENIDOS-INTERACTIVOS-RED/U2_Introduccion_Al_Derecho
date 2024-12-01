<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'1. Fuentes del Derecho: ley, jurisprudencia, costumbre y doctrina'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden.bg-1
    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/temas/6.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        .p-4(data-aos="fade-left" style="background-color:#fcfaeb ").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las fuentes del Derecho son las claves para entender cómo se crean, interpretan y aplican las normas que rigen nuestra sociedad. Cada fuente, ya sea la ley, la jurisprudencia, la costumbre o la doctrina, tiene su propio rol y peso en el sistema jurídico colombiano. Comprender estas fuentes no es solo una cuestión teórica: es fundamental para saber cómo funciona el Derecho en la práctica. En esta sección, se explorará el origen y la importancia de cada una de estas fuentes, descubriendo cómo interactúan entre sí y cómo impactan en nuestra vida cotidiana. 

        p(data-aos="fade-left") Al finalizar este tema, se tendrán herramientas para    responder a interrogantes como:
          br
          br
          |#[b ¿Por qué una norma tiene más fuerza que otra? ¿Qué pasa cuando no existe una ley escrita que regule un caso específico?]
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 El Derecho y su relación con otras ciencias 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p.mb-4(data-aos="fade-right") Las fuentes del Derecho constituyen un tema central en el estudio jurídico, al referirse al origen y legitimación de las normas que rigen la sociedad. Diversos enfoques y teorías han intentado explicar su naturaleza, desde la perspectiva histórica y social de Savigny, que enfatiza la conciencia colectiva, hasta la teoría normativa de Kelsen, que ve al Derecho como un sistema jerárquico de normas. A continuación, en el PDF Concepto de fuentes, se exploran estas y otras concepciones, destacando la relevancia de las fuentes formales, materiales e históricas, así como su impacto en la creación y aplicación del Derecho en diferentes contextos sociales y temporales.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Clasificación de las fuentes del Derecho.

      .col-lg-5.col-7.mb-lg-0.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/7.png', alt='')
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Clasificación de las fuentes del Derecho
    .row.mb-3
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/temas/9.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        .p-4(data-aos="fade-left" style="background-color:#fcfaeb ").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudio de las fuentes del Derecho es crucial para comprender cómo se origina, manifiesta y aplica, el orden normativo que regula la vida en sociedad. Las normas jurídicas no surgen de manera arbitraria, sino que responden a necesidades y circunstancias específicas, y se estructuran a través de mecanismos formales que les otorgan validez y aplicabilidad.
    p.mb-5 En este sentido, las fuentes del Derecho se clasifican en fuentes reales o materiales y fuentes formales, cada una desempeñando un rol esencial en la construcción del sistema jurídico. Entender esta clasificación es fundamental para el estudiante de Derecho, puesto que le permitirá identificar no solo el origen de las normas, sino también cómo se organizan y operan dentro del ordenamiento jurídico.   
    .mn.p-5.mb-5(style="background-color: #efeadd ")
      .row.justify-content-center.align-items-center
        .col-lg-7.order-2
          h4 Clasificación de las fuentes del Derecho
          p.mb-4(data-aos="fade-right") En el PDF Clasificación de las fuentes del Derecho, se encontrará un análisis detallado sobre la clasificación de las fuentes del Derecho, abordando tanto las fuentes reales o materiales como las fuentes formales. Se explicará cómo las fuentes reales incluyen factores externos como circunstancias históricas, sociales, económicas y culturales que influyen en la creación de normas jurídicas, mientras que las fuentes formales se enfocan en los procedimientos y mecanismos a través de los cuales las normas adquieren validez y se aplican en el sistema jurídico. También se explorarán las aportaciones de destacados juristas y teóricos, como Abelardo Torré, Franaçois Gény y Legaz y Lacambra, quienes han contribuido a comprender la distinción y la importancia de estas fuentes en el desarrollo y la coherencia del Derecho.

          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Concepto de fuentes.

        .col-lg-5.col-7.mb-lg-0.mb-3
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/10.png', alt='')
    p.mb-4 Las fuentes formales se clasifican generalmente en cuatro categorías principales:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/11.svg', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="13.4%" y="77.5%" numero="+" style="background-color: #ffffff")
        .h5.mb-2 Legislación
        p La ley es la principal fuente formal del Derecho en la mayoría de los sistemas jurídicos, incluido el colombiano. Es la norma escrita promulgada por el poder legislativo que regula una amplia gama de actividades sociales, económicas y políticas. La legislación tiene la ventaja de ser clara y precisa, proporcionando un marco normativo que facilita su interpretación y aplicación. La Constitución Política de Colombia es el ejemplo más importante de legislación, porque establece los principios fundamentales que rigen todo el sistema jurídico.)
      .tarjeta.p-3(x="33.5%" y="77.5%" numero="+" style="background-color: #ffffff")
        .h5.mb-2 Costumbre
        p La costumbre es una práctica reiterada y aceptada por la comunidad que, con el tiempo, adquiere fuerza normativa. En ausencia de una ley escrita, la costumbre puede funcionar como una fuente supletoria, llenando vacíos legales y proporcionando soluciones a problemas que la legislación no ha previsto. Abelardo Torré señala que la costumbre jurídica, cuando es aceptada por el sistema legal, puede tener la misma fuerza que una ley (Torré, 1944).
      .tarjeta.p-3(x="53.6%" y="77.5%" numero="+" style="background-color: #ffffff")
        .h5.mb-2 Jurisprudencia
        p Aunque no siempre se considera una fuente formal en sentido estricto, la jurisprudencia, es decir, las decisiones de los tribunales, tiene un papel fundamental en la interpretación y aplicación del Derecho. Los jueces, al resolver casos concretos, crean precedentes que guían la interpretación de las normas en casos futuros. En muchos sistemas jurídicos, incluyendo el colombiano, la jurisprudencia de los altos tribunales como la Corte Constitucional, la Corte Suprema de Justicia o el Consejo de Estado, tiene un peso significativo en la interpretación de la ley.
      .tarjeta.p-3(x="73.7%" y="77.5%" numero="+" style="background-color: #ffffff")
        .h5.mb-2 Doctrina
        p Al igual que la jurisprudencia, la doctrina no es considerada una fuente formal en sentido estricto, pero ejerce una influencia considerable sobre la interpretación del Derecho. La doctrina se refiere a los estudios, opiniones y teorías de juristas y académicos, que ayudan a esclarecer el significado y alcance de las normas jurídicas. Aunque no tiene fuerza obligatoria, la doctrina puede influir en los legisladores y jueces en la toma de decisiones, especialmente en áreas donde la legislación es ambigua o insuficiente.
    p.mb-4 La clasificación de las fuentes del Derecho en materiales y formales, nos proporciona una visión integral del proceso de creación normativa:
    .px-4.px-md-5.pb-md-3
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .custom-image-card.h-100
            img.custom-image-card__image(src="@/assets/curso/temas/12.png" alt="")
            .custom-image-card__text.p-4
              h4.mb-2.text-center Fuentes materiales
              p.mb-0.text-center Nos explican los factores sociales, históricos y económicos que influyen en la creación de normas
        .col-lg-6.mb-4(data-aos="zoom-in-down")
          .custom-image-card.h-100
            img.custom-image-card__image(src="@/assets/curso/temas/13.png" alt="")
            .custom-image-card__text.p-4
              h4.mb-2.text-center Fuentes formales
              p.mb-0.text-center Son los mecanismos por los cuales esas normas adquieren fuerza y se hacen aplicables.
    p.mb-4 Comprender esta distinción es esencial para el estudio del Derecho, dado que permite al estudiante y al operador jurídico entender no solo cómo se originan las normas, sino también cómo se organizan y operan dentro del sistema legal.
    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/temas/15.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La concepción de Cueto Rúa y Cossio, sugiere que la división tradicional entre fuentes formales y materiales no debería ser rígida, porque todas las fuentes del Derecho son, en el fondo, hechos sociales. Tanto las leyes como las costumbres, la jurisprudencia y la doctrina reflejan criterios sociales que buscan solucionar conflictos de intereses dentro de una comunidad. La ley y la costumbre, según Cueto Rúa, no solo son fuentes formales, sino que también desempeñan un papel material, al expresar valores sociales y ayudar a resolver casos con base en criterios relevantes para la comunidad.
        .p-4(data-aos="fade-left" style="background-color:#fcfaeb ").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  Cossio también afirma que el carácter formal o material de las fuentes, depende de cómo se utilicen para resolver conflictos sociales. Su teoría egológica del Derecho, pone de manifiesto que las fuentes del Derecho integran aspectos normativos, axiológicos y empíricos, y que estos tres momentos están unidos intrínsecamente en la práctica jurídica. Las sentencias judiciales no solo deben cumplir con las normas legales, sino que deben reflejar los valores y las condiciones socioeconómicas del momento, lo que les otorga una fuerza de convicción adicional.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
