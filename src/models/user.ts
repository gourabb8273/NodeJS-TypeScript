import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
    name: String,
    age: Number
}

interface User {
    name: string,
    age: number
}

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const UserModel = model<User>("User", userSchema);
export default UserModel;