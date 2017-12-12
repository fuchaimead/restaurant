Restaurant.create(
  name: Faker::Company.name,
  address: Faker::Address.city,
  phone: Faker::PhoneNumber.phone_number
 )
 
 30.times do 
   Restaurant.first.menu_items.create(
   name: Faker::Food.dish,
   price: Faker::Number.between(5, 20),
   description: Faker::Lorem.sentence 
 ) end
