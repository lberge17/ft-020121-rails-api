document.addEventListener("DOMContentLoaded", () => {
    fetchStores();
})


function fetchStores(){
    const storesContainer = document.getElementById("stores-container")

    fetch("http://localhost:3000/api/v1/stores")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(store){
            storesContainer.innerHTML += `<li>${store.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}