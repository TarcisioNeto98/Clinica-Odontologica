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