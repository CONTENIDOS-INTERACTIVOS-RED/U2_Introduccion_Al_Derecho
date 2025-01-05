<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Fuentes del Derecho y su jerarquía en Colombia'" :subTitulo="'3. Derecho internacional y su incorporación al sistema jurídico colombiano'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden.bg-3
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
            p La Constitución colombiana establece que los tratados de derechos humanos ratificados por el Congreso, que impiden la limitación de estos derechos en estados de excepción, tienen prioridad en el orden jurídico interno (Constitución Política de Colombia, 1991, art. 93). Por ejemplo, si se decreta un estado de emergencia en el país, los derechos fundamentales protegidos por tratados internacionales seguirán vigentes.
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/50.png', alt='Texto que describa la imagen')
    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61366?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col" target="_blank" rel="noopener noreferrer") Pascual C. (2015) Norma Mundi Editorial Trotta. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/gHb0cqdLAg4?si=kcOS8DChF71mp_5b" target="_blank" rel="noopener noreferrer") Universidad autónoma del caribe (7 de octubre de 2022) Seminario de derecho internacional. 
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Los tratados internacionales no tienen ninguna influencia en el sistema jurídico colombiano.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'La jerarquía normativa evita que las normas inferiores contradigan las normas superiores.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La Constitución colombiana permite que la costumbre actúe como criterio auxiliar de interpretación.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El derecho internacional y el derecho nacional son completamente independientes según la teoría monista.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Los decretos emitidos por el Presidente en Colombia son de igual jerarquía que las leyes.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
