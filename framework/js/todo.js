function wawa() {
    /*const variable = document.getElementById('cep').value;*/
    $.get('https://jsonplaceholder.typicode.com/todos', function( data ) {
    console.log(data);
    for (i = 0; i < 100; i++) {
        const main = document.getElementById('resultado');
        const titulo = document.createElement('h3');
        titulo.textContent=('Título:');
        main.appendChild(titulo);
        $('#resultado').append(JSON.stringify(data[i].title));
        const descricao = document.createElement('p');
        descricao.textContent=('Completo: ')
        main.appendChild(descricao);
        $('#resultado').append(JSON.stringify(data[i].completed));
    }
    
});
}

wawa()