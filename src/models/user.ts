import { Schema, model, Model, Document } from "mongoose";

export interface UserDocument extends Document {
    name: String,
    age: Number
}

interface User {
    name: string,
    age: number
}

//creating staic method using typescript

interface UserModel extends Model<User> {
    myNewStaticFn(): string,
    mathStaticFn(): number
}

const userSchema = new Schema<User, UserModel>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

userSchema.static("myNewStaticFn", () => {
    return 'Hello World';
})

userSchema.static("mathStaticFn", () => {
    return 150;
})




const UserModel = model<User, UserModel>("User", userSchema);
export default UserModel;