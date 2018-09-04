exports.cardValidator = function cardValidator(cardNumber) {

var arrayNumber = [];
var valid = true;

    if(cardNumber.trim() == ''){//Verifica se foi preenchido o campo
      return "Erro";
    }
    else if (isNaN(cardNumber)) {
      return "Erro";
    }
    else if (cardNumber.length == 1) {
      return "Erro";
    }else{
      // separar caracteres e inverter o array
      arrayNumber=cardNumber.split('');
      arrayNumber.reverse();
      for(var i = 0; i < arrayNumber.length; i++){
        if((i+1)%2 === 0){//Verifica se a posição do Array é Par
          var num = parseInt(arrayNumber[i])*2;//Multiplica por 2
          arrayNumber[i]= num.toString();//Converte em número a string da posição do array
          if(arrayNumber[i] > 9){//Verifica se a multiplicação do número do array é maior que 9, se for separa os caracteres e soma eles.
            arrayNumber[i] = parseInt(arrayNumber[i].charAt(0)) + parseInt(arrayNumber[i].charAt(1));
          }else{//Se não for maior salva o conteudo na mesma posição transformando ele em numerico
              arrayNumber[i]=parseInt(arrayNumber[i]);
            }
          }
        else{//Para posições impares salva apenas na mesma posição transformando em númerico.
            arrayNumber[i]=parseInt(arrayNumber[i]);
          }
        }
        var total = 0;
        for(var i = 0; i < arrayNumber.length; i++){//Faz um loop no array para somar
          total = total + arrayNumber[i];
        }
        if(total%10 == 0 && total !==0){//Verifica se o resultado é um muliplo de 10.
          return true;
        }else{
          return false;
        }
      }

  }
