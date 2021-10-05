const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { Request, Response } from "express";

class UsersController {


  static async index(req: Request, res: Response) {
    
    try {

      const users = await prisma.user.findMany();

      if (users.length <= 0) {
        return res
          .status(200)
          .json({ success: true, msg: "⚠️ No users registered! You can start by creating some." });
      }

      return res
        .status(200)
        .json({ success: true, msg: "✔️ Users recovered successfully!", data: users});

    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, msg: "✖️ An error occurred!" });
    }

  }

  static async create(req: Request, res: Response) {
    
    const payload = req.body;

    try {

      const user = await prisma.user.create({
        data: { name: payload.name },
      })

      return res
        .status(200)
        .json({ success: true, msg: "✔️ User created successfully!", data: user });
      
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, msg: "✖️ An error occurred!" });
    }
  
  }

  static async show(req: Request, res: Response) {
    try {

      const payload = req.body;

      const user = await prisma.user.findFirst({
        where: {
          id: req.params.id,
        },
      });

      return res.json({success: true, data: user});

    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, msg: "✖️ An error occurred!" });
    }
  }

  static async update(req: Request, res: Response) {
    
    try {
      const payload = req.body;

      const user = await prisma.user.update({
        where: { id: req.params.id },
        data: { name: payload.name }
      });

      return res.status(200).json({ success: true, msg: "✔️ User updated successfully!", data: user});
    
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, msg: "✖️ An error occurred!" });
    }
    

  }

  static async delete(req: Request, res: Response) {

    try {
      const payload = req.body;

      const user = await prisma.user.delete({
        where: { id: req.params.id },
      })

      return res.status(200).json({ success: true, msg: "✔️ User deleted successfully!", data: user });

    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, msg: "✖️ An error occurred!" });
    }

    
  }
  
}

export default UsersController;
