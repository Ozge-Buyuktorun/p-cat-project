const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");
const Schema = mongose.Schema;

//Create a schema with PhotoSchema
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
