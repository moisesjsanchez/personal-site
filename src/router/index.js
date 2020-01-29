import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/projects',
    name: 'projects',
    component: Projects
  },
  {
    path:'/skills',
    name: 'skills',
    component: Skills
  },
  {
    path:'/about',
    name: 'about',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
