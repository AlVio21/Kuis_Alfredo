const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    kecamatan : {type : String, required : true},
    kelurahan : {type : String, required : true}
});


module.exports = mongoose.model("Data", dataSchema);
