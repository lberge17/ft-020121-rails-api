let editMode = false

document.addEventListener("DOMContentLoaded", () => {
    addCreateForm();
    fetchStores();
    // listenEdit();
    listenEditDelete();
})


function fetchStores(){
    const storesContainer = document.getElementById("stores-container")

    fetch("http://localhost:3000/api/v1/stores")
    .then(r => r.json())
    .then(data => {
        data.forEach(addStore)
    })
    .catch(err => console.warn(err))
}

function addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="store-submit" value='Create Store' type='submit'/>`
    // const input = document.createElement('input');
    // input.setAttribute('type', 'text')
    // input.type = "text"
    formContainer.append(form)

    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event){
    event.preventDefault()
    const nameInput = event.target[0]
    if (editMode){
        fetch(`http://localhost:3000/api/v1/stores/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204) {
                editMode.children[0].innerText = data.store.name
                editMode = false
                document.getElementById('store-submit').value = "Create Store"
                nameInput.value = ""  
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))

    } else {
        fetch("http://localhost:3000/api/v1/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("I'm in the second then!", data)
            if (data.status === 201){
                addStore(data.store)
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }
    

}

function addStore(store){
    const storesContainer = document.getElementById("stores-container");
    storesContainer.innerHTML += `<li id="store-${store.id}" data-id=${store.id}><span>${store.name}</span> <button data-action='edit'>Edit</button> <button data-action='delete'>X</button></li>`
}

// function listenEdit(){

// }

function listenEditDelete(){
    const storesContainer = document.getElementById("stores-container");

    storesContainer.addEventListener("click", handleEditDelete)
}

function handleEditDelete(e){
    const li = e.target.parentElement
    if (e.target.dataset.action === "delete"){
        // delete this store from backend
        fetch(`http://localhost:3000/api/v1/stores/${li.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                // delete li for DOM
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    } else if (e.target.dataset.action === "edit") {
        // editmode -> li
        editMode = li
        // button -> updateStore
        document.getElementById('store-submit').value = "Update"
        // populate input with name of store
        document.getElementById('name-input').value = li.children[0].innerText
        // submit edit button, update store (in different function)
    }
}