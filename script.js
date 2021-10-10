const executar = document.getElementById('executar');


function imc () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    const paragraph = document.getElementById('resultP');
    var text = "";

    if (numero !== '') {
        
        var i = 0;
        
        while (i < numero) {
            
            text += `${i})<br><br><br>`;
            i++;
        }
        
        paragraph.textContent = `xd ${text}`;

    }else {
        resultado.write('<p>Erro! Porfavor preencha todos os campos!</p>');
    }

}
executar.addEventListener('click', imc);
