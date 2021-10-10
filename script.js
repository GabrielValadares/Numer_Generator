const executar = document.getElementById('executar');


function imc () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    var texto = "";
    var text = "";

    if (numero !== '') {
        
        var i = 0;
        
        while (i < numero) {
            
            text += `${i})<br><br><br>`;
            i++;
            texto = text;
        }
        
        resultado.textContent = `Ola`;

    }else {
        resultado.textContent = 'Erro! Porfavor preencha todos os campos!';
    }

}
executar.addEventListener('click', imc);
