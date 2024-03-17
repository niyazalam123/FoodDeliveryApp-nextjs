const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    imagePath:String,
    restoId:mongoose.Schema.Types.ObjectId
});

export const FoodsSchema =  mongoose.models.foods || mongoose.model("foods",foodModel);