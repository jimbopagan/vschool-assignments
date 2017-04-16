var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type:Number,
        min:0,
        max:5,
        required:true
    },
    review: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
})

var roomSchema = new mongoose.Schema({
    type: String,
    number: Number,
    description:String,
    photos:[String],
    price:Number
})

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type:Number,
        min:0,
        max:5,
        "default":0
    },
    services:[String],
    description: String,
    photos:[String],
    currency:String,
    review:[reviewSchema],
    room:[roomSchema],
    //Always store coordinates long east wes, latitude north and south
    location:{
        address:String,
        coordinates:{
            type:[Number],
            index:'2dsphere'
        }
    }
});

mongoose.model('Hotel', hotelSchema)