# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# t.string "name"
#     t.text "description"
#     t.decimal "price"
#     t.integer "store_id", null: false
#     t.integer "stock"


my_store = Store.create(name: "Laura's Market")
eri_store = Store.create(name: "Eri's Shop")
nicoll_store = Store.create(name: "Blend Market")

my_store.products.build(
    name: "MacBook",
    description: "computer/laptop",
    price: 800,
    stock: 1
)

my_store.products.build(
    name: "daisy",
    description: "flower bouquet",
    price: 10,
    stock: 5
)

eri_store.products.build(
    name: "Lo-Fi Mixtape",
    description: "study/coding music",
    price: 5,
    stock: 200
)

eri_store.products.build(
    name: "Hi-Fi Mixtape",
    description: "party time",
    price: 5,
    stock: 200
)

nicoll_store.products.build(
    name: "coffee beans",
    description: "get your caffeine fix",
    price: 16,
    stock: 100
)

nicoll_store.products.build(
    name: "honey",
    description: "oooh so sweet",
    price: 10,
    stock: 100
)

my_store.save
eri_store.save
nicoll_store.save