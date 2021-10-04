<template>
    <!--Sección de Noticias-->
    <section id="news">
        <h2 class="title"> Noticias a un click</h2>
        <a class="more" href="./news02.html">more</a>
        <div class="single_left_coloum floatleft"> 
            <a href="./news02.html"><img src="../assets/img/single_featured.png" alt="" /></a>
            <h3>¿Llegó la hora de subir la tasa de interés?: esto dice el Banrep</h3>
            <p>a rápida recuperación de Colombia y la creciente presión inflacionaria significan que el banco central
              deberá reducir la cantidad de estímulo que está proporcionando a la economía, dijo Leonardo Villar,
              gerente general del Banco de la República.</p>
            <a class="readmore" href="#">Leer mas</a>
        </div>

        <div class="single_left_coloum floatleft"> 
            <a href="./news03.html"><img src="../assets/img/single_featured.png" alt="" /></a>
            <h3>Coltejer anunció el cese de sus operaciones por lo que queda de 2021</h3>
            <p>La textilera colombiana Coltejer anunció, este jueves 9 de septiembre, el cese de sus operaciones por lo
              que resta del 2021.
              A mediados del pasado julio, la compañía había paralizado la producción de textiles. </p>
            <a class="readmore" href="./news03.html">Leer mas</a>
        </div>

        <div class="single_left_coloum floatleft"> 
            <a href="./news04.html"><img src="../assets/img/single_featured.png" alt="" /></a>
            <h3>Así va el debate del Presupuesto General de la Nación 2022</h3>
            <p>as Comisiones Económicas del Congreso de la República avanzan en la discusión de la ley de Presupuesto
              General de la Nación para 2022,
              con el fin de construir conjuntamente la partida presupuestal y ejecución de recursos para el próximo año.
            </p>
            <a class="readmore" href="./news04.html">Leer mas</a>
        </div>

        <div class="single_left_coloum floatleft"> <img src="../assets/img/single_featured.png" alt="" />
            <h3>Economía de la zona euro superará este año su nivel previo al covid</h3>
            <p>a presidenta del Banco Central Europeo (BCE), Christine Lagarde, estimó este jueves que la economía de la
              zona euro va a "superar"
              antes de finales de año su nivel previo a la pandemia, tras la revisión al alza por parte de la
              institución de su proyección de crecimiento para 2021.</p>
            <a class="readmore" href="#">Leer mas</a>
        </div>

        <!--Noticias laterales-->
        <div class="sidebar floatright">
            <div class="single_left_coloum floatleft">

            </div>
            <ul>
                <li>
                    <div class="single_cat_right_content">
                        <h3>Ayudas a morosos que se aprobaron en la conciliación de la tributaria</h3>
                        <p>Aplican para quienes tengan multas de tránsito y obligaciones atrasadas con la Dian, entre otras.
                        </p>
                        <p class="single_cat_right_content_meta"><a href="./news02.html"><span>Leer mas</span></a> hace 3
                        horas</p>
                    </div>
                </li>
                <li>
                    <div class="single_cat_right_content">
                        <h3>Karen Abudinen oficializa su renuncia al Ministerio TIC</h3>
                        <p>Desde el Gobierno consideraban innecesario el desgaste que se está viviendo.</p>
                        <p class="single_cat_right_content_meta"><a href="./news03.html"><span>Leer mas</span></a> hace 3 horas</p>
                    </div>
                </li>
                <li>
                    <div class="single_cat_right_content">
                        <h3>Los puntos que se conciliaron en la Ley de reforma tributaria</h3>
                        <p>Se acogieron facilidades de pago para multas de tránsito, y modificaciones en ayudas a sistemas de
                            transporte, entre otros.</p>
                        <p class="single_cat_right_content_meta"><a href="./news04.html"><span>Leer mas</span></a> hace 3
                            horas</p>
                    </div>
                </li>
            </ul>
            <a class="popular_more" href="#">Mas</a>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        
    </section>
</template>

<script>
export default {
  name: 'News',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
