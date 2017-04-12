


/* Exercicios: */

/* 6- Calcular a quantidade de dinheiro gasta um fumante. Dados:o numero de anos que ele fuma,o numero de cigarros fumados por dia e o preço
de uma carteira */

var x=prompt("Quantos anos você fuma?");
var y=prompt("Quantos cigarros você fuma por dia?");
var z=prompt("Quanto custa o sua carteira de cigarros?");

var totaldecigarros= (y*365)*x;
var carteira= totaldecigarros/20;
var valor= carteira*z;

alert(valor);


/* 7- Tendo como dados de entrada de altura de uma pessoa,construa um programa que calcule o peso ideal,tanto para homens quanto 
para mulheres,utilizando as seguintes formulas seguintes 

		Para homens: (72.7*h)-58 
		Para mulheres: (62.1*h)-44.7 */
		
		
	

var sexo=prompt("Qual seu genero? 1- Feminino ou 2- Masculino");
var h=prompt("Qual sua altura em metros?");
var total=0;

if(sexo== 1)
{
	total= (62.1*h)-44.7;
	alert(total);
}

else
{
	total=(72.7*h)-58;
	alert(total);
}




/* 8- Elabore um programa,que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta e a escolha da condiçao
de pagamento. Utilize os codigos da tabela a seguir pra ler qual a condiçao de pagamento escolhido e efetuar o calculo adequado



	Codigo | Condição de pagamento:
	  1	   |  A vista em dinheiro ou cheque, recebe 10% de desconto
	  2	   |  A vista no cartão de credito, recebe 5% de desconto
	  3    |  Em 2 vezes,preço normal de etiquetas sem juros
	  4    |  Em 3 vezes,preço normal de etiquetas mais juros de 10%
	*/
	
	
	
	var preco=parseInt(prompt("Qual preço de etiqueta do produto?")); /*parseInt para codigos de soma de variaveis*/
	var cod=prompt("Qual codigo do pagamento?");
	var pag;
	var total;
	var parc;
	
	if(cod==1)
	{
		pag = (preco*10)/100;
		total=preco-pag;
		alert("Valor a vista dinheiro ou cheque = " + total);
	}
	
	else if(cod==2)
	{
		pag =(preco*5)/100;
		total= preco- pag;
		alert("Valor a vista no cartao de credito = " + total);
	}
	
	else if(cod==4)
	{
		pag =(preco*10)/100;
		total= preco+pag;
		parc= total/3;
		alert("valor em 3 vezes = " + total);
		alert("3 parcelas de : " + parc + " cada" );
	}	
	
	else
	{
		total= preco;
		parc = total/2;
		alert("valor em 2 vezes = " + total);
		alert("2 parcelas de : "+ parc + " cada");
		
		
	}