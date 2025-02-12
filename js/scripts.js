// Selecionar os elementos
const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');
const messageElement = document.querySelector('#message');

// Função para validar entrada
function validarEntrada() {
    const inputValue = inputElement.value.trim();

    if (inputValue === '' || isNaN(inputValue)) {
        messageElement.textContent = 'Por favor, insira um número válido.';
        outputElement.value = '';
        return null;
    }

    if (Number(inputValue) < 0) {
        messageElement.textContent = 'O valor não pode ser negativo.';
        outputElement.value = '';
        return null;
    }

    return Number(inputValue);
}

// Função para converter as unidades
function convert() {
    const inputValue = validarEntrada();
    if (inputValue === null) return; // Se for inválido, interrompe a função

    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputValue;
        messageElement.textContent = '';
        return;
    }

    // Converter para metros
    let meters;
    switch (fromValue) {
        case 'm': meters = inputValue; break;
        case 'km': meters = inputValue * 1000; break;
        case 'cm': meters = inputValue / 100; break;
        case 'mm': meters = inputValue / 1000; break;
        default:
            messageElement.textContent = 'Unidade de origem inválida.';
            return;
    }

    // Converter metros para unidade de saída
    let result;
    switch (toValue) {
        case 'm': result = meters; break;
        case 'km': result = meters / 1000; break;
        case 'cm': result = meters * 100; break;
        case 'mm': result = meters * 1000; break;
        default:
            messageElement.textContent = 'Unidade de destino inválida.';
            return;
    }

    // Exibir resultado
    outputElement.value = result;

    // Exibir mensagem formatada
    const fromLabel = fromElement.options[fromElement.selectedIndex]?.text || fromValue;
    const toLabel = toElement.options[toElement.selectedIndex]?.text || toValue;

    messageElement.textContent = `${inputValue} ${fromLabel} equivalem a ${result} ${toLabel}.`;
}

// Adicionar evento ao botão
convertButton.addEventListener('click', convert);
