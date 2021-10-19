const executar = document.getElementById('executar');


function imc () {
    const numero = document.getElementById('numero').value;
    const autor = document.getElementById('autor').value;
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');
    const paragraph = document.getElementById('resultP');
    var text = "";

    if (numero !== '' && autor !== '' && nome !== '') {
        
        text += `${nome}<br><br>${autor}<br><br><br>`;
        
        var i = 1;
        
        while (i <= numero) {
            
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
