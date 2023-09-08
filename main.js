const form = document .getElementById ('lista-tarefas');
let Linha = '<li>';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 



    const inputNomeDaTarefa = document.getElementById ('nome-atividade');


    Linha += `<li>${inputNomeDaTarefa.value}</li>`;


    const listaTarefas = document.querySelector('ul');
    listaTarefas.innerHTML = Linha; 

    $('li').click(function() {
        $(this).addClass("finalizada");
    });

});


