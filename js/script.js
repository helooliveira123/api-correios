//Editable Input's Vars
const cepField = document.getElementsByName('cep-field')[0];
const cepButton = document.getElementsByName('cep-button')[0];

const logradouroField = document.getElementsByName('logradouro-field')[0];
const logradouroButton = document.getElementsByName('logradouro-button')[0];

//No Editable Input's Vars
const complementoField = document.getElementsByName('complemento-field')[0];
const bairroField = document.getElementsByName('bairro-field')[0];
const localidadeField = document.getElementsByName('localidade-field')[0];
const ufField = document.getElementsByName('uf-field')[0];

//CEP Search
const fetchApiCep = (cep) => {
    const result = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;
}

//CEP Button Click
cepButton.addEventListener('click', async (event) => {
    event.preventDefault();
    try{
        const result = await fetchApiCep(cepField.value);
        if(result){
            logradouroField.value = `${JSON.parse(JSON.stringify(result.logradouro))}`;
            complementoField.value = `${JSON.parse(JSON.stringify(result.complemento))}`;
            bairroField.value = `${JSON.parse(JSON.stringify(result.bairro))}`;
            localidadeField.value = `${JSON.parse(JSON.stringify(result.localidade))}`;
            ufField.value = `${JSON.parse(JSON.stringify(result.uf))}`;
            
            //Logradouro Field and Button Style
            logradouroField.disabled = true;
            logradouroField.style.backgroundColor = '#8CAB82';
            logradouroField.style.color = '#4d6b43';
            logradouroButton.disabled = true;
            logradouroButton.style.cursor = 'auto';
        }
        else{
            throw new Error('CEP não encontrado ou inexistente');
        }
    }
    catch(error){
        console.error('CEP não encontrado ou inexistente', error);

        alert('CEP não encontrado ou inexistente');

        //Inputs Reset
        logradouroField.value = '';
        complementoField.value = '';
        bairroField.value = '';
        localidadeField.value = '';
        ufField.value = '';
    }
});

//Logradouro Search
const fetchApiLog = (uf, localidade, logradouro) => {
    const result = fetch(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;
}

//Logradouro Button Click
logradouroButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const values = logradouroField.value.split(',').map(valor => valor.trim());
    try{
        const result = await fetchApiLog(values[0], values[1], values[2]);
        if(result){
            cepField.value = `${JSON.parse(JSON.stringify(result[0].cep))}`;
            logradouroField.value = `${JSON.parse(JSON.stringify(result[0].logradouro))}`;
            complementoField.value = `${JSON.parse(JSON.stringify(result[0].complemento))}`;
            bairroField.value = `${JSON.parse(JSON.stringify(result[0].bairro))}`;
            localidadeField.value = `${JSON.parse(JSON.stringify(result[0].localidade))}`;
            ufField.value = `${JSON.parse(JSON.stringify(result[0].uf))}`;
            
            cepField.disabled = true;
            cepField.style.backgroundColor = '#8CAB82';
            cepField.style.color = '#4d6b43';
            cepButton.disabled = true;
            cepButton.style.cursor = 'auto';
        }
        else{
            throw new Error('Logradouro não encontrado ou inexistente');
        }
    }
    catch(error){
        console.error('Logradouro não encontrado ou inexistente', error);
        alert('Logradouro não encontrado ou inexistente');

        //Inputs Reset
        cepField.value = '';
        complementoField.value = '';
        bairroField.value = '';
        localidadeField.value = '';
        ufField.value = '';
    }
});