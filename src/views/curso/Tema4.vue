<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 2 "Fuentes del Derecho y su jerarquía en Colombia" explora los elementos esenciales que originan y legitiman las normas jurídicas en el contexto colombiano. Esta unidad proporciona un análisis detallado de las distintas fuentes del Derecho, como la ley, la jurisprudencia, la costumbre y la doctrina, y su importancia en la práctica jurídica. Además, se estudia la jerarquía normativa, destacando la supremacía de la Constitución y el papel del Derecho internacional en el orden jurídico interno. Este enfoque integral permite a los estudiantes adquirir una comprensión profunda y práctica de cómo se estructura y aplica el Derecho en la sociedad, estableciendo un marco sólido para su desarrollo académico y profesional.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/temas/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
