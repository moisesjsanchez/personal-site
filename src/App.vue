<template>
  <v-app>
    <v-content>
      <Home />
      <Projects />
    </v-content>
  </v-app>
</template>

<script>

import Home from './components/home/Home'
import Projects from './components/projects/Projects'
export default {

  components: {
    Home,
    Projects
  },

  data: () => ({
    //
  }),
};
</script>
