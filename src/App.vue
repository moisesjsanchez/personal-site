<template>

  <v-app>
    <v-content>
      <Home id='home' />
      <Projects id='projects' />
      <Skills id='skills' />
      <About id='about' />
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
    }
  }

</script>


<style>

  .container {
    max-width: 80vw;
  }

</style>
