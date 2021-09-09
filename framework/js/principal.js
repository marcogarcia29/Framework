function wawa() {
    /*const variable = document.getElementById('cep').value;*/
    $.get('http://jsonplaceholder.typicode.com/posts', function( data ) {
    console.log(data);
    for (i = 0; i < 100; i++) {
        const main = document.getElementById('resultado');
        const titulo = document.createElement('h3');
        titulo.textContent=('Título:');
        main.appendChild(titulo);
        $('#resultado').append(JSON.stringify(data[i].title));
        const descricao = document.createElement('p');
        descricao.textContent=('Descrição: ')
        main.appendChild(descricao);
        $('#resultado').append(JSON.stringify(data[i].body));
    }
    
});
}

wawa()