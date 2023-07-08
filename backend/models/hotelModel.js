const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    place_name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

const hotelModel = mongoose.model("hotel", hotelSchema);
module.exports = { hotelModel };
