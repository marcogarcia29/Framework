function wawa() {
    /*const variable = document.getElementById('cep').value;*/
    $.get('https://jsonplaceholder.typicode.com/albums', function( data ) {
    console.log(data);
    for (i = 0; i < 100; i++) {
        const main = document.getElementById('resultado');
        const descricao = document.createElement('p');
        descricao.textContent=('Número da postagem: ')
        main.appendChild(descricao);
        $('#resultado').append(JSON.stringify(data[i].id));
        const titulo = document.createElement('h3');
        titulo.textContent=('Título:');
        main.appendChild(titulo);
        $('#resultado').append(JSON.stringify(data[i].title));
    }
    
});
}

wawa()