// handle all fetch requests

class ShoppeAdapter {

    constructor(baseURL){
        this.baseStoreURL = `${baseURL}/api/v1/stores`
    }

    getStores(){
        fetch(this.baseStoreURL)
        .then(r => r.json())
        .then(stores => {
            stores.forEach(store => {
                const s = new Store(store)
                s.addToDom()
            })
            // debugger
        })
        .catch(error => console.error(error))


        // function fetchStores(){
        //     // const storesContainer = document.getElementById("stores-container")
        
        //     // fetch("http://localhost:3000/api/v1/stores")
        //     // .then(r => r.json())
        //     // .then(data => {
        //     //     data.forEach(addStore)
        //     // })
        //     // .catch(err => console.warn(err))
        // }
    }

    editStore(editMode, nameInput){
        fetch(`${this.baseStoreURL}/${editMode.dataset.id}`, {
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
    }

    createStore(nameInput){
        fetch(this.baseStoreURL, {
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
                const s = new Store(data.store)
                s.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }

    deleteStore(li){
        fetch(`${this.baseStoreURL}/${li.dataset.id}`, {
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
    }
}