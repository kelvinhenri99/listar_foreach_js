const pessoa = {
    Nome: 'Kelvin',
    Idade: 21,
    Peso: 70
}

console.log(pessoa)

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})