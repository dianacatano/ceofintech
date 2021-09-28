<template>
  <div class="header">
      <header>
        <div class="header_area">
          <div class="logo floatleft"><a href="#"><img src="../assets/img/Logo.png" alt="" /></a></div>
          <!--Area del Home-->
          <div class="top_menu floatleft">
            <!-- menu nav flotante  -->
            <nav class="top_menu floatleft">
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="singup_view.html">Registro</a></li>
                <li><a href="login_view.html">Ingreso</a></li>
                <li><a href="suscribirse.html">Suscribirse</a></li>
              </ul>
            </nav>
          </div>

          <div class="social_plus_search floatright">
            <!--Redes sociales-->
            <div class="social">
              <ul>
                <li><a href="https://twitter.com/home?lang=es" class="twitter"></a></li>
                <li><a href="https://www.facebook.com/" class="facebook"></a></li>
                <li><a href="#" class="feed"></a></li>
              </ul>
            </div>

            <!--Area de busquedas-->
            <div class="search">
              <form action="#" method="post" id="search_form">
                <input type="text" value="Buscar noticias" id="s" />
                <input type="submit" id="searchform" value="search" />
                <input type="hidden" value="post" name="post_type" />
              </form>
            </div>

          </div>
        </div>

        <!--Area de menu del header-->
        <div class="main_menu_area">
          <!-- Menu principal -->
          <nav id="nav" class="main_menu_area">
            <ul id="nav">
              <!-- sub menu servicios -->
              <li><a href="#services">Servicios</a>
                <ul>
                  <li><a href="exchange.html">Divisas</a></li>
                  <li><a href="uvt.html">UVT</a></li>
                  <li><a href="uvr.html">UVR</a></li>
                </ul>
              </li>

              <li><a href="#news">Noticias</a>
                <ul>
                  <li><a href="./news01.html">Noticia1</a></li>
                  <li><a href="./news02.html">Noticia2</a></li>
                  <li><a href="./news03.html">Noticia3</a></li>
                  <li><a href="./news04.html">Noticia4</a></li>
                </ul>
              <li><a href="#team">Nuestro Equipo</a></li>
              <li><a href="contact.html">Contáctenos</a></li>
            </ul>
          </nav>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
