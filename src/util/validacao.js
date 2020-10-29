exports.validarNome = (nome) => {
    if(nome.length >= 4){
        var letras = /([A-Z][a-zà-ú]+)+ ([A-Z][a-zà-ú]+)$/;
        return letras.test(nome);
    }
    else false;
};

exports.validarEmail = (email) => {
    var regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
}

exports.validarProcedimento = (procedimento) => {
    if(procedimento.length >= 10)
        return true;
    return false;
}

exports.validarSalario = (salario) => {
    if(salario.length >= 1){
        if(/\D/.test(salario)) return false;
        return true;
    }
    return false;
}

exports.validarCep = (cep) => {
    if(cep.length === 8){
        if(/^\d(\d){6}\d$/.test(cep)) return true;
        return false;
    }
    return false;
}

exports.validarCpf = (cpf) => {
    if(/^\d{3}\d{3}\d{3}\d{2}$/.test(cpf)) return true;
    return false;
}

exports.validarEstado = (estado) => {
    return /^([A-Z])([A-Z])$/.test(estado);
}

exports.validarData = (data) => {
    var regex = /^\d{4}[-]\d{2}[-]\d{2}/;
    return regex.test(data);
}