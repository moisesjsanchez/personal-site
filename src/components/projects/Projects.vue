<template>
  <v-container class="mt-5 Projects">
    <v-row align="center" class="mt-10 pt-5" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 mb-4 black--text">Projects</h1>
        <v-divider light />
      </v-col>
    </v-row>
    <v-row>
      <!-- Start of Project Card -->
      <v-col md="6" xs="12">
        <v-card class="mx-auto mt-5" max-width="700">
          <v-img contain="True" aspect-ratio="2.5" src="@/static/guitarist-toolbox.png"/>
          <v-divider class="mt-5" />
          <v-card-title>Guitarist Toolbox Public API</v-card-title>
          <v-divider/>
          <v-card-text class="text-primary">
            This is a public RESTful API which allows developers to get various guitar compositional tools which as scales, chord progressions,
            techniques, and time signatures. Currently this API allows to get types of tools, subtypes of tools, and random
            tools based on type. Documenation of this API can found in the Github repo linked down below.
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
                <v-img max-height="20px" max-width="30px" src="@/static/flask.png" />
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
            <v-chip class="mx-3 mt-5 blue lighten-2" href="https://github.com/moisesjsanchez/Guitarist-Toolbox" target="_blank">
              <v-avatar class="fab fa-github" />
              <div class="caption font-weight-medium">View The Code</div>
            </v-chip>
            <v-chip class="mx-3 mt-5 deep-purple accent-1" href="https://guitarist-toolbox.herokuapp.com/" target="_blank">
              <v-avatar class="far fa-eye" />
              <div class="caption font-weight-medium">View The Project</div>
            </v-chip>
          </v-card-text>
        </v-card>
        <!-- End of Project Card -->
      </v-col>
      <v-col md="6" xs="12" cols="12">
        <!-- Start of Project Card -->
        <v-card class="mx-auto mt-5" max-width="700">
          <v-img contain="True" aspect-ratio="2.5" src="@/static/discord-orange.png" />
          <v-divider class="mt-5" />
          <v-card-title>Fathom Chan </v-card-title>
          <v-divider/>
          <v-card-text class="text-primary">
            This is my Discord bot I developed to fetch and present current Fathom supported movie events to my friend server. This bot
            was created as a result of the discovering anime movies now playing in our small city. The bot helps us by constantly
            updating whenever movies come out and deleting past movies. Furthermore it keeps use from having to manually check
            the browser for updates. This bot currently interacts with the Google Sheets API to fetch movies from the spread
            sheet. Currently the movies are updated by a web scrapping service built into the spread sheet.
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
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/heroku.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Heroku</div>
            </v-chip>
            <v-divider />
            <!-- Links -->
            <v-chip class="mx-3 mt-5 blue lighten-2" href="https://github.com/moisesjsanchez/Fathom-Chan" target="_blank">
              <v-avatar class="fab fa-github" />
              <div class="caption font-weight-medium">View The Code</div>
            </v-chip>
          </v-card-text>
        </v-card>
        <!-- End of Project Card -->
      </v-col>

      <v-col md="6" xs="12" cols="12">
        <!-- Start of Project Card -->
        <v-card class="mx-auto mt-5" max-width="700">
          <v-img contain="True" aspect-ratio="1.7" src="@/static/prog-generator.png" />
          <v-divider class="mt-2" />
          <v-card-title>Prog Generator</v-card-title>
          <v-divider/>
          <v-card-text class="text-primary">
            This is a web application what interacts with the Guitarist Toolbox Public API to fetch random critera for creating a potential
            guitar riff. Currently random critera consist of chord progressions, scales, guitar techniques, and time signatures.
            This idea was created because I wanted a tool to help me create guitar riffs and challenge me to write out of my
            musical comfort zone. If you also want to try out writing music with this tool the link to the web application
            is down below this card! This application is written using Vue.js and Vuetify.
          </v-card-text>
          <v-divider />

          <!-- Skill Holder -->
          <v-card-text>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/vue.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Vue.js</div>
            </v-chip>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/vuetify.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Vuetify</div>
            </v-chip>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/heroku.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Heroku</div>
            </v-chip>
            <v-divider />
            <!-- Links -->
            <v-chip class="mx-3 mt-5 blue lighten-2" href="https://github.com/moisesjsanchez/prog-generator" target="_blank">
              <v-avatar class="fab fa-github" />
              <div class="caption font-weight-medium">View The Code</div>
            </v-chip>
            <v-chip class="mx-3 mt-5 deep-purple accent-1" href="https://prog-generator.herokuapp.com/" target="_blank">
              <v-avatar class="far fa-eye" />
              <div class="caption font-weight-medium">View The Project</div>
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- End of Project Card -->
      <v-col md="6" xs="12" cols="12">
        <!-- Start of Project Card -->
        <v-card class="mx-auto mt-5" max-width="700">
          <v-img contain="True" aspect-ratio="1.7" src="@/static/personal-website.png" />
          <v-divider class="mt-2" />
          <v-card-title>Personal Website</v-card-title>
          <v-divider/>
          <v-card-text class="text-primary">
            This is currently the website you are visiting. This website was made because I thought it would be fun, and to have a nicer
            way to show off my past projects than just a github repo. This website houses my past projects, links to recruiters
            get more information on me, an about me, and secret easter egg hidden somewhere! The website is made with Vue.js
            and Vuetify and was deployed on Netlify.
          </v-card-text>
          <v-divider />

          <!-- Skill Holder -->
          <v-card-text>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/vue.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Vue.js</div>
            </v-chip>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/vuetify.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Vuetify</div>
            </v-chip>
            <v-chip class="mx-3 mb-3">
              <v-avatar>
                <v-img class="mr-2" max-height="20px" max-width="20px" src="@/static/netlify.png" />
              </v-avatar>
              <div class="caption font-weight-medium">Netlify</div>
            </v-chip>
            <v-divider />
            <!-- Links -->
            <v-chip class="mx-3 mt-5 blue lighten-2" href="https://github.com/moisesjsanchez/prog-generator" target="_blank">
              <v-avatar class="fab fa-github" />
              <div class="caption font-weight-medium">View The Code</div>
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- End of Project Card -->
    </v-row>
  </v-container>

</template>

<script>

  export default {}

</script>
