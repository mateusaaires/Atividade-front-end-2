console.log("Site da aula de JavaScript");
alert("Olá, turma!");

let nome = prompt("Digite seu nome: ");
let nota1 = parseFloat(prompt("Digite sua nota: "));
let nota2 = parseFloat(prompt("Digite sua nota: "));

let media = (nota1 + nota2) / 2;

const media_minima = 7;
let situacao;

if (media >= media_minima) {
    situacao = "Aprovado";

} else if (media >= 5) {

    situacao = "Recuperação";

    let recuperacao = parseFloat(prompt("Digite a nota da recuperação: "));

    if (recuperacao < 5) {
        situacao = "Reprovado";
    } 
    else {
        situacao = "Aprovado";
    }

} else {
    situacao = "Reprovado";
}

console.log("Nome do aluno: " + nome);
console.log("Nota da primeira prova: " + nota1);
console.log("Nota da segunda prova: " + nota2);
console.log("Média: " + media);
console.log("Situação do aluno: " + situacao);