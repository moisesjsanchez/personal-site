<template>

  <!-- About Section -->
  <v-container class="mb-1">
    <!-- Title -->
    <v-row>
      <v-col class="text-center mt-10" cols="12">
        <h1 class="display-3 mb-4 black--text">About Me</h1>
      </v-col>
    </v-row>
    <v-divider light />
    <v-row>
      <v-col class="mt-5 text-center" cols="12">
        <v-avatar size="200">
          <v-img src="@/static/myphoto.jpg" aspect-ratio="1.7"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12">
        <p class="mt-5">Hello! I am Moises Sanchez, a graduate of the University of California Santa Barbara with a degree in Mathematics with
          an Emphasis on Scientific Computing. For my entire degree I have been solving advanced mathematical and statistical problems from various areas in
          science by coding scripts in Python and R. Around my Junior year of college I got into video
          game development using Unity, and then from there I made programming into a hobby! While I do not make as many games
          as I did before, I currently really enjoy creating web applications and various command line tools. </p>
        <p class="mt-5">While I am not coding I really enjoy writing instrument music, listening to myriad of music genres (mostly math rock,
          jazz fusion, and video game soundtracks), and playing with my dog. If you liked my projects and want to potentially
          build with me something feel free to shoot an email! </p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

  export default {}

</script>

<style>

  .container {
    max-width: 70vw;
  }

</style>
