<template>
    <!--Area de slider de imagenes-->
    <div class="slider_area">
        <div class="slider">
        <ul class="bxslider">
            <li><img src="../assets/img/1.jpg" alt="" title="Crece el apetito por la renta fija colombiana" /></li>
            <li><img src="../assets/img/2.jpg" alt=""
                title="Hay 14 millones de empleos que no se han recuperado en América Latina" /></li>
            <li><img src="../assets/img/3.jpg" alt="" title="Los últimos cambios de la tributaria 2.0" /></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>

