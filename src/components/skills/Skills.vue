<template>

  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 mb-4 black--text">Skills</h1>
        <v-divider light />
      </v-col>
    </v-row>
    <v-row>
    <!-- Start of Project Card -->
    <v-col md="6" xs="12">
    <v-card class="mx-auto mt-5" max-width="600">
      <v-img aspect-ratio="2.5" src="" />
      <v-card-title>Guitarist Toolbox Public API</v-card-title>
      <v-divider/>
      <v-card-text class="text-primary">
        This is a public RESTful API which allows the developer to get various guitar compositional tools which as scales, chord
        progressions, techniques, and time signatures. Currently this API allows to get types of tools, subtypes of tools,
        and random tools based on type. Documenation of this API can found in the Github repo linked down below.
      </v-card-text>
      <v-divider />
      <!-- Skill Holder -->
      <v-card-text>
        <v-chip class="mx-3 mb-3">
          <v-avatar>
            <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/python.png" />
          </v-avatar>
          <div class="caption font-weight-medium">Python</div>
        </v-chip>
        <v-chip class="mx-3 mb-3">
          <v-avatar>
            <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/flask.png" />
          </v-avatar>
          <div class="caption font-weight-medium">Flask</div>
        </v-chip>
        <v-chip class="mx-3 mb-3">
          <v-avatar>
            <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/postGreSQL.png" />
          </v-avatar>
          <div class="caption font-weight-medium">PostgreSQL</div>
        </v-chip>
        <v-chip class="mx-3 mb-3">
          <v-avatar>
            <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/heroku.png" />
          </v-avatar>
          <div class="caption font-weight-medium">Heroku</div>
        </v-chip>
        <v-divider />
        <!-- Links -->
        <v-chip class="mx-3 mt-5" href="https://github.com/moisesjsanchez/Guitarist-Toolbox">
          <v-avatar class="fab fa-github" />
          <div class="caption font-weight-medium">View The Code</div>
        </v-chip>
        <v-chip class="mx-3 mt-5" href="https://guitarist-toolbox.herokuapp.com/">
          <v-avatar class="far fa-eye" />
          <div class="caption font-weight-medium">View The Project</div>
        </v-chip>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>
    <!-- End of Project Card -->
  </v-container>

</template>

<script>

  export default {}

</script>
