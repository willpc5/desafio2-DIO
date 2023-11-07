function gamer(qtdVitorias, qtdDerrotas) {
  const saldo = qtdVitorias - qtdDerrotas
  let nivel = ''

  if (saldo < 10) {
    nivel = 'Ferro'
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = 'Bronze'
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = 'Prata'
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = 'Ouro'
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = 'Diamante'
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = 'Lendário'
  } else if (saldo >= 101) {
    nivel = 'Imortal'
  } else {
    nivel = 'Fora do padrão'
  }

  const resultado = `O Herói tem o saldo de ${saldo} e está no nível ${nivel}`
  return resultado
}

const vitorias = 200
const derrotas = 57
const mensagem = gamer(vitorias, derrotas)
console.log(mensagem)
