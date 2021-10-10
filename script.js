const executar = document.getElementById('executar');


function imc () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    const paragraph = document.getElementById('resultP');
    var text = "";

    if (numero !== '') {
        
        var i = 1;
        
        while (i < numero) {
            
            text += `${i})<br><br><br>`;
            i++;
        }
        
        paragraph.textContent = `xd ${text}`;
        
        document.write(`${text}`);

    }else {
        paragraph.textContent = 'Erro! Porfavor preencha todos os campos!';
    }

}
executar.addEventListener('click', imc);
