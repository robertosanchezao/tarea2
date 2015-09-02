//Input Example

_INPUT = 2\n3 9\n17 24

//Expected Output
/*
2
0
*/


//Second Input Example 

//_INPUT = 4\n1 8\n2 13\n11 20

//Expected Output 
/*
2
1
0
1
*/

//----- Start your code here -------
div = _INPUT.split('\n');
	for(i=1; i<div.lenght; i++)
	{
		valor = div[i].split("");
		cont_sqrt(parseInt(valor[0]), parseInt(valor[1]));
	}
function cont_sqrt(a, b)
	{
		res_positivos = 0;
		for(a; a<=b; a++)
		{
			raiz=Math.sqrt(a);
			if(raiz % 1 == 0)
			{	
				res_positivos++;
			}
		}
	console.log(res_positivos);
	}
