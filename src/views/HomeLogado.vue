<template>
    <div class="container-fluid">
        <div class="alert alert-info mt-3" role="alert">
            <h3 class="alert-heading">Olá {{$route.params.email}}</h3>
            <hr>
            <p>Aqui estão todas as funcionalidades</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">
                        <img src="../assets/img/febre.png" alt="..." class="img-thumbnail icone">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Pacientes</h6>
                        <p class="card-text">{{numPaciente}}</p>
                    </div>
                    <div class="card-footer text-muted">
                        <span>Mais Informações</span>
                    </div>
                </div>
                
            </div>

            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">
                        <img src="../assets/img/dentista.png" alt="..." class="img-thumbnail icone">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Profissionais</h6>
                        <p class="card-text">{{numFuncionario}}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Mais Informações
                    </div>
                </div>
            </div>
        
            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">
                        <img src="../assets/img/consulta.png" alt="..." class="img-thumbnail icone">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Consultas</h6>
                        <p class="card-text">{{numConsulta}}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Mais Informações
                    </div>
                </div>

            </div>
        </div>    
        
    </div>   
</template>

<script>
export default {
    name: 'HomeLogado',
    data: function(){
        return {
            numConsulta: 0,
            numFuncionario: 0,
            numPaciente: 0
        }
    },
    methods:{
        mostrar: function(data){
            this.numConsulta = data.quantidade;
        },
        mostrarFun: function(data){
            this.numFuncionario = data.quantidade;
        },
        mostrarPac: function(data){
            this.numPaciente = data.quantidade;
        }
    },
    mounted(){
        this.$http.get('http://localhost:8090/quatum/api/consultas/quantidade')
        .then((res) => {this.mostrar(res.data)});
        this.$http.get('http://localhost:8090/quatum/api/funcionarios/quantidade')
        .then((res) => {this.mostrarFun(res.data)});
        this.$http.get('http://localhost:8090/quatum/api/pacientes/quantidade')
        .then((res) => {this.mostrarPac(res.data)});
    }
}
</script>

<style>
    #consulta, #paciente{
        width: 49%;
        display: inline-block;
    }
    #consulta{
        background-color: red;
        margin-left: 2%;
    }
    #paciente{
        background-color: blueviolet;
    }

    .icone{
        width: 30%;
        background-color: transparent;
        border: none;
    }
</style>