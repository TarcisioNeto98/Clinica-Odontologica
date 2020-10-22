import Vue from 'vue';
import VueRouter from 'vue-router';
import BuscarUsuario from '../../views/paginas_busca/BuscarUsuario.vue';

Vue.use(VueRouter)

const rotas_busca = [
  {
    path: '/buscar/usuario',
    name: 'BuscarUsuario',
    component: BuscarUsuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  rotas_busca
})

export default router
