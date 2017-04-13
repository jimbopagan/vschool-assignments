var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schema-practice');

var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    age: Number,
    interests: [String],
    friends: [String]
});

var Dog = mongoose.model('Dog', dogSchema);

var myDog = new Dog({
    name: 'Lucy',
    age: 6,
    interests: ['Digging holes', 'Chasing rabbits and lizards'],
    friends: ['Tribe', 'Misha']
});

myDog.save(function (err, new_dog) {
    console.log(new_dog);
});

Dog.find({age: 6}, function (err, dog) {  
  console.log(dog);
});