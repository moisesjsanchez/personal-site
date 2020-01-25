<template>

  <!-- Hero Image -->

  <v-content>
    <v-app-bar fixed=True>
      <v-row class="align-center">
        <v-col class="text-center">
          <v-btn class="mr-3" text>Projects</v-btn>
          <v-btn class="mr-3" text>About Me</v-btn>
          <v-btn class="mr-3" text>Projects</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <section>
      <v-parallax src="@/static/hongkong.jpeg" height="900">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-3 font-weight-thin mb-4 white--text">MOISES J.SANCHEZ</h1>
            <h3 class="subheading display-1 font-weight-thin white--text">Programmer-Data Enthusiast-Musician</h3>
            <v-col class="mb-10" cols="12">
              <v-btn class="ma-5" dark color="black" href="https://github.com/moisesjsanchez">
                <v-icon small left class="fab fa-github-square" />
                <div> Github </div>
              </v-btn>
              <v-btn class="ma-5" dark color="black" href="https://www.linkedin.com/in/moisesjsanchez/">
                <v-icon small left class="fab fa-linkedin" />
                <div> LinkedIn </div>
              </v-btn>
              <v-btn class="ma-5" dark color="black">
                <v-icon small left class="fas fa-pen-square " />
                <div> Resume </div>
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
  </v-content>

</template>

<script>

  export default {}

</script>
