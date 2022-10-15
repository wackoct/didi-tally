import Welcome from '../views/Welcome.vue'


export const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: Welcome },
]
