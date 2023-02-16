import { Schema } from "mongoose";
import { model } from "mongoose";

const TransactionModel = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    dateTime: {type: Number, required: true},
})



 