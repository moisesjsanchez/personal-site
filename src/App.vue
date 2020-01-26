<template>
  <v-app>
    <v-content>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>

import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

export default {

  components: {
    Home,
    Projects,
    About,
    Skills,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
