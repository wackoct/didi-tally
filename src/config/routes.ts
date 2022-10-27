import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'

export const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/home', component: Home },
  { path: '/welcome', component: Welcome },
]
