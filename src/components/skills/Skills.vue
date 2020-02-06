<template>

  <v-container class="Skills">
    <v-row align="center" class="mt-10 pt-5" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 mb-4 black--text">Skills</h1>
        <v-divider light />
      </v-col>
    </v-row>
    <v-row>
      <!-- Start of Skill Card -->
      <v-col md="4" sm="12" xs="12">
        <v-card class="mx-auto mt-5" max-width="600" height="100%">
          <v-card-title class="justify-center headline">Languages</v-card-title>
          <v-divider />
          <!-- Skill Holder -->
          <v-card-text class="body-1">
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>R</li>
              <li>C++</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- End of Skill Card -->
      <!-- Start of Skill Card -->
      <v-col md="4" sm="12" xs="12">
        <v-card class="mx-auto mt-5" max-width="600" height="100%">
          <v-card-title class="justify-center headline">Frameworks</v-card-title>
          <v-divider />
          <!-- Skill Holder -->
          <v-card-text class="body-1">
            <ul>
              <li>Vue.js</li>
              <li>Vuetify</li>
              <li>Tone.js</li>
              <li>Flask</li>
              <li>Sass</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- End of Skill Card -->
      <!-- Start of Skill Card -->
      <v-col md="4" sm="12" xs="12">
        <v-card class="mx-auto mt-5" max-width="600" height="100%">
          <v-card-title class="justify-center headline">Other</v-card-title>
          <v-divider />
          <!-- Skill Holder -->
          <v-card-text class="body-1">
            <ul>
              <li>Git</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Atom</li>
              <li>Studio Code</li>
              <li>Postman</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- End of Skill Card -->
    </v-row>
  </v-container>

</template>

<script>

  export default {}

</script>
