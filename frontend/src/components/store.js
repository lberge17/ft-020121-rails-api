// Add our store class
class Store {
    static all = []
    // static storesContainer = document.getElementById("stores-container");

    constructor({id, name, products}){
        this.id = id
        this.name = name
        this.products = products.map(p => new Product(p)) // [{}, {}] array of objects of product
        // this.li = document.createElement('li')

        Store.all.push(this)
    }

    render(){
        return(`<li id="store-${this.id}" data-id=${this.id}>
                <span>${this.name}</span> 
                <button data-action='display'>Display Products</button>
                <button data-action='edit'>Edit</button> 
                <button data-action='delete'>X</button>
            </li>`
        )
    }

    addToDom(){
        const storesContainer = document.getElementById("stores-container");
        storesContainer.innerHTML += this.render()
    }

    renderProducts(){
        const li = document.getElementById(`store-${this.id}`)
        const ul = document.createElement('ul')

        this.products.forEach(p => ul.innerHTML += p.render())
        li.append(ul)
        currentProducts = ul
    }
}