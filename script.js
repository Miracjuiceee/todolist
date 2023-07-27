let addTodoBtn = document.getElementById('addTask')
let toDoCtn = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')


addTodoBtn.onclick = function() {
    // Verifie si input n'est pas vide 
    if(inputField.value != ""){
        // si input pas vide, créer paragraphe 
        var paragraphe = document.createElement('p')
    } else {
        alert('the input contain nothing.')
    }
    // Valorisé ce paragraphe avec le contenue de l'input
    paragraphe.innerText = inputField.value

    // Insérer le paragraphe dans l'élément toDoContainer
    toDoCtn.appendChild(paragraphe)

    inputField.value = ""

}