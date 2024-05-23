 import express, {Request, Response} from 'express';
 import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config";




const app = express();



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/test", async(req: Request, res: Response)=>{
    res.json({message: "Hello World"});
});

app.listen(7000, ()=>{
    console.log("Server is running on port 7000");
});