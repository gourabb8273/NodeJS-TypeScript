import express, { Request, Response } from 'express';

import {homeDetails} from "../controllers/user"

const router = express.Router();

router.get("/home", homeDetails)

router.get("/about", (req: Request, res: Response): void => {
    res.json({ message: "About Page" })
})

export {
    router
}