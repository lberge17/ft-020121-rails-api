let editMode = false
const shoppeAdapter = new ShoppeAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
    addCreateForm();
    shoppeAdapter.getStores();
    listenEditDelete();
})

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
        shoppeAdapter.editStore(editMode, nameInput)
    } else {
        shoppeAdapter.createStore(nameInput)
    }    
}

function listenEditDelete(){
    const storesContainer = document.getElementById("stores-container");
    storesContainer.addEventListener("click", handleEditDelete)
}

function handleEditDelete(e){
    const li = e.target.parentElement
    if (e.target.dataset.action === "delete"){
        // delete this store from backend
        shoppeAdapter.deleteStore(li)
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