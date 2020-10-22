<template>
  <div id="app">
    <div id="nav" v-bind:style="estilo">
      <Menu/>
    </div>
    <router-view v-on:desaparecer="ativar" v-on:aparecer="desativar"/>
  </div>
</template>

<script>
import Menu from './components/Menu';
export default{
  name: 'App',
  components:{
    Menu
  },
  data: function(){
    return {
      estilo: ''
    }
  },
  methods: {
    ativar: function(){
      this.estilo = 'display: none;'
    },
    desativar: function(){
      this.estilo = 'display: block;'
    }
  }
}
</script>

<style>
</style>
