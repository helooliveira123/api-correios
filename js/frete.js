//Input Vars
const cepOrigemField = document.getElementsByName('cep-origem-field')[0];
const cepDestinoField = document.getElementsByName('cep-destino-field')[0];
const pesoField = document.getElementsByName('peso-field')[0];
const comprimentoField = document.getElementsByName('comprimento-field')[0];
const alturaField = document.getElementsByName('altura-field')[0];
const larguraField = document.getElementsByName('largura-field')[0];
const diametroField = document.getElementsByName('diametro-field')[0];

//Serviço Var
const servicoSelect = document.getElementById('servico');

//Final Value Vars
let valorTotal = 0;
const textValorT = document.getElementById('valorTotal');

//Delivery Time Vars
let prazoEntrega = 0;
const textPrazoE = document.getElementById('prazoEntrega');

//Form Var
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const cepOrigem = cepOrigemField.value;
    const cepDestino = cepDestinoField.value;
    const peso = pesoField.value;
    const comprimento = comprimentoField.value;
    const altura = alturaField.value;
    const largura = larguraField.value;
    const diametro = diametroField.value;
    const selectedValue = servicoSelect.value;

    if (!isNaN(cepOrigem) && !isNaN(cepDestino) && !isNaN(peso) && !isNaN(comprimento) && !isNaN(altura) && !isNaN(largura) && !isNaN(diametro)) {
      switch (selectedValue) {
        case '04014':
          valorTotal = 13.00;
          prazoEntrega = 2;
          break;

        case '04065':
          valorTotal = 21.10;
          prazoEntrega = 9;
          break;

        case '04510':
          valorTotal = 9.90;
          prazoEntrega = 1;
          break;

        case '04707':
          valorTotal = 2.40;
          prazoEntrega = 5;
          break;

        case '40169':
          valorTotal = 5.40;
          prazoEntrega = 8;
          break;

        case '40215':
          valorTotal = 19.00;
          prazoEntrega = 7;
          break;

        case '40290':
          valorTotal = 32.86;
          prazoEntrega = 4;
          break;

        default: break;
      }

      //Text Content Definition
      textValorT.textContent = 'R$' + valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      textPrazoE.textContent = prazoEntrega + ' dias';
    }
    else {
      alert('Letra inserida. Tente apenas com números.');
      throw new Error('Letra inserida. Tente apenas com números.');
    }
  }
  catch (error) {
    console.error(error);

    //Inputs Reset
    textValorT.textContent = 'R$00,00';
    textPrazoE.textContent = '0 dias';
  }
});