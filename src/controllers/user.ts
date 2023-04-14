import { Request, Response } from 'express';

import UserModel from "../models/user";
import { createUser, findAndUpdate, findUser, deleteUser } from "../services/user.service";

interface params {
    x: number,
    y: number
}

type sumCheck = (ob: params) => number;

const sumData: sumCheck = (ob: params) => ob.x + ob.y;

const homeDetails = async (req: Request, res: Response) => {

    //---ADD-----
    const user = await createUser({
        name: "Debanjan",
        age: 26
    })

    //---UPDATE-----
    const userUpdate = await findAndUpdate({ name: "Gourab" }, { age: 27 }, { new: true })


    //---DELETE-----
    const deleteuser = await deleteUser({ name: "Ram" })

    const getDataFromStaticMethod = UserModel.myNewStaticFn();

    const getMathDataFromStaticFn = UserModel.mathStaticFn()

    let myData = await findUser({});
    console.log(myData)
    let ob = {
        x: 12,
        y: 10
    }
    let data = sumData(ob)
    res.json({
        message: "Home Page", data, myData,
        getDataFromStaticMethod,
        getMathDataFromStaticFn
    })
}

export { homeDetails };