console.log('PROVA!')

const inputField = function() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', "INSERISCI IL NOME DELL'INPUT");
    const div = document.getElementById("div");
    div.appendChild(input);
    const button = document.createElement("button");
    button.innerText = "AGGIUNGI!";
    const ul = document.createElement("ul");
    div.appendChild(ul);
    div.appendChild(button);
    button.addEventListener("click", function(e) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = input.value;
        input.value = "";
        const remove = document.createElement("button");
        li.appendChild(remove);
        remove.addEventListener("click", function (e) {
            li.remove();
        });
        li.addEventListener("click", function (e) {
            li.style.textDecoration = "line-through";
        });
    });
};
inputField();