<template>

  <v-container class="mt-10 Projects">
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
          <v-responsive>
            <!--  <v-img aspect-ratio="2.5" src="" /> -->
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
              <v-chip class="mx-3 mt-5" href="https://github.com/moisesjsanchez/Guitarist-Toolbox" target="_blank">
                <v-avatar class="fab fa-github" />
                <div class="caption font-weight-medium">View The Code</div>
              </v-chip>
              <v-chip class="mx-3 mt-5" href="https://guitarist-toolbox.herokuapp.com/" target="_blank">
                <v-avatar class="far fa-eye" />
                <div class="caption font-weight-medium">View The Project</div>
              </v-chip>
            </v-card-text>
          </v-responsive>
        </v-card>
        <!-- End of Project Card -->
      </v-col>
      <v-col md="6" xs="12" cols="12">
        <!-- Start of Project Card -->
        <v-card class="mx-auto mt-5" max-width="700">
          <!-- <v-img aspect-ratio="2.5" max-height="200px" max-width="200px" src="@/static/discord.png" /> -->
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
            <v-chip class="mx-3 mt-5" href="https://github.com/moisesjsanchez/Fathom-Chan" target="_blank">
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
          <!-- <v-img aspect-ratio="2.5" src="" /> -->
          <v-card-title>ChordMe</v-card-title>
          <v-card-text>Disclaimer: Project Work in Progress. </v-card-text>
          <v-divider/>
          <v-card-text class="text-primary">
            When finished this is going to be a web application which allows registered users to create,edit,save and delete custom chord
            progressions with custom string naming. This application was created because I wanted a simple and easy to locate
            application what allowed me to create strange and bizzare chord voicings while I browse the youtube for musical
            inspiration or noodle around. Currently I have only the API finished, and currently writing the front end using
            Vue.js.
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
            <v-chip class="mx-3 mt-5" href="https://github.com/moisesjsanchez/ChordMe" target="_blank">
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
          <!-- <v-img aspect-ratio="2.5" src="" /> -->
          <v-card-title>Prog Generator</v-card-title>
          <v-divider/>
          <v-card-text class="text-primary">
            This is a web application what interacts with the Guitarist Toolbox Public API to fetch random critera for creating a potential
            guitar riff. This idea was created because I wanted a tool to help me create guitar riffs and challenge me to write
            out of my musical comfort zone. This application is currently written using Vue.js, but soon I am
            planning on writting the UI using Vuetify to give the application a modern apperance.
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
            <v-chip class="mx-3 mt-5" href="https://github.com/moisesjsanchez/prog-generator" target="_blank">
              <v-avatar class="fab fa-github" />
              <div class="caption font-weight-medium">View The Code</div>
            </v-chip>
            <v-chip class="mx-3 mt-5" href="https://prog-generator.herokuapp.com/" target="_blank">
              <v-avatar class="far fa-eye" />
              <div class="caption font-weight-medium">View The Project</div>
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
