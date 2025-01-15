window.alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
let chute 
let tentativas = 1;

// while = enquanto
while(chute != numeroSecreto){
chute = prompt("Digite um número entre 1 e 30");
  
  if (chute == numeroSecreto){
    window.alert(`você acertou! ${numeroSecreto} com ${tentativas} tentativas`);
  }else{
    if(chute > numeroSecreto){
        window.alert(`o numero é menor que ${chute}!`);
    }else{
        alert(`o numero secreto é maior que ${chute}`)
    }
    tentativas++;
  }
  //tentativas = tentativas + 1;
  
}


