# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Contact.create([
  {last_name: "Lemon", first_name: "Liz", phone_num: "123-456-7890"},
  {last_name: "Donaghy", first_name: "Jack", phone_num: "234-567-8901"},
  {last_name: "Jordan", first_name: "Tracy", phone_num: "345-678-9012"},
  {last_name: "Maroney", first_name: "Jenna", phone_num: "456-789-0123"},
  {last_name: "Parcell", first_name: "Kenneth", phone_num: "567-890-1234"},
  {last_name: "Hornberger", first_name: "Pete", phone_num: "678-901-2345"},
  {last_name: "Rossitano", first_name: "Frank", phone_num: "789-012-3456"},
  {last_name: "Spaceman", first_name: "Leo", phone_num: "890-123-4567"},
  {last_name: "Spurlock", first_name: "Toofer", phone_num: "901-234-5678"},
  {last_name: "Duffy", first_name: "Dennis", phone_num: "555-555-5555"}
])