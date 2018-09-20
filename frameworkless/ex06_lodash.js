const _ = require('lodash')

console.log(_.isDate('01/01/2018'))

const alunos = [{
    nome: 'João',
    nota: 7.6
},
{
    nome: 'Maria',
    nota: 8.6
},
{
    nome: 'Pedro',
    nota: 8.1    
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log('Media é '+media)