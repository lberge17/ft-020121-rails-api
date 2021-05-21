// Add our product class
class Product {
    static all = []

    constructor({id, name, description, price, store_id, stock}){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.store_id = store_id
        this.stock = stock

        Product.all.push(this)
    }

    render(){
        return(
            `<li data-id=${this.id}><span>${this.name}</span> - <span>${this.price}</span> <button data-action="cart">Add to Cart</button></li>`
        )
    }
}