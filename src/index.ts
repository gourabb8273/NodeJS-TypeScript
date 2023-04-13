import express, { Request, Response } from 'express';

import { router } from './routes/route';

const app = express();
const PORT = 5000;

app.use(router);

app.get("/test", (req: Request, res: Response): void => {
    res.json({ data: "Test Page" })
})

app.listen(PORT, (): void => {
    console.log(`Server is running on ${PORT}`)
})