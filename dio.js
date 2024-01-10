let vitorias = 50;
let derrotas = 5;

function geral(vitorias, derrotas){
    let saldoVitoria = vitorias - derrotas;
    let nivel;


    switch(true){
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }

    const mensagem = `O Herói tem de saldo de ${saldoVitoria} está no nível de ${nivel}`;
    return mensagem;
}

// Exibir
const resultado = geral(60, 20);
console.log(resultado)