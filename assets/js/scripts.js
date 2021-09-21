// Criação das variaveis

// var idade = 35 //não é mais indicado pelo padrão EcmaScript

// let idade = 35 //padrão indicado pelo EcmaScript - valores mutaveis
// const idade = 35 //padrão indicado pelo EcmaScript - valores imutaveis

// Gets de Elementos
// DOM - document

// por Tag: document.getElementsByTagName('img')
// por ID: document.getElementById('menu')
// por Nome: document.getElementsByName('nome')
// por Classe: document.getElementsByClassName('classe')
// por Seletor: document.querySelector('#id / .classe / nome / tag')

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto inválido, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso, muito obrigada!')
    }else{
        alert('Favor preencher todos os campos corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '350px'
}