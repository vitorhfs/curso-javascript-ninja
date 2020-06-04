/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArrays = [1, "vitor", true, undefined, "frase"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function functionArray (arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(functionArray(myArrays)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function setFunction(arr, index){
    return arr [index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayCinco = [10, 'compra', true, myArrays, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(setFunction(arrayCinco, 0));
console.log(setFunction(arrayCinco, 1));
console.log(setFunction(arrayCinco, 2));
console.log(setFunction(arrayCinco, 3));
console.log(setFunction(arrayCinco, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (livro){
	var nomeLivros = {
		'Corvos e coisa sobrenatural': {		
			quantidadePaginas: 200,
			autor: 'Allan Poe',
			editora: 'Nova'
		},
		'Terror etc': {
			quantidadePaginas: 450,
			autor: 'Stephen King',
			editora: 'Azul'
		},
		'Moby Dick': {
			quantidadePaginas: 350,
			autor: 'Ahab',
			editora: 'Nova'
		}
	} 
    return !livro ? nomeLivros : nomeLivros[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log (book ());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ("O livro Corvos e coisa sobrenatural tem " + book('Corvos e coisa sobrenatural').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ("O autor do livro Terror etc é " + book('Terror etc')['autor'] + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Moby Dick foi publicado pela editora " + book('Moby Dick').editora + ".")
