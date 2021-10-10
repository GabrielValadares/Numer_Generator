const executar = document.getElementById('executar');


function imc () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero !== '') {
        
        var i = 0;
        
        while (i < numero) {
            
            text += i + ") <br><br><br>";
            i++;
        }
        
        resultado.textContent = `${text}`;

    }else {
        resultado.textContent = 'Erro! Porfavor preencha todos os campos!';
    }

}
executar.addEventListener('click', imc);
