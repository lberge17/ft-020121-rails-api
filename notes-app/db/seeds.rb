# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create(
    title: "Learn to code",
    topic: "education",
    content: "code for at least an hour a day"
)
Note.create(
    title: "Study plan",
    topic: "education",
    content: "Find the best programmer memes on Reddit"
)
Note.create(
    title: "MVP",
    topic: "education",
    content: "Always meet project reqs before expanding to ambitous features"
)
Note.create(
    title: "Project planning",
    topic: "education",
    content: "Always map out the tables and relationships needed early on"
)
Note.create(
    title: "DRY",
    topic: "programming",
    content: "do not repeat yourself"
)