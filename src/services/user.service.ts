//mongoose typescript doc for CRUD DB

import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import User, { UserDocument } from "../models/user";

// //adding user
// export function createUser(input: DocumentDefinition<UserDocument>) {
//     return User.create(input)
// }

//adding user
export function createUser(input: any) {
    return User.create(input)
}

//finding user
export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
    return User.find(query, {}, options);
}

//updating user
export function findAndUpdate(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options?: QueryOptions) {
    return User.findOneAndUpdate(query, update, options);
}

//updating user
export function deleteUser(query: FilterQuery<UserDocument>) {
    return User.deleteOne(query);
}
