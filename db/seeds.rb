# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
caretakers = Caretaker.create([
      {firstname: 'Morty', lastname: 'Smith', profile: '/location/of/images', biography:'Hi Im Morty!'},
    {firstname: 'Summer', lastname: 'Smith', profile: '/location/of/images', biography:'Hi Im Summer!'},
    {firstname: 'Rick', lastname: 'Sanchez', profile: '/location/of/images', biography:'Hi Im Rick!'},
    {firstname: 'Beth', lastname: 'Smith', profile: '/location/of/images', biography:'Hi Im Beth!'},
    {firstname: 'Jerry', lastname: 'Smith', profile: '/location/of/images', biography:'Hi Im Jerry!'}])
