<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #271c64;">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="../assets/img/logo.png"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style="margin-left:auto">
            <b-nav>
              <b-nav-item><router-link to="/home" style="text-decoration:none">Home</router-link></b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="Cadastro"
                right
              >
                <b-dropdown-item>
                  <router-link to="/cadastro/funcionario" class="dropdown-item">
                    Cadastro de Funcionário
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/cadastro/paciente" class="dropdown-item">
                    Cadastro de Paciente
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/cadastro/procedimento" class="dropdown-item">
                    Cadastro de Procedimento
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/cadastro/dentista" class="dropdown-item">
                    Cadastro de Dentista
                  </router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown
                id="dropdown_busca"
                text="Buscar"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>
                  <router-link to="/buscar/usuario" class="dropdown-item">
                    Buscar Funcionário
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/buscar/dependente" class="dropdown-item">
                    Buscar Dependente
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/buscar/consulta" class="dropdown-item">
                    Buscar Consulta
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/buscar/paciente" class="dropdown-item">
                    Buscar Paciente
                  </router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown
                id="dropdown_alterar"
                text="Alterar"
                toggle-class="nav-link-custom"
                class="link"
                right
              >
              </b-nav-item-dropdown>
              <b-nav-item><router-link to="/" style="text-decoration:none;">Sair</router-link></b-nav-item>
            </b-nav>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
  .eslilo{
    color: red;
  }
</style>