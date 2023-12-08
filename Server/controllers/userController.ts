import { Request, Response } from "express";
import UserModel from "../Model/UserModel";

export const userLogin = async (req: Request, res: Response) => {
  try {
    const {email,password} = req.body;
    const user = await UserModel.findOne({email:email});
    if(!user){
        res.status(500).send("Un authorized")
    }else{
        res.status(200).send(user)
    }
  } catch (error) {
    console.error(error);
  }
};
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    await new UserModel({
      email: email,
      password: password,
    }).save().then(()=>{
        res.status(200).send("success")
    })
  } catch (error) {
    console.error(error);
  }
};
