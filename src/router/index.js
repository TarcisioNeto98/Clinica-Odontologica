import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import CadUsuario from '../views/CadUsuario.vue';
import CadFuncionario from '../views/CadFuncionario.vue';
import CadPaciente from '../views/CadPaciente.vue';
import CadConsulta from '../views/CadConsulta.vue';
import CadDependente from '../views/CadDependente.vue';
import CadProcedimento from '../views/CadProcedimento.vue';
import CadDentista from '../views/CadDentista.vue';
import BuscarUsuario from '../views/paginas_busca/BuscarUsuario.vue';
import BuscarDependente from '../views/paginas_busca/BuscarDependente.vue';
import BuscarPaciente from '../views/paginas_busca/BuscarPaciente.vue';
import AlterarUsuario from '../views/paginas_alteracao/AlterarUsuario.vue';
import AlterarConsulta from '../views/paginas_alteracao/AlterarConsulta.vue';
import BuscarConsulta from '../views/paginas_busca/BuscarConsulta.vue';
import AlterarPaciente from '../views/paginas_alteracao/AlterarPaciente.vue';
import HomeLogado from '../views/HomeLogado.vue';
import ResultadoPaciente from '../views/paginas_busca/ResultadoPaciente.vue';
import ResultadoFuncionario from '../views/paginas_busca/ResultadoFuncionario.vue';
import ResultadoConsulta from '../views/paginas_busca/ResultadoConsulta.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cadastro/usuario',
    name: 'CadUsuario',
    component: CadUsuario
  },
  {
    path: '/cadastro/dentista',
    name: 'CadDentista',
    component: CadDentista
  },
  {
    path: '/cadastro/funcionario',
    name: 'CadFuncionario',
    component: CadFuncionario
  },
  {
    path: '/cadastro/paciente',
    name: 'CadPaciente',
    component: CadPaciente
  },
  {
    path: '/cadastro/consulta:id',
    name: 'CadConsulta',
    component: CadConsulta
  },
  {
    path: '/cadastro/dependente:id',
    name: 'CadDependente',
    component: CadDependente
  },
  {
    path: '/cadastro/procedimento',
    name: 'CadProcedimento',
    component: CadProcedimento
  },
  {
    path: '/buscar/usuario',
    name: 'BuscarUsuario',
    component: BuscarUsuario
  },
  {
    path: '/resultado/paciente:array/nomePaciente:nome/emailPaciente:email',
    name: 'ResultadoPaciente',
    component: ResultadoPaciente
  },
  {
    path: '/resultado/funcionario:array/nomeFuncionario:nome/emailFuncionario:email',
    name: 'ResultadoFuncionario',
    component: ResultadoFuncionario
  },
  {
    path: '/resultado/consulta:array/datas:data',
    name: 'ResultadoConsulta',
    component: ResultadoConsulta
  },
  {
    path: '/buscar/paciente',
    name: 'BuscarPaciente',
    component: BuscarPaciente
  },
  {
    path: '/buscar/consulta',
    name: 'BuscarConsulta',
    component: BuscarConsulta
  },
  {
    path: '/alterar/usuario:id',
    name: 'AlterarUsuario',
    component: AlterarUsuario
  },
  {
    path: '/alterar/paciente:id',
    name: 'AlterarPaciente',
    component: AlterarPaciente
  },
  {
    path: '/alterar/consulta:id',
    name: 'AlterarConsulta',
    component: AlterarConsulta
  },
  {
    path: '/home:id/:email',
    name: 'Home',
    component: HomeLogado
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeLogado
  },
  {
    path: '/buscar/dependente',
    name: 'BuscarDependente',
    component: BuscarDependente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
