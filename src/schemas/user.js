import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel