import {Request, Response} from 'express';
import User from '../models/user';




const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});
        //1. check if the user already exists
        if(existingUser){
            //3. if the user exists, return the user object to the client
            return res.status(200).json(existingUser);
        }
        //2. if the user does not exist, create a new user
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser.toObject()); 
    } catch (error) {
        console.log("Error: ", error);  
        res.status(500).json({message: "Internal server error, Error creating user"});
    }
}



export default {
    createCurrentUser,
}