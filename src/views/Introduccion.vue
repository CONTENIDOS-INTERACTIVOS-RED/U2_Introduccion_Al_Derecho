<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p.mb-4 La comprensión del Derecho comienza con una pregunta esencial: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #e5f0f6 ")
          h5 ¿De dónde provienen las normas que organizan nuestra convivencia social y garantizan la justicia?  
          p.mb-4 La respuesta a esta pregunta radica en el estudio de las fuentes del Derecho, y su adecuada comprensión es fundamental para cualquier estudiante que aspire a dominar las bases del orden jurídico colombiano.
          .row.justify-content-end
            .col-auto: img(src='@/assets/curso/temas/1.svg', alt='' style="width: 83px ")
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="zoom-in"): img(src='@/assets/curso/temas/2.png', alt='')
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #efeadd ")
          p.mb-0 Esta unidad tiene como propósito introducir al estudiante en el análisis de las fuentes del Derecho y su jerarquía normativa, elementos que no solo son centrales para la teoría del Derecho, sino que también tienen una aplicación directa en la práctica jurídica. Comprender estas fuentes es indispensable para identificar la autoridad y legitimidad de las normas que rigen a la sociedad, así como para saber cómo y cuándo, deben aplicarse en distintos contextos.
    p.mb-4 En esta unidad: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Fuentes del Derecho")
            p.mb-0 El estudiante va a poder comprender que las fuentes del Derecho, como la ley, la jurisprudencia, la costumbre y la doctrina, son el origen de las normas que regulan todos los aspectos de la vida jurídica. La ley es la expresión más clara de la voluntad del legislador, pero no es la única norma que regula el comportamiento social. La jurisprudencia, por ejemplo, tiene un rol interpretativo crucial, dado que, a través de las decisiones judiciales, los jueces no solo resuelven conflictos, sino que también crean precedentes que guían futuras aplicaciones del Derecho. La costumbre, aunque con frecuencia subestimada, refleja el arraigo de prácticas sociales que adquieren relevancia normativa, mientras que la doctrina ayuda a interpretar y entender el Derecho, influyendo en su desarrollo y aplicación.
          .p-4(titulo="Jerarquía normativa")
            p.mb-0 Es imprescindible entender cómo están organizadas estas fuentes dentro del sistema jurídico. Aquí entra en juego la jerarquía normativa, que establece un orden de prelación entre las normas. En el caso colombiano, la Constitución ocupa la cúspide de este orden, siendo la norma de normas que garantiza los derechos fundamentales y los principios básicos del Estado social de derecho. Por debajo de ella se sitúan las leyes, decretos y resoluciones, cuya validez está condicionada por su conformidad con la Constitución. Este conocimiento no solo es teórico; es esencial para evitar conflictos normativos y aplicar correctamente las normas, respetando el principio de supremacía constitucional.
          .p-4(titulo="Derecho internacional")
            p.mb-0 Aprenderá sobre la importancia del Derecho internacional en el contexto colombiano. En un mundo globalizado, los Estados no pueden ignorar los compromisos adquiridos a nivel internacional. Los tratados y convenios ratificados por Colombia, no solo son obligatorios en el plano internacional, sino que también, en muchos casos, se integran al bloque de constitucionalidad, adquiriendo una relevancia equivalente a la de las normas constitucionales. Conocer cómo se incorpora el Derecho internacional al orden interno, es vital para garantizar que las decisiones jurídicas se alineen con los estándares internacionales en materia de derechos humanos, desarrollo económico, medio ambiente y otras áreas de interés global.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cada uno de estos enfoques ofrece una estructura adaptable a distintos tipos de conflicto y niveles de formalidad, permitiendo a las partes optar por el método más adecuado, según sus necesidades y la naturaleza del desacuerdo. Conozcamos más sobre cada uno de ellos.

            
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
