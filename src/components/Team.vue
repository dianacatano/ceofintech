<template>
    <!--Area para descripcion de participantes-->
    <section id="team">
        <a href="team.html">
          <h2 class="title">Nuestro Equipo</h2>
        </a>
        <div class="single_cat_right_content">
          <div class="row1">
            <div class="column">
              <div class="team">
                <div class="team-img">
                  <img src="../assets/img/Foto_Lorena_Herrera.jpg" alt="Lorena Herrera">
                </div>
                <div class="team-content">
                  <h2>Lorena Herrera</h2>
                  <h3>Equipo de Desarrollo</h3>
                  <!-- <p>Texto adicional</p> -->
                  <h4>dilohero@gmail.com</h4>
                </div>
                <div class="team-social">
                  <a href="https://www.linkedin.com/in/d1l0h3r0" class="social-li" target="_blank"> <i
                      class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/dilohero" class="social-gi" target="_blank"> <i
                      class="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="team">
                <div class="team-img">
                  <img src="../assets/img/Foto_Diana_Catano.jpg" alt="Diana Cataño">
                </div>
                <div class="team-content">
                  <h2>Diana Cataño</h2>
                  <h3>Equipo de Desarrollo</h3>
                  <!-- <p>Texto adicional</p> -->
                  <h4>dianacatano@gmail.com</h4>
                </div>
                <div class="team-social">
                  <a href="https://www.linkedin.com/in/diana-catano-guerrero/" class="social-li" target="_blank"> <i
                      class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/dianacatano" class="social-gi" target="_blank"> <i
                      class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row2">
            <div class="column">
              <div class="team">
                <div class="team-img">
                  <img src="../assets/img/Foto_Gherson_Grajales.jpg" alt="Gherson Grajales">
                </div>
                <div class="team-content">
                  <h2>Gherson Grajales</h2>
                  <h3>Product Owner</h3>
                  <!-- <p>Texto adicional</p> -->
                  <h4>ghersongrajales@gmail.com</h4>
                </div>
                <div class="team-social">
                  <a href="www.linkedin.com/in/gherson" class="social-li" target="_blank"> <i
                      class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/ghersongrajales" class="social-gi" target="_blank"> <i
                      class="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="team">
                <div class="team-img">
                  <img src="../assets/img/Foto_Sandra_Cabulo.jpg" alt="Sandra Cábulo">
                </div>
                <div class="team-content">
                  <h2>Sandra Cábulo</h2>
                  <h3>Equipo de Desarrollo</h3>
                  <!-- <p>Texto adicional</p> -->
                  <h4>sandracabulo@gmail.com</h4>
                </div>
                <div class="team-social">
                  <a href="www.linkedin.com/in/sacabulo-217b2478" class="social-li" target="_blank"> <i
                      class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/SandraCabulo" class="social-gi" target="_blank"> <i
                      class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="team">
                <div class="team-img">
                  <img src="../assets/img/Foto_Sergio_Cano.jpeg" alt="Sergio Cano">
                </div>
                <div class="team-content">
                  <h2>Sergio Cano</h2>
                  <h3>Equipo de Desarrollo</h3>
                  <!-- <p>Texto adicional</p> -->
                  <h4>sdcanom@gmail.com</h4>
                </div>
                <div class="team-social">
                  <a href="www.linkedin.com/in/sergio-cano92" class="social-li" target="_blank"> <i
                      class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/150712" class="social-gi" target="_blank"> <i
                      class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'Team',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* css team*/
.section-title {
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 80px;
  margin-top: 40px;
  text-align: center;
}

.section-title h2 {
  text-decoration: none;
  color: #202021;
}

.section-title a:visited {
  color: var(--azulOscuro);
}

/* .section-title h1 {
  display: inline-block;
  font-size: 33px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color3);
  margin: 0 0 5px;
  position: relative;
} */
.section-title h1::before {
  content: "";
  left: 0;
  position: absolute;
  height: 3px;
  right: 0%;
  background-color: var(--azulClaro);
  bottom: -5px;
}
.section-title a {
  text-decoration: none;
}

.section-title a:visited {
  color: var(--azulOscuro);
}

.container .section-title h1::before {
  left: 30%;
}
.row1,
.row2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.column {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
}
.team {
  margin-bottom: 30px;
}
.team .team-img {
  position: relative;
  font-size: 0;
  text-align: center;
}
.team .team-img img {
  width: auto;
  height: 200px;
  /* width: 160px;
  height: auto; */
  border-radius: 100%;
  border: 20px solid white;
}

.team .team-content {
  padding: 80px 5px 20px 5px;
  margin-top: -80px;
  text-align: center;
  background: white;
  border-radius: 10px;
}
.team .team-content h2 {
  font-family: "Sawarabi Gothic", sans-serif;
  /* font-family: "bebasregular"; */
  font-size: 22px;
  font-weight: 400;
  color: var(--azulOscuro);
  /* letter-spacing: 1px; */
}
.team .team-content h3 {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 15px;
  font-weight: 300;
}
.team .team-content h4 {
  color: var(--azulMedio);
  font-size: 15px;
  font-weight: 300;
  /* letter-spacing: 1px; */
  font-style: italic;
  margin-bottom: 0;
}
.team .team-content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.team .team-social {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 35px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.3s;
  font-size: 0;
  z-index: 1;
  opacity: 0;
}
.team:hover .team-social {
  opacity: 1;
}
.team .team-social a {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  padding: 11px 0 10px 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  text-align: center;
  color: var(--blanco);
  border-radius: 10px;
  transition: all 0.3s;
  margin-top: 50px;
}

.team .team-social a.social-li {
  background: var(--azulMedio);
}
.team .team-social a.social-gi {
  background: grey;
}

.team .team-social a:last-child {
  margin-right: 0;
}
.team:hover .team-social a {
  margin-top: 0;
}
.team .team-social a:hover {
  background: #222222;
}

/* Mobile Responsive */

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
  .column {
    max-width: 50%;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .column {
    max-width: 33.333333%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .column {
    max-width: 25%;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

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
