<template>
<div class="container">
    <h2 class="mt-3">Busca de Consulta</h2>
    <form class="form-inline">
        <div class="form-group mb-2">
            <label for="idData">Data:</label>
                <input type="date" name="data" id="idData" 
                class="form-control" v-model="data">
        </div>
        <input type="button" v-on:click="clique()" class="btn btn-outline-success mb-2 ml-2" value="Pesquisar Consulta"/>
    </form>
</div>
</template>

<script>
export default {
    name: 'BuscarConsulta',
    data: function(){
        return {
            data: '',
            consultas: []
        }
    },
    methods:{
        atribuir: function(data){
            this.consultas = data;
            alert(JSON.stringify(this.consultas));
            this.$router.push({name: 'ResultadoConsulta', params: {array: data, data: this.data}});
        },
        clique: function(){
            this.$http.get("http://localhost:8095/quatum/api/consultas/data/"+this.data).
            then((res) => this.atribuir(res.data));
            //this.$router.push({name: 'ResultadoConsulta', params: {array: this.consultas}});
        }
    }
}
</script>