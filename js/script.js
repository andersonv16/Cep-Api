const cep = document.querySelector("#cep")


cep.addEventListener('focusout', () => buscaEndereco(cep.value));

async function buscaEndereco(cep){
const mensagemErro = document.querySelector("#erro")
mensagemErro.innerHTML = ""
try{
const consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
const endereco = document.querySelector("#endereco")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const bairro = document.querySelector("#bairro")

const consultaCEPConvertida = await consultaCEP.json()
endereco.value = consultaCEPConvertida.localidade
cidade.value = consultaCEPConvertida.logradouro
estado.value  = consultaCEPConvertida.uf
bairro.value  = consultaCEPConvertida.bairro

console.log(consultaCEPConvertida)
return consultaCEPConvertida
}

catch(erro){
    mensagemErro.innerHTML = "<p> CEP inválido. Tente novamente!</p>"
    console.log(erro)
}
}
