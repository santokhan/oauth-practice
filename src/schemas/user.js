import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    displayName: String,
    name: Object,
    emails: Array,
    photos: Array,
    provider: String,
    _raw: String,
    _json: Object
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel