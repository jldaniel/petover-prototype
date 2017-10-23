# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TODO Fix the image URL locations as they are being stored incorrectly in the db

include ActionView::Helpers::AssetUrlHelper

#User.destroy_all
#Service.destroy_all
#Pet.destroy_all


# Ants in my eyes Johnson, bad dog walker
user1 = User.create!({
  email: 'antsinmyeyes@gmail.com',
  password: 'password',
  first_name: 'Ants In My Eyes',
  last_name: 'Johnson',
  about_me: 'I\'m Ants in My Eyes Johnson here at Ants in My Eyes Johnson\'s Electronics! I mean, there\'s so many ants in my eyes! And there\'s so many TVs! Microwaves! Radios, I think! I can\'t, I\'m not 100 percent sure what we have here in stock, because I can\'t see anything! Our prices, I hope, aren\'t too low! Check out this refrigerator! Only $200! What about this microwave? Only $100, that\'s fair! I\'m Ants in My Eyes Johnson! Everything\'s black! I can\'t see a thing! And also, I can\'t feel anything either, did I mention that? But that\'s not as catchy, as having ants in your eyes, so... that always goes... y\'know, off by the wayside! I can\'t feel, it\'s a very rare disease, all my se— all my nerves, they don\'t allow for the sensation of touch! So I never know what\'s going on! Am I standing, sitting? I don\'t know!',
  picture: Rails.root.join('db/uploads/user/picture/1/picture.png').open,
  img_url: '/assets/images/ants_in_my_eyes_johnson/Ants_in_my_eyes_johnson.png'
})

service1 = user1.services.create({
   name: 'Dog Sitting',
   about: 'I watch dogs, only $100 per day, that\'s fair!',
   rate: 100.00,
   rate_type: 'ONCE',
   picture: Rails.root.join('db/uploads/service/picture/1/picture.png').open,
   img_url: '',
   lat: 37.8532684,
   lng: -122.2904173
})

# Beth Smith, Horse Surgeon
user2 = User.create({
  email: 'bethcutshorses@rickmail.com',
  password: 'password',
  first_name: 'Beth',
  last_name: 'Smith',
  about_me: 'I WILL REACH INTO HEAVEN AND YANK YOUR SCREAMING DEER SOUL BACK!',
  picture: Rails.root.join('db/uploads/user/picture/2/picture.png').open,
  img_url: '/assets/images/beth_smith/Rick_and_Morty_characters_-_Beth_Smith.png'
})

service2 = user2.services.create({
   name: 'Horse Surgery',
   about: 'I perform surgery on horses and sometimes deer, they are pretty much horses anyway',
   rate: 550.00,
   rate_type: 'ONCE',
   picture: Rails.root.join('db/uploads/service/picture/2/picture.png').open,
   img_url: '/assets/images/beth_smith/S1e1_horse_surgery.png',
   lat: 37.9989152,
   lng: -121.8859537
})


# Bird Person,
user3 = User.create({
                        email: 'birdperson@birdmail.com',
                        password: 'password',
                        first_name: 'Bird',
                        last_name: 'Person',
                        about_me: 'I am looking to soul bond',
                        picture: Rails.root.join('db/uploads/user/picture/3/picture.png').open,
                        img_url: '/assets/images/bird_person/bird_person.png'
                    })

# Jerry Smith, cat owner, Gazorpazorpfield
user4 = User.create({
                        email: 'jsmith@aol.com',
                        password: 'password',
                        first_name: 'Jerry',
                        last_name: 'Smith',
                        about_me: 'I am looking to soul bond',
                        picture: Rails.root.join('db/uploads/user/picture/4/picture.png').open,
                        img_url: '/assets/images/jerry_smith/Rick_and_Morty_characters_-_Jerry_Smith.png'
                    })

pet1 = user4.pets.create({
    name: 'Gazaorpazorpfield',
    about_me: 'I want my fucking enchiladas!',
    animal: 'cat',
    picture: Rails.root.join('db/uploads/pet/picture/1/picture.png').open,
    img_url: '/assets/images/' + image_url('Gazorpazorpfield_(Character).png')
                         })

# Krombopulos Michael, pet owner, caretaker pet euthenasia
user5 = User.create({
                        email: 'krombopuloskills@gmail.com',
                        password: 'password',
                        first_name: 'Krombopulos',
                        last_name: 'Michael',
                        about_me: 'I\'m very discreet. I have no code of ethics. I will kill anyone, anywhere. Children, animals, old people, doesn\'t matter. I just love killing.',
                        picture: Rails.root.join('db/uploads/user/picture/5/picture.png').open,
                        img_url: '/assets/images/krombopulos_michael/plfmrqxfe6xy.png'
                    })

pet2 = user5.pets.create({
                             name: 'Ghost in a Jar',
                             about_me: 'Oh hai there!',
                             animal: 'ghost',
                             picture: Rails.root.join('db/uploads/pet/picture/2/picture.png').open,
                             img_url: '/assets/images/krombopulos_michael/zD8gCux.png'
                         })

service3 = user5.services.create({
                                     name: 'Animal euthanasia',
                                     about: 'I can do that...for money',
                                     rate: 1000.00,
                                     rate_type: 'ONCE',
                                     picture: Rails.root.join('db/uploads/service/picture/3/picture.png').open,
                                     img_url: '/assets/images/' + image_url(''),
                                     lat: 37.8576872,
                                     lng: -122.2914238
                                 })



# Morty Smith, three dogs
user6 = User.create({
                        email: 'morty@mortymail.com',
                        password: 'password',
                        first_name: 'Morty',
                        last_name: 'Smith',
                        about_me: 'Aw geez I just love animals and stuff man',
                        picture: Rails.root.join('db/uploads/user/picture/6/picture.png').open,
                        img_url: '/assets/images/morty_smith/morty.png'
                    })

pet3 = user6.pets.create({
                             name: 'Snuffles',
                             about_me: 'Where are my balls Summer?',
                             animal: 'dog',
                             picture: Rails.root.join('db/uploads/pet/picture/3/picture.png').open,
                             img_url: '/assets/images/morty_smith/snuffles_helmet.png'
                         })

# Mr. Meeseeks, pet sitting
user7 = User.create({
                        email: 'mrmeeseeks@meeseekmail.com',
                        password: 'password',
                        first_name: 'Mr.',
                        last_name: 'Meeseeks',
                        about_me: 'I\'m Mr. Meeseeks look at me!',
                        picture: Rails.root.join('db/uploads/user/picture/7/picture.png').open,
                        img_url: '/assets/images/mr_meeseeks/MeeseeksHQ.png'
                    })

service4 = user7.services.create({
                                     name: 'Dog walking',
                                     about: 'Ohhhhh yeah, caaaaan do!',
                                     rate: 20.00,
                                     rate_type: 'HOURLY',
                                     picture: Rails.root.join('db/uploads/service/picture/4/picture.png').open,
                                     img_url: '/assets/images/' + image_url(''),
                                     lat: 37.8491651,
                                     lng: -122.2921053
                                 })

# Rick Sanches, cat owner squanchy
user8 = User.create({
                        email: 'rick_c137@interdimensionalmail.com',
                        password: 'password',
                        first_name: 'Rick',
                        last_name: 'Sanches',
                        about_me: 'I need that Szechuan dipping sauce Morty... and also someone to look after my cat',
                        picture: Rails.root.join('db/uploads/user/picture/8/picture.png').open,
                        img_url: '/assets/images/rick_sanches/Rick_and_Morty_characters_-_Rick_Sanchez.png'
                    })

pet4 = user8.pets.create({
                             name: 'Squanchy',
                             about_me: 'I\'m squanchin here!',
                             animal: 'cat',
                             picture: Rails.root.join('db/uploads/pet/picture/4/picture.png').open,
                             img_url: '/assets/images/' + image_url('squanching.png')
                         })

# Summer, cat owner, dog walker
user9 = User.create({
                        email: 'summer@gmail.com',
                        password: 'password',
                        first_name: 'Summer',
                        last_name: 'Smith',
                        about_me: 'My deal is that I\'m like totally great with animals',
                        picture: Rails.root.join('db/uploads/user/picture/9/picture.png').open,
                        img_url: '/assets/images/summer_smith/Rick_and_Morty_characters_-_Summer_Smith.png'
                    })

pet5 = user9.pets.create({
                             name: 'Izzy',
                             about_me: 'meow',
                             animal: 'cat',
                             picture: Rails.root.join('db/uploads/pet/picture/5/picture.png').open,
                             img_url: '/assets/images/summer_smith/Izzy.png'
                         })

service5 = user9.services.create({
                                     name: 'Dog walking',
                                     about: 'I\'ll be the best dog walker',
                                     rate: 15.00,
                                     rate_type: 'HOURLY',
                                     picture: Rails.root.join('db/uploads/service/picture/5/picture.png').open,
                                     img_url: '/assets/images/' + image_url(''),
                                     lat: 37.8384397,
                                     lng: -122.2625427
                                 })



