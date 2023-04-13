import { Request, Response } from 'express';

interface params {
    x: number,
    y: number
}

type sumCheck = (ob: params) => number;

const sumData:sumCheck  = (ob:params) => ob.x + ob.y;
const homeDetails = (req: Request, res: Response) => {
    let ob = {
        x: 12,
        y: 10
    }
    let data = sumData(ob)
    res.json({ message: "Home Page", data })
}

export { homeDetails };