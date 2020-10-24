<template>
<div class="container">
    <h2>{{titulo}}</h2>
    <b-form>
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
            <b-form-input id="input-1" type="email" required placeholder="Enter email" v-model="email"></b-form-input>
        </b-form-group>
        {{email}}
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" required placeholder="Enter name" v-model="nome"></b-form-input>
        </b-form-group>
        <b-button type="button" variant="primary" v-on:click="clique()">Buscar</b-button>
        <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
</div>
</template>

<script>
export default {
    name: 'Busca',
    props: ['titulo'],
    data: function(){
        return {
            array: [],
            nome: '',
            email: ''
        }
    },
    methods: {
        enviar(data){
            this.array = data;
            this.$router.push({name: 'ResultadoPaciente', params: {array: this.array}});
        },
        clique: function(){
            this.$http.get("http://localhost:8090/quatum/api/pacientes/?email="+this.email+'&nome='+this.nome).
            then((res) => this.enviar(res.data));
            //alert(JSON.stringify(this.array));
            //
        }
    }
}
</script>


<style>
    h2{
        text-align: center;
    }
</style>