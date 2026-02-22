const inputTarefa = document.getElementById('taskInput'); 
const botaoAdicionar = document.getElementById('addTaskBtn'); 
const listaTarefas = document.getElementById('taskList');

botaoAdicionar.addEventListener('click', () => {

  const textoTarefa = inputTarefa.value.trim(); 

  if (textoTarefa !== '') { 
    const itemLista = document.createElement('li'); 
    itemLista.textContent = textoTarefa; 

    const botaoExcluir = document.createElement('button'); 
    botaoExcluir.textContent = 'X'; 


    botaoExcluir.addEventListener('click', () => {
      listaTarefas.removeChild(itemLista);
    });

    itemLista.appendChild(botaoExcluir);
    listaTarefas.appendChild(itemLista);

    inputTarefa.value = '';
  }
});