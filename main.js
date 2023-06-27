function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    
    if (elemento === null) {
        alert('instrumento nao encontrado') }

    if (elemento != null) {
        elemento.play();
    }
}
    
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < 9; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    
    tecla.onkeydown = function(evento) {


        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
}

/* a função tocaSom, esta dizendo "busca o id do audio e da play"
a const listaDeTeclas esta dizendo "busca TODOS os textos com a palavra .tecla"
dentro do while a const "tecla" esta dizendo "ListaDeTeclas começa o contador quando o usuario clicar.
a const Instrumento diz "lista de teclas vai ser executada junto com a classlist"
para achar a classlist, vai no devtools e digita ListaDeTeclas[0].classlist nisso vai aparecer os dois parametros existentes la no html q é a palavra tecla[0] e tecla_pom[1] que é a tecla que contem o som.  por isso o codigo fica ListaDeTeclas[0].classlist[1]
 e esse com isso a const instrumento diz "lista de teclas vai ser executada junto com a classlist começando da tecla 1 (som_pom,som_clap e assim na sequencia) " lembrando que esse trecho executado nao vai executar som e sim um texto.
 a const idAudio executa a tag `#som_´ e ela concatena com a sequencia da classlist formando assim o id do audio pra nao ficar uma coisa repetitiva 
  o codigo esta escrito `#som_${}´ 
  é possivel escrever uma string(texto) e ser dinamica ao mesmo tempo o codigo deve ser escrito entre crase, entre chaves ficam os itens variaves. e quando utilizamos esse metodo, utilizamos um $ pra definir onde começa termina a string e começa as variaveis 
  while é uma estrutura de repetição.
entao enquanto o contador que foi definido pelo let como 0 nao chegar a 9, o while vai se repetir
e o que esta entre [] q tambem é o contador, vai fazer tocar o mesmo som em todas as teclas pq ele esta definido como som_tecla_pom.
contador = contador + 1; serve pra que o contador nao entre em um loop infinito, como ele ia saber que tem que ir ate o 9 ? se nao ele ia ficar repetindo o 0 eternamente.
voce nunca pode colocar um parametro do lado de uma função quando ela estiver no while pq quando voce faz isso ela invoca essa função, e uma função que emite som só pode ser reproduzida quando o usuario interagir com a pagina.
o contador sabe que cada numero é uma tecla por conta da const listaDeTeclas
toda vez que um numero é gerado pelo contador ele roda essa funçãoe por isso reproduz o mesmo som em cada tecla 
*/
