<template>

  <!-- Hero Image -->
  <v-content>
    <v-app-bar fixed=True>
      <v-row class="align-center">
        <v-col class="text-center">
          <v-btn class="mr-3" @click="$vuetify.goTo('#home')" text>Home</v-btn>
          <v-btn class="mr-3" @click="$vuetify.goTo('#projects')" text>Projects</v-btn>
          <v-btn class="mr-3" @click="$vuetify.goTo('#skills')" text>Skills</v-btn>
          <v-btn class="mr-3" @click="$vuetify.goTo('#about')" text>About Me</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <section>
      <v-parallax src="@/static/hongkong.jpeg" height="900">
        <v-overlay absolute=True opacity="0.35">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-3 font-weight-thin mb-4 white--text">MOISES SANCHEZ</h1>
              <h3 class="headline font-weight-thin white--text">Programmer-Problem Solver-Musician</h3>
              <v-col class="mt-5" cols="12">
                <v-btn class="ma-3" dark color="black" href="https://github.com/moisesjsanchez" target="_blank">
                  <v-icon small left class="fab fa-github-square" />
                  <div> Github </div>
                </v-btn>
                <v-btn class="ma-3" dark color="black" href="https://www.linkedin.com/in/moisesjsanchez/" target="_blank">
                  <v-icon small left class="fab fa-linkedin" />
                  <div> LinkedIn </div>
                </v-btn>
                <v-btn class="ma-3" dark color="black" href="mailto:moijsanchez@gmail.com" target="_blank">
                  <v-icon small left class="fas fa-envelope-square" />
                  <div> Email </div>
                </v-btn>
                <v-btn class="ma-3" dark color="black" href="https://moisesjsanchez.github.io/static/MoisesSanchezCV.pdf" target="_blank">
                  <v-icon small left class="fas fa-pen-square" />
                  <div> Resume </div>
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-overlay>
      </v-parallax>
    </section>
  </v-content>

</template>

<script>

  export default {}

</script>
