let editMode = false
let currentProducts = false
const shoppeAdapter = new ShoppeAdapter("http://localhost:3000")
const storeForm = new StoreForm

document.addEventListener("DOMContentLoaded", () => {
    storeForm.addCreateForm();
    shoppeAdapter.getStores();
    storeForm.listenEditDelete();
})