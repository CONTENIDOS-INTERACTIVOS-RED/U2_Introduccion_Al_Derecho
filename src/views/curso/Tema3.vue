<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'3. Derecho internacional y su incorporación al sistema jurídico colombiano'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    p.mb-4 La relación entre el derecho interno y el derecho internacional, ha sido un tema de discusión que ha dado lugar a dos teorías principales:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/46.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Teoría Dualista (Triepell)
            p.mb-0.text-center Considera que el derecho internacional y el derecho interno son sistemas independientes y separados. Según esta teoría, ninguno de los dos sistemas tiene superioridad sobre el otro; por tanto, cada uno debe aplicarse en su propio ámbito sin subordinación (Jiménez de Aréchaga, 1978).
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/47.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Teoría Monista (Kelsen y Scelle)
            p.mb-0.text-center Argumenta que tanto el derecho nacional como el internacional forman parte de un solo sistema jurídico, y el derecho internacional debe prevalecer sobre el derecho interno. En la práctica internacional y en Colombia, se ha adoptado esta visión monista, que otorga primacía al derecho internacional (Monroy Cabra, 2002).
    p.mb-4 Este criterio de integración permite clasificar las normas, según su jerarquía, otorgando prioridad a las normas internacionales cuando se refieren a derechos humanos y derechos fundamentales.
      br
      br
      |#[b A continuación, conozcamos las normas internacionales con jerarquía superior:]   
    .bg-video.mn.mb-5.p-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.order-2
            h4 Normas de ius cogens
            p Son normas internacionales imperativas que prevalecen sobre cualquier otra normativa interna, pues son aceptadas universalmente como obligatorias. La Convención de Viena sobre el Derecho de los Tratados, define el ius cogens como normas que "no admiten acuerdo en contrario", como la prohibición de la esclavitud o la discriminación racial (Convención de Viena, 1969, art. 53). Si en Colombia se aprobara una ley que contradijera estas normas, esta ley sería nula (Monroy Cabra, 2002).
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/48.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Primacía de la Carta de la ONU
            p Según el artículo 103 de la Carta de la ONU, en caso de conflicto entre las obligaciones derivadas de esta y otros convenios internacionales, prevalecen las obligaciones establecidas en la Carta de la ONU. Así, Colombia debe dar prioridad a los compromisos asumidos con la ONU aún, cuando entren en conflicto con otras normas internacionales (Organización de las Naciones Unidas, 1945, art. 103).
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/49.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.order-2
            h4 Tratados de derechos humanos ratificados por Colombia 
            p La Constitución colombiana establece que los tratados de derechos humanos ratificados por el Congreso, que impiden la limitación de estos derechos en estados de excepción, tienen prioridad en el orden jurídico interno (Constitución Política de Colombia, 1991, art. 93). Por ejemplo, si se decreta un estado de emergencia en el país, los derechos fundamentales protegidos por tratados internacionales seguirán vigentes
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/50.png', alt='Texto que describa la imagen')
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
