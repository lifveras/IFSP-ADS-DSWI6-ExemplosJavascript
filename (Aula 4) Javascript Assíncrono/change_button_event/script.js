const applyUpdate = (event)=>{
    console.log(event);
    event.target.classList.add("clicked");
}

// Solicita ao web browser para retornar um objeto que representa
// o elemento <button> que corresponde ao seletor CSS
let okay = document.querySelector('#confirmUpdateDialog button.okay');
// Agora registra um callback para quando o usuário clicar no botão
okay.addEventListener('click', applyUpdate);